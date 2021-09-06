const express = require("express");

const Invest = require("../model/investModel");
const Income = require("../model/incomeModel");

exports.addInvest = async (req, res) => {
  const { rent, invest, ctiytype, med } = req.body;
  if ((!rent || !invest, !ctiytype, !med)) {
    return res.status(422).json({ err: "plz filled properly" });
  }

  if (ctiytype == "metro") {
  }
  if (ctiytype == "non_metro") {
  }

  try {
    const inves = new Invest({
      rent,
      invest,
      ctiytype,
      med,
    });

    const isAddInvest = await inves.save();
    if (isAddInvest) {
      res.status(201).json({ message: "addd invest successfuly" });
    } else {
      res.status(500).json({ error: "Faild to add invest" });
    }
  } catch (err) {
    console.log(err);
  }
};
