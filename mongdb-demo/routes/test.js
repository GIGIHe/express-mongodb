var express = require('express');
var path = require('path')
//引入formidable插件
var formidable = require('formidable')

//创建一个表单管理对象
var form = new formidable.IncomingForm()

var router = express.Router();
router.get('/',(req,res)=>{
    // console.log()
    res.send(req.baseUrl)
})
router.get('/render/:id', (req, res) => {
    // console.log()
    res.send(req.params)
})

// res.render()方法
router.get('/hi', (req, res) => {
    // console.log()
    // res.render('01',{say:200000000})
    res.render('02')
})

// res.download方法
router.get('/download',(req,res)=>{
    res.download(path.join(__dirname,'../views/01.ejs'),01.ejs)
    res.download(path.join(__dirname,'../public/images/41.gif'),"41.gif")
})
// 上传文件
router.post('/upload',(req,res)=>{
    // 设置上传路径
     form.uploadDir = path.join(__dirname,'../public/images');
    // 设置保留拓展名
    form.keepExtensions = true;
     //  是单个表单域能够申请到的最大内存值，不是限定文件的大小
     form.maxFieldsSize= 4*1024*1024;
     //设置上传文件的大小
     form.maxFileSize = 200*1024*1024
    //  解析req
     form.parse(req,function(err,fileds,files) {
         console.log("err",err)
         console.log("fileds", fileds)
         console.log("files",files)
     })
    //  监听一个结束事件
     form.on('end',()=>{
         res.send('图片上传成功')
     })
})
module.exports=router