const express=require('express');
const path = require('path')
const router=express.Router();
router.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname, '../views/请求表单.html'))
    // res.send(path.resolve(__dirname))
 
})
router.get('/get',(req,res)=>{
    const {username,password}=req.query
    res.send(`
    <h2>用户名:${username}</h2>
    <h2>密码:${password}</h2>
    `)
    // res.send('1111')
})
router.post('/post', (req, res) => {
    const {
        username,
        password
    } = req.body
    res.send(`
    <h2>用户名:${username}</h2>
    <h2>密码:${password}</h2>
    `)
    console.log(req.body.username)
    // res.send('1111')
})
// 使用原生方法解析post请求
// router.post('/post', (req, res) => {
//     const {
//         username,
//         password
//     } = req.body
//     let data='';
//     req.on('data',function(chunk) {
//         data += chunk;
//     })
//     req.on('end',function(){
//         console.log(data);
//     })
//     res.send(`
//   12345
//     `)
// })
module.exports=router
















// req.query不能再得到username和password，因为地址栏中没哟
// req.body可以得到，post请求使用req.body