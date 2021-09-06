const mongoose = require("mongoose");

const investSchema = new mongoose.Schema(
  {
    invest: {
      type: Number,
      required: true,
    },
    rent: {
      type: Number,
      required: true,
    },

    citytype: {
      type: String,
      required: true,
    },
    med: {
      //Mediclaim policy premium paid by user
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Invest", investSchema);
