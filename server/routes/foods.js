const express = require('express')

const router = express.Router()
const {getFoods} = require('../db/foods')

router.get('/', displayFoods)

function displayFoods (req, res) {
  getFoods()
    .then((foods) => res.status(200).json({
      ok: true,
      produce: foods.filter(food => food.categoryName === 'produce'),
      protein: foods.filter(food => food.categoryName === 'protein'),
      dairy: foods.filter(food => food.categoryName === 'dairy'),
      grains: foods.filter(food => food.categoryName === 'grains'),
      other: foods.filter(food => food.categoryName === 'other')
    }))
    .catch(error => {
      return res.status(500).json({
        ok: false,
        error
      })
    })
}

module.exports = router
