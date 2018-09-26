//导入express模块
const express = require('express');
//生成router路由对象
const router = express.Router();

// 实现二级路由

router.get('/',(req,res)=>{
    res.send('<h1>显示文章</h1>')
})
router.get('/add', (req, res) => {
    res.send('<h1>添加文章</h1>')
})
router.get('/delete', (req, res) => {
    res.send('<h1>删除文章</h1>')
})
router.get('/update', (req, res) => {
    res.send('<h1>更新文章</h1>')
})
// 导出路由对象
module.exports=router