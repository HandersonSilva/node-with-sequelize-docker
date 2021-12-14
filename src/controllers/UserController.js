const User = require('../models/user');

module.exports = {

   async index(req, res) {
      const users = await User.findAll();
      return res.json(users);
   },

    async store(req, res) {

        console.log(req.body);

        const {name, email, password } = req.body;

        const user = await User.create({name, email, password});

        return res.json(user);
    }
}