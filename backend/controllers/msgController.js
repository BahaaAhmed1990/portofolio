import Msg from "../models/msgModel.js";
import asyncWrapper from "../middlewares/asyncWrapper.js";

const sendMsg = asyncWrapper(async (req, res) => {
  console.log("msg sent");
  const message = await Msg.create({
    name: "bahaa",
    email: "baa@gmail.com",
    subject: "question",
    msgText: "how are you ?!!",
  });
  res.status(201);
  res.send(message);
});

export { sendMsg };
