module.exports = app => {
    const router = require('express').Router();
    const mongoose = require('mongoose');
    const Category = mongoose.model("Category");
    const Article = mongoose.model("Article");
    const Hero = mongoose.model("Hero");
    const Ads = mongoose.model("Ad");
    const { newsTitles, heroesData } = require('./data')();
    // router.get('/news/init', async (req, res) => {
    //     // const parent = await Category.findOne({
    //     //     name: "新闻资讯"
    //     // })
    //     // const cats = await Category.find().where({
    //     //     parentName: parent
    //     // }).lean();
    //     // // const newsList = newsTitles.map(title => {
    //     // //     let randomCats = cats.slice(0).sort((a, b) => Math.random() - 0.5);
    //     // //     return {
    //     // //         categories: randomCats.slice(0, 2),
    //     // //         title: title
    //     // //     }
    //     // // })
    //     // Article.deleteMany({});
    //     // const newsList = newsTitles.map((titleList, i) => {
    //     //     titleList.titles = titleList.titles.map(title => {
    //     //         return {
    //     //             categories: cats[i]._id,
    //     //             title: title
    //     //         }
    //     //     })
    //     //     Article.insertMany(titleList.titles);
    //     //     return titleList
    //     // })

    //     // res.send(newsList);
    //     let newInit = []

    //     for (let cats of newsTitles) {
    //         //if(cats.name=="公告") continue; 
    //         const catsName = await Category.findOne({ name: cats.name });
    //         //await Article.deleteMany({categories:catsName._id})
    //         cats.titles = cats.titles.map(ti => {
    //             return {
    //                 categories: catsName._id,
    //                 title: ti
    //             }
    //         })
    //         newInit.push(cats.titles)
    //         await Article.insertMany(cats.titles)
    //     }
    //     res.send(newInit)
    // })
    router.get('/news/list', async (req, res) => {
        // const parent  = await Category.findOne({
        //     name:"新闻资讯"
        // }).populate({
        //     path:'children',
        //     populate:{
        //         path:'newsList'
        //     }
        // }).lean();
        const parent = await Category.findOne({
            name: '新闻资讯'
        })
        //聚合查询
        let cats = await Category.aggregate([
            {
                $match:
                    { parentName: parent._id }
            },
            {
                $lookup: {
                    from: 'articles',
                    localField: '_id',
                    foreignField: 'categories',
                    as: 'newsList'
                }
            },
            {
                $addFields: {
                    newsList: { $slice: ['$newsList', 5] }
                }
            }
        ])
        let subCats = cats.map(v => v._id);
        // cats.unshift({
        //     name: '热门',
        //     newsList: await Article.find().where({
        //         categories: { $in: subCats }
        //     }).populate('categories').limit(5).lean()
        // })
        let hots = await Article.find({ categories: { $in: subCats } }).populate('categories').lean();
        hots.sort((a, b) => Math.random() - 0.5);
        let hotArr = []
        for (let i = 0; i < 5; i++) {
            hotArr.push(hots[i])
        }
        cats.unshift({
            name: '热门',
            newsList: hotArr
        })
        cats.map(cat => {
            cat.newsList.map(news => {
                news.categoryName = cat.name === '热门' ? news.categories[0].name : cat.name;
                return news
            })
            return cat
        })
        res.send(cats)
    })
    // router.get('/heroes/init', async (req, res) => {
    //     const data = [];
    //     await Hero.deleteMany({});
    //     for (let cat of heroesData) {
    //         if (cat.name === '热门') continue;
    //         const category = await Category.findOne({
    //             name: cat.name
    //         })
    //         cat.heroes = cat.heroes.map(hero => {
    //             hero.categories = category
    //             return hero;
    //         })
    //         data.push(cat.heroes);
    //         await Hero.insertMany(cat.heroes)
    //     }
    //     res.send(data);
    // })
    router.get('/heroes/list', async (req, res) => {

        const parent = await Category.findOne({
            name: '英雄分类'
        });
        const cats = await Category.aggregate([
            { $match: { parentName: parent._id } },
            {
                $lookup: {
                    from: 'heroes',
                    localField: '_id',
                    foreignField: 'categories',
                    as: 'heroList',
                },
            }
        ])
        const subCats = cats.map(v => v._id)
        cats.unshift({
            name: '热门',
            heroList: await Hero.aggregate([
                { $match: { categories: { $in: subCats } } },
                {
                    $sample: {
                        size: 10
                    }
                }
            ])
        })
        res.send(cats);
    })
    router.get('/articles/:id', async (req, res) => {
        const data = await Article.findOne({ _id: req.params.id }).lean();
        data.related = await Article.aggregate([
            { $match: { categories: { $in: data.categories } } },
            { $sample: { size: 2 } }
        ])
        res.send(data)
    })
    router.get('/heroes/:id', async (req, res) => {
        const data = await Hero.findById(req.params.id)
        .populate('categories items1 items2 partners.hero').lean();
        res.send(data); 
    })
    router.get('/ads/list',async (req,res)=>{
        const data = await Ads.find().lean();
        res.send(data);
    })
    app.use('/web/api', router);
}

