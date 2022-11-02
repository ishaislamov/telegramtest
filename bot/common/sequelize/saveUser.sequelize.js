const dbConnections = require("../../connections/db.connections");
const  db  = require("../../connections/db.connections");
const {userModel} = require ("../../models/user.model")

exports.saveUser = async (login, username) => {
    await db.sync();

    const textAfterSaving = `User ${login}-${username} is saved`;
    const textAfterUpdate = `User ${login}-${username} has been updated`;
    

    const foundUser = await userModel.findOne({where: {login}})
    if (!foundUser) {
        await UserModel.create({login, username});
        return textAfterSaving
    }

    if (foundUser.username !== username) {
        await UserModel.update({username}, {where: {login}});
    }
    return textAfterUpdate;
}
