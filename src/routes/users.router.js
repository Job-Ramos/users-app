const { getAll, create, getOne, remove, update} = require('../controllers/user.controllers');
const express = require('express');

const usersRouter = express.Router(); //  /users

usersRouter.route("/")
		.get(getAll)
        .post(create)
        
usersRouter.route('/:id')  // /users/:id
    .get(getOne)
    .delete(remove)
    .put(update);
        

module.exports = usersRouter;