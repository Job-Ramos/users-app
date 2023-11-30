const catchError = require('../utils/catchError');
const User = require('../models/Users');

const getAll = catchError(async(req, res) => {
    const users = await User.findAll();
    return res.json(users);
});

const create = catchError(async(req, res) => {
    const {first_name, last_name, email, password, birthday} = req.body;
    const users = await User.create({
        first_name,
        last_name,
        email,
        password,
        birthday,
    });
    return res.status(201).json(users);
});

// /games/:id
const getOne = catchError(async(req, res)=> {
    const { id } = req.params;
    const users = await User.findByPk(id);
    return res.json(users);
});

// /users/id
const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await User.destroy({ where: {id: id}});
    return res.sendStatus (204);
});


// /Users/:id
const update = catchError(async(req, res) => {
    const { id } = req.params;
    const { first_name, last_name, email, password, birthday} = req.body;
    const Users = await User.update(
        {first_name, last_name, email, password, birthday},
        {where: {id}, returning: true}
    )
    return res.json(Users[1][0]);
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
   
}