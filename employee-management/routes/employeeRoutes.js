const express = require('express');
const {
    getAllEmployees,
    createEmployee,
    getEmployeeById,
    updateEmployee,
    deleteEmployee
} = require('../controllers/employeeController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/employees', authMiddleware, getAllEmployees);
router.post('/employees', authMiddleware, createEmployee);
router.get('/employees/:eid', authMiddleware, getEmployeeById);
router.put('/employees/:eid', authMiddleware, updateEmployee);
router.delete('/employees', authMiddleware, deleteEmployee);

module.exports = router;
