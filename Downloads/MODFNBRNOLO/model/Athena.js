const mongoose = require("mongoose")
const crypto = require("crypto")

const schema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    level: {
        type: Number,
        default: 999
    },
    gold: {
        type: Number,
        default: 24000
    },
    stageLobby: {
        type: String,
        default: "Season16"
    },
    stageVault: {
        type: String,
        default: "Default"
    },
    itemShopFile: {
        type: String,
        default: "shop"
    },
    banner: {
        type: String,
        default: ""
    },
    bannercolor: {
        type: String,
        default: ""
    },
    character: {
        type: String,
        default: ""
    },
    charactervariants: {
        type: Array,
        default: ""
    },
    backpack: {
        type: String,
        default: ""
    },
    backpackvariants: {
        type: Array,
        default: ""
    },
    pickaxe: {
        type: String,
        default: ""
    },
    pickaxevariants: {
        type: Array,
        default: ""
    },
    glider: {
        type: String,
        default: ""
    },
    glidervariants: {
        type: Array,
        default: ""
    },
    skydivecontrail: {
        type: String,
        default: ""
    },
    dance: {
        type: Array,
        default: [
            "",
            "",
            "",
            "",
            "",
            "",
        ]
    },
    itemwrap: {
        type: Array,
        default: [
            "",
            "",
            "",
            "",
            "",
            "",
            ""
        ]
    },
    musicpack: {
        type: String,
        default: ""
    },
    loadingscreen: {
        type: String,
        default: ""
    },
    cosmetics: {
        type: Array,
        default: []
    },
    favourites: {
        type: Array,
        default: []
    }
})

module.exports = mongoose.model("athena", schema)