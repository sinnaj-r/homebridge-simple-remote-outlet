"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
var SimpleRemoteOutlet_1 = __importDefault(require("./SimpleRemoteOutlet"));
module.exports = function (homebridge) {
    var hap = homebridge.hap;
    global.Service = hap.Service;
    global.Characteristic = hap.Characteristic;
    homebridge.registerAccessory("homebridge-simple-remote-outlet", "SimpleRemoteOutlet", SimpleRemoteOutlet_1.default);
};
//# sourceMappingURL=index.js.map