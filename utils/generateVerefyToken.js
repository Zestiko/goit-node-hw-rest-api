const uuid = require("uuid").v4;
const generateVerefyToken = () => uuid();

module.exports = generateVerefyToken;
