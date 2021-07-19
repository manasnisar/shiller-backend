const express = require('express');
const auth = require('../../middlewares/auth');
const evidenceController = require('../../controllers/evidence.controller');

const router = express.Router();

router.get('/:userId/pending', auth('getPendingEvidences'), evidenceController.getPendingEvidences);
router.get('/pending', auth('getAllPendingEvidences'), evidenceController.getAllPendingEvidences);
router.get('/:id/approve', auth('approveEvidence'), evidenceController.approveEvidence);
router.get('/:id/decline', auth('declineEvidence'), evidenceController.declineEvidence);
router.get('/:userId/approved', auth('getApprovedEvidences'), evidenceController.getApprovedEvidences);
router.get('/count', auth('countEvidences'), evidenceController.countEvidences);
router.post('/:userId/upload', auth('uploadEvidence'), evidenceController.uploadEvidence);
router.post('/approve', auth('approveEvidence'), evidenceController.approveBulkEvidence);


module.exports = router;
