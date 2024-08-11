const express = require(`express`);
const router = express.Router();
const staffController = require(`../controllers/staffController`);

router.post(`/add-member`, staffController.addStaffMember);
router.put(`/update-member/:id`, staffController.updateStaffMember);
router.delete(`/delete-member/:id`, staffController.deleteStaffMember);

router.get(`/view-member/:id`, staffController.viewStaffMember);
router.get(`/all-members`, staffController.allStaffMembers);

module.exports = router;