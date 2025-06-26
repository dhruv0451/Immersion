const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');

// Create
router.post('/', vehicleController.createVehicle);

// Read all
router.get('/', vehicleController.getAllVehicles);

// Read one
router.get('/:id', vehicleController.getVehicleById);

// Update
router.put('/:id', vehicleController.updateVehicle);

// Delete
router.delete('/:id', vehicleController.deleteVehicle);

module.exports = router;
