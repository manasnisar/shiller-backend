const roles = ['user', 'admin'];

const actions = {
  authchecker: 'authchecker',
  hideLeaderboard: 'hideLeaderboard',
  showLeaderboard: 'showLeaderboard',
  uploadEvidence: 'uploadEvidence',
  getPendingUploads: 'getPendingEvidences',
  getApprovedEvidences: 'getApprovedEvidences',
  countEvidences: 'countEvidences',
  manageUsers: 'manageUsers',
  createUser: 'createUser',
  getUsers: 'getUsers',
  getAllPendingEvidences: 'getAllPendingEvidences',
  approveEvidence: 'approveEvidence',
  declineEvidence: 'declineEvidence',
  getTopShiller: 'getTopShiller',
  getAllowUploads: 'getAllowUploads',
  getAllowLeaderboard: 'getAllowLeaderboard',
  setAllowUploads: 'setAllowUploads',
  setAllowLeaderboard: 'setAllowLeaderboard',
  getLeaderboard: 'getLeaderboard',
  getActiveShiller: 'getActiveShiller',
  getShillingRank: 'getShillingRank'
};

const roleRights = new Map();

roleRights.set(roles[0], [
  actions.authchecker, 
  actions.uploadEvidence, 
  actions.getPendingEvidences, 
  actions.getApprovedEvidences, 
  actions.getAllowUploads, 
  actions.getLeaderboard, 
  actions.getAllowLeaderboard,
  actions.getShillingRank
 ]);

roleRights.set(roles[1], [
  actions.authchecker, 
  actions.hideLeaderboard, 
  actions.showLeaderboard, 
  actions.countEvidences, 
  actions.manageUsers, 
  actions.createUser, 
  actions.getUsers, 
  actions.getAllPendingEvidences,
  actions.approveEvidence,
  actions.declineEvidence,
  actions.getTopShiller,
  actions.getAllowUploads,
  actions.getAllowLeaderboard,
  actions.setAllowUploads,
  actions.setAllowLeaderboard,
  actions.getLeaderboard,
  actions.getActiveShiller
]);

module.exports = {
  roles,
  roleRights,
  actions,
};
