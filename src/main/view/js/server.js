var express = require('express');
var proxy = require('http-proxy-middleware');
var cors = require('cors')
const got = require ('got');
var app = express();

app.use(cors())
app.use('/getAPPL', async (req,res) => {

    const args = {
        "headers": {
            "Authorization": "Bearer c4XdqSU8MLeB3owjX9yJxkv9mKHa"
        },
        "body": {
            "where": {
                "ticker": ['AAPL']
            },
            "startDate": "2016-11-01",
            "endDate": "2017-01-01"
        },
        "json": true
    };
    try {
        let obj = await got.post("https://api.marquee.gs.com/v1/data/USCANFPP_MINI/query", args);
        res.json(obj.body)
    } catch(e) {
        console.log(e);
        res.json(e);
    }


});
app.listen(3001);
