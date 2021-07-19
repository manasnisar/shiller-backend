const express = require('express');
const auth = require('../../middlewares/auth');
const adminController = require('../../controllers/admin.controller');

const router = express.Router();

router.get('/upload', auth('getAllowUploads'), adminController.getAllowUploads);
router.get('/leaderboard', auth('getAllowLeaderboard'), adminController.getAllowLeaderboard);
router.get('/activeShiller', auth('getActiveShiller'), adminController.getActiveShiller);
router.get('/getLeaderboard', auth('getLeaderboard'), adminController.getLeaderboard);
router.post('/allowUpload', auth('setAllowUploads'), adminController.setAllowUploads);
router.post('/allowLeaderboard', auth('setAllowLeaderboard'), adminController.setAllowLeaderboard);

module.exports = router;
