//二级路由页面
const express = require('express');
// 生成一个router对象
const router = express.Router();
// 实现二级路由
// 显示分类 --首页
router.get('/',(req,res)=>{
    res.send('显示分类')
})
//添加分类
router.get('/add',(req,res)=>{
    res.send('<h1>添加分类</h1>')
})
//删除分类
router.get('/delete',(req,res)=>{
    res.send('删除分类')
})
// 更新分类
router.get('/update',(req,res)=>{
    res.send('更新分类')
})
// router.get('/test/:id', (req, res) => {
//   res.send(req.query)
// })
// 导出router对象
module.exports = router;