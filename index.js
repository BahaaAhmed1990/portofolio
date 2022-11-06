import express from "express";
// const express = require("express");

const app = express();
app.get("/", (req, res) => {
  res.send("test app on browser");
});

app.listen(3222, () => console.log("server is running on 3222"));
