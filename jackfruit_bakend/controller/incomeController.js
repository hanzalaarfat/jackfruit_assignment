// const express = require("express");
// const Income = require("../model/incomModel");

// exports.addIncome = async (req, res) => {
//   const { basic, lta, fa, hra } = req.body;
//   if ((!basic || !lta, !fa, !hra)) {
//     return res.status(422).json({ err: "plz filled properly" });
//   }

//   try {
//     const income = new Income({
//       basic,
//       lta,
//       fa,
//       hra,
//     });
//     const isAddIncome = await income.save();
//     if (isAddIncome) {
//       res.status(201).json({ message: "addd income successfuly" });
//     } else {
//       res.status(500).json({ error: "Faild to add income" });
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };
