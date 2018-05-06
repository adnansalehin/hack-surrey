var express = require('express');
var proxy = require('http-proxy-middleware');
var cors = require('cors');
const got = require ('got');
var app = express();


app.get('/getRes/:tick', (req,res, next) => {
    this.state = {ticker: req.params.tick};
    // this.state.ticker = req.params.tick;
    console.log(res.json);
    console.log("tikcer value received: " + req.params.tick);
    next()
});
app.use(cors());
app.use('/getRes', async (req,res) => {
    console.log("tikcer value received: " + this.ticker);
    const args = {
        "headers": {
            "Authorization": "Bearer c4XdqSU8MLeB3owjX9yJxkv9mKHa"
        },
        "body": {
            "where": {
                "ticker": this.state.ticker
            },
            "startDate": "2014-01-01",
            "endDate": "2018-01-01",
            "intervals":480
            // "fields": [ "ticker", "name" ]
        },
        "json": true
    };
    try {
        let obj = await got.post("https://api.marquee.gs.com/v1/data/USCANFPP_MINI/query", args);
        res.json(obj.body)
    } catch(e) {
        console.log(e.toString());
        res.json(e);
    }


});
app.listen(3001);
