// const newsTitles = ["夏日新版本“稷下星之队”即将6月上线", "王者荣耀携手两大博物馆 走进稷下学宫", "王者大陆第一学院【稷下】档案",
// "跨界合作丨控油神装登场，唤醒无限护肤力量！", "像素游戏时代“老四强”重聚《魂斗罗：归来》，新版本、新英雄燃爆两周年庆", "6月11日全服不停机更新公告",
// "【已修复】王者大陆的端午宝藏活动页面异常问题说明", "6月7日体验服停机更新公告", "6月4日全服不停机更新公告",
// "关于2019年KPL春季赛总决赛 RNG.M vs eStarPro 补赛、赛果及世界冠军杯安排公告", "活力夏日活动周 王者峡谷好礼多",
// "王者大陆的端午宝藏活动公告", "峡谷庆端午 惊喜礼不断", "【场里场外，一起开黑】感恩礼包放送", "KPL总决赛来临之际 场里场外一起开黑/观赛活动开启！",
// "【6月15日 再战西安 · 2019年KPL春季赛总决赛重启公告】", "王者荣耀世界冠军杯荣耀来袭，KPL赛区选拔赛谁能突围而出？",
// "【关于2019年KPL春季赛总决赛门票退换及异地用户现场观赛补贴公告】", "KRKPL：还在用庄周打辅助？JY边路庄周带你越塔莽！",
// "世冠KPL赛区战队出征名单公布 王者，无惧挑战！"
// ]
const newsTitles =
    [
        {
            name: "新闻",
            titles: ['【峡谷问答室】第4期：铁血军团JC的秘密，你好奇什么？\n\n10/31',
                'KPL日报：eStarPro2:0横扫AS仙阁，小渝强势回归i射手位\n\n09/23',
                '《王者荣耀》评测：注意！这不是演习！\n\n12/04', '《王者荣耀》试玩评测 跨区开黑享受五人团战\n\n12/03',
                '《王者荣耀》公测来袭 新版本深度解析评测\n\n12/02', '王者荣耀游戏评测 最纯正最公平的MOBA手机游戏\n\n11/30',
                '《王者荣耀》公测版本评测：新地图英雄重磅来袭\n\n11/30', '续写英雄传奇 双排时代来临《王者荣耀》评测\n\n11/30']
        },
        {
            name: "公告",
            titles: ['展示手游MOBA玩家风采，《王者荣耀》视频大赛正式开赛！\n\n11/27',
             '11月13日无法登录游戏公告\n\n11/16', '11月3日游戏充值异常公告\n\n11/04',
              '1102-1108限免英雄轮换公告\n\n11/01', '微社区个人中心神秘上线\n\n10/29',
               '团战之夜即将打响 超多福利马上来袭\n\n10/29', '不限号开撸，百万联赛战火燃起！\n\n10/28', 
               '《王者荣耀》安装指南\n\n10/28']
        },
        {
            name: "活动",
            titles: ['玩赚双11 三国驾到\n\n11/10', '《王者荣耀》登顶iOS免费榜 全员福利即将发送\n\n10/27', 
            '【王者荣耀】定名活动公告\n\n10/25', '“王者降临”第二周活动公告（10.19-10.26）\n\n10/19',
             '1019-1025限免英雄轮换公告\n\n10/18', '1012-1018限免英雄轮换公告\n\n10/11', 
             '【王者爆料集合】专注手残党福利\n\n09/30', '【王者爆料第二弹】妲己各种姿势揭秘全新版本\n\n09/29']
        }
    ]


