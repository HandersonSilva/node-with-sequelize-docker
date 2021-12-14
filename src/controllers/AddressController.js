const Address = require("../models/address");
const User = require("../models/user");

module.exports = {
  async index(req, res) {
    const { user_id } = req.params;

    const user = await User.findByPk(user_id, {
      include: { association: "addresses" },
    });

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    return res.json(user);
  },

  async store(req, res) {
    const { user_id } = req.params;

    const { street, number, complement, zip_code, city } = req.body;

    /**valid user  */
    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    const address = await Address.create({
      street,
      number,
      complement,
      zip_code,
      city,
      user_id,
    });

    return res.json(address);
  },
};
