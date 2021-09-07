const express = require("express");

const Invest = require("../model/investModel");
const User = require("../model/userModel");
// const Income = require("../model/incomeModel");

exports.addInvest = async (req, res) => {
  const { rent, invest, citytype, med, userId } = req.body;

  if ((!rent || !invest, !citytype, !med)) {
    return res.status(422).json({ err: "plz filled properly" });
  }

  try {
    const inves = new Invest({
      rent,
      invest,
      citytype,
      med,
      userId,
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

exports.ApplicableHRA = async (req, res) => {
  const { userId } = req.params;
  console.log(userId);
  let bas, rent, hra, apphra;

  User.findOne({ _id: userId }).exec((err, user) => {
    if (err) {
      return res.status(400).json({ err });
    }

    // console.log(user);

    Invest.findOne({ userId: userId }).exec(async (err, invest) => {
      if (err) {
        return res.status(400).json({ err });
      }

      // console.log("invessssst", invest);
      console.log(invest.citytype);

      if (invest) {
        if (invest.citytype == "metro") {
          bas = Math.round((user.basic * 50) / 100);
          rent = Math.round(invest.rent - (invest.rent * 10) / 100);
          hra = user.hra;
          apphra = Math.min(bas, hra, rent);
        }

        if (invest.citytype == "non_metro") {
          bas = Math.round((user.basic * 40) / 100);
          rent = Math.round((invest.rent * 10) / 100);
          rent = invest.rent - rent;
          hra = user.hra;
          apphra = Math.min(bas, hra, rent);
          console.log(bas, rent, hra, apphra);
        }
        if (apphra) {
          //////////////////////////////////////////update Apphra and Taxable_Income in user model //////////////////////////
          const Taxable_Income =
            user.basic +
            user.lta +
            user.hra +
            user.fa -
            apphra -
            invest.invest -
            invest.med;
          // console.log("Taxable_Income...........", Taxable_Income);
          const applicablehra = await User.findOneAndUpdate(
            { _id: userId },
            {
              $set: {
                apphra: apphra,
                Taxable_Income,
              },
            },
            { new: true }
          )
            .exec()
            .then((result) => {
              console.log(result);
              res.status(200).json({ message: result });
            })
            .catch((e) => {
              console.log(e);
              res.status(400).json({ error: e });
            });
        }
      } else {
        return res.status(400).json({ message: "add Invest properly" });
      }
    });
  });
};
