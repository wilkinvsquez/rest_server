const { Router } = require("express");
const { check } = require("express-validator");

const { fieldValidation } = require("../middlewares/fieldValidation");
const {
	isRoleValid,
	emailExist,
	userByIdExist,
} = require("../helpers/db-validators");

const {
	getUsers,
	putUsers,
	postUsers,
	deleteUsers,
	patchUsers,
} = require("../controllers/users.controller");

const router = Router();

router.get("/", getUsers);

router.put(
	"/:id",
	[
		check("id", "No es un ID válido").isMongoId(),
		check("id").custom(userByIdExist),
		check("role").custom(isRoleValid),
		fieldValidation,
	],
	putUsers,
);

router.post(
	"/",
	[
		check("name", "El nombre es obligatorio").not().isEmpty(),
		check("password", "El password debe de ser más de 6 letras").isLength({
			min: 6,
		}),
		check("email", "El email no es válido").isEmail(),
		check("email").custom(emailExist),
		// check('rol', 'No es un rol válido').isIn(['ADMIN_ROLE','USER_ROLE']),
		check("role").custom(isRoleValid),
		fieldValidation,
	],
	postUsers,
);

router.delete(
	"/:id",
	[
		check("id", "No es un ID válido").isMongoId(),
		check("id").custom(userByIdExist),
		fieldValidation,
	],
	deleteUsers,
);

router.patch("/", patchUsers);

module.exports = router;
