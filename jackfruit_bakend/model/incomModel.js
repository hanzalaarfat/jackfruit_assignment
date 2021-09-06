const mongoose = require("mongoose");

const incomeSchema = new mongoose.Schema(
  {
    basic: {
      type: Number,
      required: true,
    },
    lta: {
      type: Number,
      required: true,
    },

    hra: {
      type: Number,
      required: true,
    },
    fa: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Income", incomeSchema);