const rawData = [{
    "name": "热门",
    "heroes": [
        {
            "name": "后羿",
            "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/169/169.jpg"
        },
        {
            "name": "孙悟空",
            "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg"
        }, {
            "name": "铠",
            "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/193/193.jpg"
        }, {
            "name": "鲁班七号",
            "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/112/112.jpg"
        }, {
            "name": "亚瑟",
            "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/166/166.jpg"
        }, {
            "name": "甄姬",
            "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/127/127.jpg"
        }, {
            "name": "孙尚香",
            "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/111/111.jpg"
        }, {
            "name": "典韦",
            "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/129/129.jpg"
        }, {
            "name": "韩信",
            "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/150/150.jpg"
        }, {
            "name": "庄周",
            "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/113/113.jpg"
        }]
}, {
    "name": "战士",
    "heroes": [
        {
            "name": "赵云",
            "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/107/107.jpg"
        },
        {
            "name": "钟无艳",
            "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/117/117.jpg"
        }, {
            "name": "吕布",
            "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/123/123.jpg"
        }, {
            "name": "曹操",
            "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/128/128.jpg"
        }, {
            "name": "典韦",
            "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/129/129.jpg"
        }, {
            "name": "宫本武藏",
            "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/130/130.jpg"
        }, {
            "name": "达摩",
            "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/134/134.jpg"
        }, {
            "name": "老夫子",
            "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/139/139.jpg"
        }, {
            "name": "关羽",
            "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/140/140.jpg"
        }, {
            "name": "露娜",
            "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/146/146.jpg"
        }, {
            "name": "花木兰",
            "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/154/154.jpg"
        }, {
            "name": "亚瑟",
            "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/166/166.jpg"
        }, {
            "name": "孙悟空",
            "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg"
        }, {
            "name": "刘备",
            "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/170/170.jpg"
        }, {
            "name": "杨戬",
            "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/178/178.jpg"
        }, {
            "name": "雅典娜",
            "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/183/183.jpg"
        }, {
            "name": "哪吒",
            "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/180/180.jpg"
        }, {
            "name": "铠",
            "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/193/193.jpg"
        }, {
            "name": "狂铁",
            "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/503/503.jpg"
        }, {
            "name": "李信",
            "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/507/507.jpg"
        }, {
            "name": "盘古",
            "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/529/529.jpg"
        }]
},
{
    "name": "法师",
    "heroes": [{
        "name": "小乔",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/106/106.jpg"
    }, {
        "name": "墨子",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/108/108.jpg"
    }, {
        "name": "妲己",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/109/109.jpg"
    }, {
        "name": "嬴政",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/110/110.jpg"
    }, {
        "name": "高渐离",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/115/115.jpg"
    }, {
        "name": "扁鹊",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/119/119.jpg"
    }, {
        "name": "芈月",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/121/121.jpg"
    }, {
        "name": "周瑜",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/124/124.jpg"
    }, {
        "name": "甄姬",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/127/127.jpg"
    }, {
        "name": "武则天",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/136/136.jpg"
    }, {
        "name": "貂蝉",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/141/141.jpg"
    }, {
        "name": "安琪拉",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/142/142.jpg"
    }, {
        "name": "姜子牙",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/148/148.jpg"
    }, {
        "name": "王昭君",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/152/152.jpg"
    }, {
        "name": "张良",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/156/156.jpg"
    }, {
        "name": "不知火舞",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/157/157.jpg"
    }, {
        "name": "钟馗",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/175/175.jpg"
    }, {
        "name": "诸葛亮",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/190/190.jpg"
    }, {
        "name": "干将莫邪",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/182/182.jpg"
    }, {
        "name": "女娲",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/179/179.jpg"
    }, {
        "name": "杨玉环",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/176/176.jpg"
    }, {
        "name": "弈星",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/197/197.jpg"
    }, {
        "name": "米莱狄",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/504/504.jpg"
    }, {
        "name": "沈梦溪",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/312/312.jpg"
    }, {
        "name": "上官婉儿",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/513/513.jpg"
    }, {
        "name": "嫦娥",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/515/515.jpg"
    }]
}, {
    "name": "坦克",
    "heroes": [{
        "name": "廉颇",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/105/105.jpg"
    }, {
        "name": "刘禅",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/114/114.jpg"
    }, {
        "name": "白起",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/120/120.jpg"
    }, {
        "name": "夏侯惇",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/126/126.jpg"
    }, {
        "name": "项羽",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/135/135.jpg"
    }, {
        "name": "程咬金",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/144/144.jpg"
    }, {
        "name": "刘邦",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/149/149.jpg"
    }, {
        "name": "牛魔",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/168/168.jpg"
    }, {
        "name": "张飞",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/171/171.jpg"
    }, {
        "name": "东皇太一",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/187/187.jpg"
    }, {
        "name": "苏烈",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/194/194.jpg"
    }, {
        "name": "梦奇",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/198/198.jpg"
    }, {
        "name": "孙策",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/510/510.jpg"
    }, {
        "name": "猪八戒",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/511/511.jpg"
    }]
}, {
    "name": "刺客",
    "heroes": [{
        "name": "阿轲",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/116/116.jpg"
    }, {
        "name": "李白",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/131/131.jpg"
    }, {
        "name": "韩信",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/150/150.jpg"
    }, {
        "name": "兰陵王",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/153/153.jpg"
    }, {
        "name": "娜可露露",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/162/162.jpg"
    }, {
        "name": "橘右京",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/163/163.jpg"
    }, {
        "name": "百里玄策",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/195/195.jpg"
    }, {
        "name": "裴擒虎",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/502/502.jpg"
    }, {
        "name": "元歌",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/125/125.jpg"
    }, {
        "name": "司马懿",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/137/137.jpg"
    }, {
        "name": "云中君",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/506/506.jpg"
    }]
}, {
    "name": "射手",
    "heroes": [{
        "name": "孙尚香",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/111/111.jpg"
    }, {
        "name": "鲁班七号",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/112/112.jpg"
    }, {
        "name": "马可波罗",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/132/132.jpg"
    }, {
        "name": "狄仁杰",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/133/133.jpg"
    }, {
        "name": "后羿",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/169/169.jpg"
    }, {
        "name": "李元芳",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/173/173.jpg"
    }, {
        "name": "虞姬",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/174/174.jpg"
    }, {
        "name": "成吉思汗",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/177/177.jpg"
    }, {
        "name": "黄忠",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/192/192.jpg"
    }, {
        "name": "百里守约",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/196/196.jpg"
    }, {
        "name": "公孙离",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/199/199.jpg"
    }, {
        "name": "伽罗",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/508/508.jpg"
    }]
}, {
    "name": "辅助",
    "heroes": [{
        "name": "庄周",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/113/113.jpg"
    }, {
        "name": "孙膑",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/118/118.jpg"
    }, {
        "name": "蔡文姬",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/184/184.jpg"
    }, {
        "name": "太乙真人",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/186/186.jpg"
    }, {
        "name": "大乔",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/191/191.jpg"
    }, {
        "name": "鬼谷子",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/189/189.jpg"
    }, {
        "name": "明世隐",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/501/501.jpg"
    }, {
        "name": "盾山",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/509/509.jpg"
    }, {
        "name": "瑶",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/505/505.jpg"
    }]
}]

module.exports = () => ({ newsTitles, rawData });