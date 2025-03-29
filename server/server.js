import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import petRoutes from './routes/pets.js';

import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use('/api/pets', petRoutes);


app.use(cors());
app.use(express.json());

// Example route
app.get("/", (req, res) => res.send("API Running"));

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // For parsing JSON request bodies

// Basic route for testing
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from the server!' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});