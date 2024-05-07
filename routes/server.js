const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Book = require('../models/Book');
mongoose.connect('mongodb://127.0.0.1:27017/booky');
app.use(express.urluncoded);

router.get('/' , async(req , res)=>{
    const data = await Book.find();
    res.render('books',{
        books : data
    });
});

router.get('/books/create' , (req , res)=>{
    res.render('form');
});

router.post('/books' ,(req , res)=>{
    const book = new Book{
        title : req.body.title 
    }
});

router.get('/:title' , async(req , res)=>{
    const data = await Book.findOne({title : req.params.title});
    res.render('book' , {
        book : data
    });
});



module.exports = router ;