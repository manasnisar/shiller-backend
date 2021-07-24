const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { evidenceService } = require('../services');

const uploadEvidence = catchAsync(async (req, res) => {
    const evidence = await evidenceService.uploadEvidence(req);
    res.status(httpStatus.CREATED).send(evidence);
});

const getPendingEvidences = catchAsync(async (req, res) => {
    const evidences = await evidenceService.getPendingEvidences(req);
    res.status(httpStatus.CREATED).send(evidences);
});

const getAllPendingEvidences = catchAsync(async (req, res) => {
    const evidences = await evidenceService.getAllPendingEvidences(req);
    res.status(httpStatus.CREATED).send(evidences);
});

const countDeclinedEvidences = catchAsync(async (req, res) => {
    const evidences = await evidenceService.countDeclinedEvidences(req);
    res.status(httpStatus.CREATED).send(evidences);
});

const countApprovedEvidences = catchAsync(async (req, res) => {
    const evidences = await evidenceService.countApprovedEvidences(req);
    res.status(httpStatus.CREATED).send(evidences);
});

const getApprovedEvidences = catchAsync(async (req, res) => {
    const evidences = await evidenceService.getApprovedEvidences(req);
    res.status(httpStatus.CREATED).send(evidences);
});

const countEvidences = catchAsync(async (req, res) => {
    const evidences = await evidenceService.countEvidences();
    res.status(httpStatus.CREATED).send(evidences);
});

const approveEvidence = catchAsync(async (req, res) => {
    const evidence = await evidenceService.approveEvidence(req);
    res.status(httpStatus.CREATED).send(evidence);
});

const declineEvidence = catchAsync(async (req, res) => {
    const evidence = await evidenceService.declineEvidence(req);
    res.status(httpStatus.CREATED).send(evidence);
});

const approveBulkEvidence = catchAsync(async (req, res) => {
    const evidence = await evidenceService.approveBulkEvidence(req);
    res.status(httpStatus.CREATED).send(evidence);
});



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
    countApprovedEvidences,
};
