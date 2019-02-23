const User = require('./user.model');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const settings = require('../setting');
const jwt = require('jsonwebtoken');


module.exports.allUsers =  async (req, res) => {
    const userSecond = await User.find({});
   return res.status(200).json(userSecond)
};
module.exports.register = (req, res) => {
    bcrypt.hash(req.body.password, settings.ROUND,  function (err, hash) {
         User.create({
            _id: mongoose.Types.ObjectId(),
            name: req.body.name,
            email: req.body.email,
            password: hash
        })
        .then(info => {
            res.status(200).json(info)
        })
        .catch(error => {
            res.status(402).json({ error: err })
        })


       // return res.status(200).json(user6)

    });
}
module.exports.login = async (req, res) => {
    const newUser = await User.findOne({ email: req.body.email });
    console.log(newUser);
    if (newUser) {
        const result = await bcrypt.compare(req.body.password, newUser.password);
        if (result == false) {
            res.status(401).json({
                message: "login is not good!!!"
            })
        }
    } else {
        res.status(401).json({ message: "user is not found" })
    }
}





