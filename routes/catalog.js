const express = require('express');
const router= exprss.router;

router.get('/',bookCont.index);

router.get('/book/create',bookCont.bookCreateGet);
router.post('/book/create',bookCont.bookCreatePost);
router.get('/book/:id/delete',bookCont.bookDeleteGet);
router.post('/book/:id/delete',bookCont.bookDeletePost);
router.get('/book/:id/update',bookCont.bookUpdateGet);
router.post('/book/:id/update',bookCont.bookUpdatePost);
router.get('/book/:id',bookCont.bookDetail);
router.get('/books',bookCont.bookList);

router.get('/author/create',authorCont.authorCreateGet);
router.post('/author/create',authorCont.authorCreatePost);
router.get('/author/:id/delete',authorCont.authorDeleteGet);
router.post('/author/:id/delete',authorCont.authorDeletePost);
router.get('/author/:id/update',authorCont.authorUpdateGet);
router.post('/author/:id/update',authorCont.authorUpdatePost);
router.get('/author/:id',authorCont.authorDetail);
router.get('/authors',authorCont.authorList);

router.get('/genre/create',genreCont.genreCreateGet);
router.post('/genre/create',genreCont.genreCreatePost);
router.get('/genre/:id/delete',genreCont.genreDeleteGet);
router.post('/genre/:id/delete',genreCont.genreDeletePost);
router.get('/genre/:id/update',genreCont.genreUpdateGet);
router.post('/genre/:id/update',genreCont.genreUpdatePost);
router.get('/genre/:id',genreCont.genreDetail);
router.get('/genres',genreCont.genreList);

router.get('/bookInst/create',bookInstCont.bookInstCreateGet);
router.post('/bookInst/create',bookInstCont.bookInstCreatePost);
router.get('/bookInst/:id/delete',bookInstCont.bookInstDeleteGet);
router.post('/bookInst/:id/delete',bookInstCont.bookInstDeletePost);
router.get('/bookInst/:id/update',bookInstCont.bookInstUpdateGet);
router.post('/bookInst/:id/update',bookInstCont.bookInstUpdatePost);
router.get('/bookInst/:id',bookInstCont.bookInstDetail);
router.get('/bookInsts',bookInstCont.bookInstList);

module.exports= router;