const { Schema, model } = require("mongoose");

const UserProfileSchema = new Schema(
  {
    userId: String,
    userName: String,
    userNameInsensitive: String,
    accountPassword: String,
    characterName: String,
    introComplete: {
      type: Boolean,
      default: false
    },
    privateProfile: {
      type: Boolean,
      default: false
    },
    DunkelCoins: {
      type: Number,
      default: 250
    },
    accountAge: {
      type: Date,
      default: Date.now()
    },
    dailyCooldown: {
      type: Date,
      default: new Date(Date.now() - 86400000)
    },
    wheelCooldown: {
      type: Date,
      default: new Date(Date.now() - 86400000)
    },
    dailyStreak: {
      type: Number,
      default: 1
    },
    lastTransfer: {
      type: Date,
      default: new Date(Date.now() - 3 * 7 * 24 * 60 * 60 * 1000)
    },
    lastUsernameChange: {
      type: Date,
      default: new Date(Date.now() - 4 * 7 * 24 * 60 * 60 * 1000)
    },
    wallet: {
      type: Number,
      default: 500
    },
    bank: {
      type: Number,
      default: 0
    },
    netWorth: {
      type: Number,
      default: 500
    },
    totalEarned: {
      type: Number,
      default: 500
    },
    rank: {
      type: Number,
      default: 1
    },
    RP: {
      type: Number,
      default: 0
    },
    totalRPEarned: {
      type: Number,
      default: 0
    },
    badges: {
      type: Array,
      default: []
    },
    achievements: {
      type: Array,
      default: []
    },
    casinoWins: {
      type: Number,
      default: 0
    },
    casinoLosses: {
      type: Number,
      default: 0
    },
    casinoBet: {
      type: Number,
      default: 0
    },
    casinoCashWin: {
      type: Number,
      default: 0
    }
  },
  {
    collection: "DunkelLuz User Profile"
  }
);

module.exports = model("DunkelLuz User Profile", UserProfileSchema);
