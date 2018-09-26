const express = require('express')
const router = express.Router();
const request = require('request');
const cheerio = require('cheerio')
router.get('/',(req,res)=>{
request('https://www.kancloud.cn/thinkphp/composer/35668', function (error, response, body) {
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    const $ = cheerio.load(body)
     var html = $('.content').html()
     res.send(`<h5>${html}</h5>`)
      console.log(html)
    // console.log('body:', body); // Print the HTML for the Google homepage.
});
})
module.exports=router
