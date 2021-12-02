const userControl = {};

const User = require('..//models/User');

userControl.getUser =  async (req, res) =>{
const users = await User.find();

res.json(users)
}

userControl.createUser = async (req, res) => {
const {username} = req.body;
const newUser = new User({username});
await newUser.save();
res.json('mesero creado')

}

userControl.deleteUser = async (req, res) => {
await User.findByIdAndDelete(req.params.id)
res.json('mesero eliminado')

}

module.exports = userControl;