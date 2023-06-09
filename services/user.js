const { AppError } = require("../utils");
const User = require("../models/userModel/userModel");

const register = async (userData, verificationToken) => {
  try {
    const user = await User.create({ ...userData, verificationToken });

    return user;
  } catch (error) {
    console.log(error);
    throw new AppError(409, "Email in use");
  }
};

const login = async (email) => {
  try {
    const user = await User.findOne({ email }).select("+password");

    return user;
  } catch (error) {
    throw new AppError(409, "Email in use");
  }
};

const saveTokenToUser = async (id, token) => {
  try {
    const update = {
      token,
    };

    console.log(id);
    const saveToken = await User.findByIdAndUpdate(id, update);
    console.log(saveToken);
    return saveToken;
  } catch (error) {
    throw new AppError(500, error);
  }
};

const getUserById = async (id) => {
  try {
    const user = await User.findById(id);
    return user;
  } catch (error) {
    throw new AppError(500, error);
  }
};

const unsetUserToken = async (id) => {
  const update = {
    token: " ",
  };
  try {
    const saveToken = await User.findByIdAndUpdate(id, update);
    return saveToken;
  } catch (error) {
    throw new AppError(500, error);
  }
};
const updateSubscription = async (id, subscription) => {
  try {
    await User.findByIdAndUpdate(id, subscription);
  } catch (error) {
    throw new AppError(500, error);
  }
};

const verifyUser = async ( verificationToken ) => {
  console.log(verificationToken);

  try {
    const user = await User.findOne({ verificationToken });
    return user;
  } catch (error) {
    throw new AppError(500, error);
  }
};

const updateUser = async (id, params) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(id, { ...params });

    return updatedUser;
  } catch (error) {
    throw new AppError(500, error);
  }
};

const findUserByEmail = async (email) => {
 

  try {
    const user = await User.findOne({ email });
    return user;
  } catch (error) {
    throw new AppError(500, error);
  }
};

module.exports = {
  register,
  login,
  saveTokenToUser,
  getUserById,
  unsetUserToken,
  updateSubscription,
  verifyUser,
  updateUser,
  findUserByEmail,
};
