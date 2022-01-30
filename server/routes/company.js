const express = require("express");
const router = express.Router();
const CompanyController = require("../controllers/companyController");
const {
  authentocationCompany,
  authenticationApplicant,
} = require("../middlewares/authentication");

router.post("/register", CompanyController.registerCompay);
router.post("/login", CompanyController.loginCompany);
router.post("/job", authentocationCompany, CompanyController.addJob);

module.exports = router;
