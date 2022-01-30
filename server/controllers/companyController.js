const { comparePassword } = require("../helpers/bcrypt");
const { createToken } = require("../helpers/jwt");
const { Company } = require("../models");

class CompanyController {
  static async registerCompay(req, res, next) {
    try {
      const { companyName, emailCompany, password, about, businessCategoryId } =
        req.body;
      const payload = {
        companyName,
        emailCompany,
        password,
        about,
        businessCategoryId: +businessCategoryId,
      };
      const newCompany = await Company.create(payload);
      res.status(201).json({
        id: newCompany.id,
        email: newCompany.emailCompany,
        companyName: newCompany.companyName,
      });
    } catch (err) {
      next(err);
    }
  }
  static async loginCompany(req, res, next) {
    try {
      const { email, password } = req.body;
      const foundCompany = await Company.findOne({
        where: {
          emailCompany: email,
        },
      });
      if (!foundCompany || !comparePassword(password, foundCompany.password)) {
        throw { name: "COMPANY_NOT_FOUND" };
      }
      const payload = {
        id: foundCompany.id,
        name: foundCompany.companyName,
        email: foundCompany.emailCompany,
      };
      const token = createToken(payload);

      res.status(200).json({ access_token: token });
    } catch (err) {
      next(err);
    }
  }
}
module.exports = CompanyController;