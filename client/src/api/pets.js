import express from 'express';
import Pet from '../models/Pet.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const pets = await Pet.find();
  res.json(pets);
});

router.post('/', async (req, res) => {
  const pet = new Pet(req.body);
  await pet.save();
  res.status(201).json(pet);
});

export default router;
