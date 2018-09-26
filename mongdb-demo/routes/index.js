var express = require('express');
var router = express.Router();
// 导入model
var modelClass = require('../model/class')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//MongoDB
router.get('/class',(req,res)=>{
  // 分页操作
  let {pn=1,size=2}=req.query;
  // 确保pn,size是整数
   pn = parseInt(pn);
   size = parseInt(size);
  //  查询操作
  modelClass.find().limit(size).skip((pn-1)*size).then(data=>{
      res.json({
          code: 200,
          data
        
      }) 
  })
})
// 增加一条数据
router.post('/class',(req,res,next)=>{
  let {name,sid,personaldesc}=req.body
  modelClass.create({name,sid,personaldesc}).then(data=>{
    console.log(data)
    res.json({
      code:200,
      data
    })
  })
})
// 修改一条数据
router.put('/class/:id',(req,res,next)=>{
     let {
       personaldesc
     } = req.body;
     let {id} = req.params;
     modelClass.updateOne({
         _id: id
       }, {
         $set: {
           personaldesc
         }
       }).then(data => {
       console.log(data);
       res.json({
         code:200,
         data
       })
     })
})
// 删除一条数据
router.delete('/class/:id',(req,res,next)=>{
  let {id}=req.params
  modelClass.deleteOne({_id:id}).then(data=>{
    console.log(data)
    res.json({
      code:200,
      data
    })
  })
})
// 查找一条数据
router.get('/class/:id',(req,res)=>{
  let {id}=req.params;
  modelClass.findById({_id:id}).then(doc=>{
    console.log(doc)
    res.json({
      code:200,
      data:doc
    })
  })
})
module.exports = router;
