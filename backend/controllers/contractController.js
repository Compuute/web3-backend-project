const web3Service = require("../services/web3Service");

exports.getMessage = async (req, res) => {
  const msg = await web3Service.getMessage();
  res.json({ message: msg });
};

exports.updateMessage = async (req, res) => {
  const { newMessage } = req.body;
  const txHash = await web3Service.updateMessage(newMessage);
  res.json({ txHash });
};
