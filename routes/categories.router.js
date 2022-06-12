const express = require('express');
const CategoriesService = require('./../services/category.service');

const router = express.Router();

const service = new CategoriesService();

router.get('/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId
  })
});

router.get('/', (req,res) => {
  const categories = service.find();
  res.json(categories);
});


router.get('/:id', (req, res) => {
  const {id} = req.params;
  const category = service.findeOne(id);
  res.json(category);
});

module.exports = router;
