const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const assignmentModel = require("./assignment");

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: { type: String, required: false },
    role: {
      type: String,
      required: true,
      enum: ["student", "instructor", "admin"],
    },
    assignments: [
      { type: Schema.Types.ObjectId, required: false, ref: assignmentModel },
    ],
  },
  {
    timestamps: true,
  }
);
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const userModel = new model("user", userSchema);

module.exports = userModel;