import Msg from "../models/msgModel.js";
import asyncWrapper from "../middlewares/asyncWrapper.js";

// @desc add new message
// @route POST /api/send-msg
// @access public
const sendMsg = asyncWrapper(async (req, res) => {
  const { name, email, subject, msgText } = req.body;
  // console.log(name, email, subject, msgText);
  if (!name || !email || !msgText) {
    res.status(500);
    throw new Error("please add all fields");
  }
  const msg = await Msg.create({ name, email, subject, msgText });
  res.json(msg);
  res.status(201);
});

export { sendMsg };
