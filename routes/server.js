const express = require('express');
const router = express.Router();
const {MongoClient} = require('mongodb')

const connection = new MongoClient('mongodb://127.0.0.1:27017');
connection.connect();


router.get('/' , async(req , res )=>{
   const data = await connection.db('booky').collection('books').find().toArray() ;
    res.render('books', {
        books: data
    });
});

router.get('/:title' , async(req , res)=>{
    const title = req.params.title ;
    const data= await connection.db('booky').collection('books').findOne({title : title});
    res.render('book' , {
        book : data 
    })
} )



module.exports = router ;