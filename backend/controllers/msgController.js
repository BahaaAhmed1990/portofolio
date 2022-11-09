const sendMsg = (req, res) => {
  console.log("msg sent");
  res.status(201);
  res.send("test route");
};

export { sendMsg };
