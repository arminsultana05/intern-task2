
const router = require('express').Router();
const {
    addProduct,
    updateProduct,
    getDeleteProduct,
    getAllProducts,
    getSingleProduct,
  } = require('../controllers/product');
  const { isAuth } = require('../middlewares/authenticated');
  
  // add
  router.post('/add', addProduct);

   
  router.patch('/:id',  updateProduct);
  
  // delete
  router.delete('/:id',   getDeleteProduct);
  
//   // all
  router.get('/', getAllProducts);
  
//   single / detailed
  router.get('/:id', getSingleProduct);
  

module.exports = router;