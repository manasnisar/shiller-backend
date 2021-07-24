const httpStatus = require('http-status');
const { Evidence, User } = require('../models');
const ApiError = require('../utils/ApiError');
const path = require('path');
const fs = require('fs');

const uploadEvidence = async (req) => {
    var appDir = path.dirname(require.main.filename);
    console.log(appDir)
    const myFile = req.file;
    if (!myFile) throw ApiError(httpStatus.BAD_REQUEST, 'Upload file not found');

    const evidenceBody = {
        userId: req.params.userId,
        file: {
            data: fs.readFileSync(path.join(appDir + '/uploads/' + req.file.filename)),
            contentType: 'image/png',
        }
    }
    fs.unlink(path.join(appDir + '/uploads/' + req.file.filename), (err) => {
        if (err) {
            console.log("couldn't delete file")
            return
        }
    })

    return Evidence.create(evidenceBody);
};

const getPendingEvidences = async (req) => {
    const userId = req.params.userId

    const evidences = await Evidence.find({
        userId: userId,
        status: "pending"
    })
    return evidences
};

const getAllPendingEvidences = async () => {
    const evidences = await Evidence.find({
        status: "pending"
    })
    return evidences
};

const getApprovedEvidences = async (req) => {
    const userId = req.params.userId

    const evidences = await Evidence.find({
        userId: userId,
        status: "approved"
    })
    return evidences
};

const countEvidences = async () => {

    const pending = await Evidence.countDocuments({
        status: "pending"
    })
    const approved = await Evidence.countDocuments({
        status: 'approved'
    })
    return {
        pending: pending,
        approved: approved
    }
};

const countApprovedEvidences = async (req) => {
    const approved = await Evidence.countDocuments({
        userId: req.params.userId,
        status: 'approved'
    })
    return {
        approved: approved
    }
};

const countDeclinedEvidences = async (req) => {
    const declined = await Evidence.countDocuments({
        userId: req.params.userId,
        status: 'declined'
    })
    return {
        declined: declined,
    }
};

const approveEvidence = async (req) => {
    const evidenceId = req.params.id
    const evidence = await Evidence.findByIdAndUpdate({ _id: evidenceId }, { $set: { status: "approved" } }, { new: true });
    const user = await User.findByIdAndUpdate({ _id: evidence.userId }, { $inc: { shillingPoints: 1 } });
    return evidence
};


const declineEvidence = async (req) => {
    const evidenceId = req.params.id
    const evidence = await Evidence.updateOne({ _id: evidenceId }, { $set: { status: "declined" } });
    return evidence
};

const approveBulkEvidence = async (req) => {
    const ids = req.body.ids
    let evidence;
    try {
        for (let x = 0; x < ids.length; x++) {
            evidence = await Evidence.findByIdAndUpdate({ _id: ids[x] }, { $set: { status: "approved" } }, { new: true });
            await User.findByIdAndUpdate({ _id: evidence.userId }, { $inc: { shillingPoints: 1 } });
        }
        return evidence
    } catch (error) {
        console.log(error)
        return {
            message: 'failure'
        }
    }

};


module.exports = {
    uploadEvidence,
    getPendingEvidences,
    getApprovedEvidences,
    countEvidences,
    getAllPendingEvidences,
    approveEvidence,
    declineEvidence,
    approveBulkEvidence,
    countDeclinedEvidences,
    countApprovedEvidences
};
