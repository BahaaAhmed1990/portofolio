import mongoose from "mongoose";
const { Schema } = mongoose;

const msgSchema = new Schema(
  {
    name: {
      type: String,
      require: [true, "Please add a name"],
    },
    email: {
      type: String,
      require: [true, "Please add an email"],
      unique: false,
    },
    subject: {
      type: String,
      require: [false, "Please add a subject"],
      default: "Not Added",
    },
    msgText: {
      type: String,
      require: [true, "please add your message"],
    },
  },
  { collection: "messages" }
);

const msgModel = mongoose.model("Msg", msgSchema);

export default msgModel;
