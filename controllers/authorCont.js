const author=require('../models/author');
const async = require('async');
const Book = require('../models/book');

exports.authorlist= (req,res,next)=>{
    author.find()
        .sort([['familyname','ascending']])
        .exec((err,list_authors)=>{
            if(err)return next(err);
            res.render('author_list',{title:'Author List',author_list:list_authors});
        })
}
exports.author_detail=(req,res,next)=>{
    async.parallel({
        author:function(callbk){
            author.findById(req.params.id).exec(callbk);
        },
        author_books:function(callbk){
        Book.find({'author':req.params.id},'title summary').exec(callbk);
        },
    },(err,results)=>{
        if (err)return next(err);
        if (!results.author){
            const err =new Error ('Author Not Found');
            err.status = 404;
            return next(err);
        }
        res.render('author_detail',{title:'Author Detail',author:results.author, author_books:results.author_books});
    });
};
exports.authorCreateGet=(req,res){
    res.render('author_form',{title:"Create Author"});
}

exports.authorCreatePost=[
    body('first_name').trim().isLength({min:1}).escape().withMessage('').isAlphanumeric().withMessage('First name has non-alphanumric charactes'),
    body('family_name').trim().isLength({min:1}).escape().withMessage('').isAlphanumeric().withMessage('Family name has non-alphanumric charactes'),

    body('date_of_birth','Invalid date of Birth'),optional({checkFalsy:true}).isISO8601().toDate(),
    body('date_of_death','Invalid date of Death'),optional({checkFalsy:true}).isISO8601().toDate(),

    (req,res,next)=>{
        const errors =validationResult(req);
        if (!errors.isEmpty()){
            return res,render("author_form",{title:'Create Author', author:req.body, errors:errors.array()});
        }
        const author=new author({
            first_name:req.body.first_name,
            family_name:req.body.family_name,
            dob:req.body.dob,
            dod:req.body.dod,
        });
        author.save((err)=>{
            if(err) return next(err);
            res.redirect(auhtor.url);
        });
    }

];
exports.authorDeleteGet=(req,res,next)=>{
    async.parallel({
        author:function(callbk){author.findById(req.params.id).exec(callbk)},
        author_books:function(callbk){Book.find({'author':req.params.id}).exec(callbk)}
    },(err,results)=>{
        if (err) return next (err);
        if (!results.author) res.redirect('/catalog/authors');
        res.render("author_delete",{title:'Delete Author', author: results.author, author_books:results.authors_books});
    }
    );
};

exports.authorDeletePost= (req,res,next)=>{
    async.parallel({
        auhtor:function(callbk){author.findById(req.params.id).exec(callbk)},
        auhtor_books:function (callbk){Book.find({'author':req.body.authorid}).exec(callbk)}
    },(err,results)=>{
        if(err) return next(err);
        if (results.authors_books.length>0){
            return res.render('author_delete',{title:"delete Author", author:results.author, author_books:results.auhtors.books});
        }
        author.findByIdAndRemove(req.body.authorid,function deleteAuthor(err){
            res.redirect('/catalog/authors');
        });
    }
    );
};

exports.authorUpdateGet=(req,res,next)=>{
    async.parallel({
        author:function(callbk){author.findById(req.params.id).exec(callbk)}
        },(err,results)=>{
            if (err) return next(err);
            res.render('author_form',{title:'Update Author',author:results.author});
    });
};

exports.authorUpdatePost=[
    body('first_name').trim().isLength({min:1}).escape().withMessage('').isAlphanumeric().withMessage('First name has non-alphanumric charactes'),
    body('family_name').trim().isLength({min:1}).escape().withMessage('').isAlphanumeric().withMessage('Family name has non-alphanumric charactes'),

    body('date_of_birth','Invalid date of Birth'),optional({checkFalsy:true}).isISO8601().toDate(),
    body('date_of_death','Invalid date of Death'),optional({checkFalsy:true}).isISO8601().toDate(),

    (req,res,next)=>{
        const errors =validationResult(req);
        
        const author=new author({
            first_name:req.body.first_name,
            family_name:req.body.family_name,
            dob:req.body.dob,
            dod:req.body.dod,
            _id:req.params.id
        });
        if (!errors.isEmpty()){
            return res,render("author_form",{title:'Update Author', author:req.body, errors:errors.array()});
        }
        author.findByIdAndUpdate(req.params.id,author,{},(err,theAuthor)=>{
            if(err) return next(err);
            return res.redirect(theAuhtor.url);
        });
    }

];