const express = require("express");
const router = express.Router();
const Phone = require('../models/Phone');

// Retrive ALL
router.get("/", (req, res, next) => {
  Phone.find()
    .then(objects => res.json(objects))
    .catch(e => next(e));
});

// Create
router.post("/", (req, res, next) => {
  const { brand, name, image, specs } = req.body;

  const newPhone = { brand, name, image, specs };

  Phone.create(newPhone)
    .then(object => res.json(object))
    .catch(e => next(e));
});

// Retrive DETAIL
router.get("/:id", (req, res, next) => {
  Phone.findById(req.params.id)
    .then(object => res.json(object))
    .catch(e => next(e));
});

router.put("/:id", (req, res, next) => {
  const { brand, name, image, specs } = req.body;

  const updates = { brand, name, image, specs };

  Phone.findByIdAndUpdate(req.params.id, updates, { new: true })
    .then(object => res.json(object))
    .catch(e => next(e));
});

// Retrive DETAIL
router.delete("/:id", (req, res, next) => {
  Phone.findByIdAndRemove(req.params.id)
    .then(() => res.json({ message: `SUCESSFUL DELETE ${req.params.id}` }))
    .catch(e => next(e));
});

module.exports = router;