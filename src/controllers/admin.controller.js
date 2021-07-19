const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { adminService } = require('../services');



const getAllowUploads = catchAsync(async (req, res) => {
    const check = await adminService.getAllowUploads(req);
    res.send(check);
});

const setAllowUploads = catchAsync(async (req, res) => {
    const check = await adminService.setAllowUploads(req);
    res.send(check);
});

const getAllowLeaderboard = catchAsync(async (req, res) => {
    const check = await adminService.getAllowLeaderboard(req);
    res.send(check);
});


const setAllowLeaderboard = catchAsync(async (req, res) => {
    const check = await adminService.setAllowLeaderboard(req);
    res.send(check);
});

const getLeaderboard = catchAsync(async (req, res) => {
    const leaderboard = await adminService.getLeaderboard();
    res.send(leaderboard);
});

const getActiveShiller = catchAsync(async (req, res) => {
    const shiller = await adminService.getActiveShiller();
    res.send(shiller);
});



module.exports = {
    getAllowUploads,
    setAllowUploads,
    getAllowLeaderboard,
    setAllowLeaderboard,
    getLeaderboard,
    getActiveShiller
};
