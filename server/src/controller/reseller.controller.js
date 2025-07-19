const { User } = require('../model/index');


const getAllResellers = async (req, res) => {
  const resellers = await User.findAll({ where: { role: 'reseller' } });
  res.json(resellers);
};

const getResellerById = async (req, res) => {
  const user = req.user;

  if (user.role === 'reseller' && user.id !== parseInt(req.params.id)) {
    return res.status(403).json({ message: 'Access denied' });
  }

  const reseller = await User.findByPk(req.params.id);
  if (!reseller) return res.status(404).json({ message: 'Reseller not found' });

  res.json(reseller);
};

const updateReseller = async (req, res) => {
  const { email, name } = req.body;

  const reseller = await User.findByPk(req.params.id);
  if (!reseller) return res.status(404).json({ message: 'Reseller not found' });

  reseller.email = email ?? reseller.email;
  reseller.name = name ?? reseller.name;

  await reseller.save();
  res.json({ message: 'Reseller updated', reseller });
};

const deleteReseller = async (req, res) => {
  const reseller = await User.findByPk(req.params.id);
  if (!reseller) return res.status(404).json({ message: 'Reseller not found' });

  await reseller.destroy();
  res.json({ message: 'Reseller deleted' });
};

module.exports = {
  getAllResellers,
  getResellerById,
  updateReseller,
  deleteReseller,
};
