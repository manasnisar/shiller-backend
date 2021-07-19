const httpStatus = require('http-status');
const { Admin, User, Evidence } = require('../models');
const ApiError = require('../utils/ApiError');
const path = require('path');
const fs = require('fs');



const getAllowUploads = async (req) => {
    const allow = await Admin.find({}, {allowUploads:1, allowLeaderBoard:1})
    return allow
};

const setAllowUploads = async (req) => {
    const check = req.body.allowUploads
    const allow = await Admin.updateMany( {}, {  $set: { allowUploads: check }  } )
    return allow
};

const getAllowLeaderboard = async (req) => {
    const allow = await Admin.find({}, {allowUploads:1, allowLeaderBoard:1})
    return allow
};

const setAllowLeaderboard = async (req) => {
    const check = req.body.allowLeaderBoard
    const allow = await Admin.updateMany( {}, {  $set: { allowLeaderBoard: check }  } )
    return allow
};

const getLeaderboard = async (req) => {
    return await User.find({role: 'user'}).sort({shillingPoints:-1}).limit(5)
     
};

const getActiveShiller = async (req) => {
    const evidence = await Evidence.find({}).sort({$natural:-1}).limit(1)
    const user = await User.find({_id: evidence[0].userId})
    return user
};

module.exports = {
    getAllowUploads,
    setAllowUploads,
    getAllowLeaderboard,
    setAllowLeaderboard,
    getLeaderboard,
    getActiveShiller
};
