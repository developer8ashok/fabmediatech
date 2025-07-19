const router = require('express').Router();
const {
  getAllResellers,
  getResellerById,
  updateReseller,
  deleteReseller,
} = require('../controller/reseller.controller');

const { protect } = require('../middleware/authMiddleware');
const { adminOnly } = require('../middleware/roleMiddleware');

router.use(protect);

router.get('/', adminOnly, getAllResellers);         
router.get('/:id', getResellerById);                  
router.put('/:id', updateReseller);                   
router.delete('/:id', adminOnly, deleteReseller);    

module.exports = router;
