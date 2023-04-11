const {ImageService} = require("../../services");
const { catchAsync, date, AppError } = require("../../utils");


const patchUserAvatar = catchAsync(async (req, res, next) => {
  const { file, user } = req;
 

  if (file) {
    const avatar = await ImageService.save(file, [300, 300], "avatars", "users", user.id);
    user.avatarURL =
      `${req.protocol}://${req.hostname}:${process.env.PORT}/` + avatar;

    await user.save();

    res.status(200).json({
      Date: date(),
      data: {
        avatarURL: user.avatarURL,
      },
    });
  } else {
    next(new AppError(400, "Please upload image"))
  }
;

});

module.exports = patchUserAvatar;
