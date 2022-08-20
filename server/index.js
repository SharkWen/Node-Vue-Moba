const express = require('express');
const app = express();
require('express-async-errors');
app.set('secret','fwef33r9r84')
app.use(require('cors')())
app.use(express.json())
app.use('/uploads',express.static(__dirname + '/uploads'))
require('./plugins/db')(app);
require('./routes/admin/index')(app);
require('./routes/web/index')(app);
app.listen(3000, (err) => {
    if (err) throw err;
    console.log('http://localhost:3000');
})