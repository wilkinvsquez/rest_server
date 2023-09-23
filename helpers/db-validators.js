const Role = require("../models/role");
const User = require("../models/user");

const isRoleValid = async (role = "") => {
	const roleExist = await Role.findOne({ role });
	if (!roleExist) {
		throw new Error(`El rol ${role} no está registrado en la BD`);
	}
};

const emailExist = async (email = "") => {
	// Verificar si el email existe
	const existeEmail = await User.findOne({ email });
	if (existeEmail) {
		throw new Error(`El email: ${email}, ya está registrado`);
	}
};

const userByIdExist = async id => {
	// Verificar si el email existe
	const userExist = await User.findById(id);
	if (!userExist) {
		throw new Error(`El id no existe ${id}`);
	}
};

module.exports = {
	isRoleValid,
	emailExist,
	userByIdExist,
};
