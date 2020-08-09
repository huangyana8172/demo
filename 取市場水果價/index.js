var express =require('express')
var axios=require('axios')
var fs = require('fs')
var app=express()
app.get('/member2', function(req, res) {
    res.send(fs.readFileSync('./index.html').toString())
})
app.get('/getdata',function(req,res){
    axios.default.get('https://data.coa.gov.tw/Service/OpenData/FromM/FarmTransData.aspx').then(function(result){
    res.send(result.data)    
    }).catch(function(error){
        res.send(error)
    })
})
app.listen(1234)
