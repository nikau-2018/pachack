const express = require('express')

const router = express.Router()
const {getFoods} = require('../db/foods')

router.get('/foods', displayFoods)

function displayFoods (req, res) {
  getFoods()
    .then((foods) => res.status(201).json({
      ok: true,
      produce: foods.filter(food => food.categoryName === 'produce'),
      protein: foods.filter(food => food.categoryName === 'protein'),
      dairy: foods.filter(food => food.categoryName === 'dairy'),
      grains: foods.filter(food => food.categoryName === 'grains'),
      other: foods.filter(food => food.categoryName === 'other')
    })
    )
    .catch((error) => {
      if (error.message.includes('UNIQUE constraint failed: users.username')) {
        return res.status(400).json({
          ok: false,
          message: 'No food exists.'
        })
      }
    }
    )
}

module.exports = router
