const adminOnly = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied: Admins only' });
  }
  next();
};

const resellerOnly = (req, res, next) => {
  if (req.user.role !== 'reseller') {
    return res.status(403).json({ message: 'Access denied: Resellers only' });
  }
  next();
};

module.exports = { adminOnly, resellerOnly };