"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var rcswitch_1 = __importDefault(require("rcswitch"));
var SimpleRemoteOutlet = /** @class */ (function () {
    function SimpleRemoteOutlet(log, config) {
        this.log = log;
        // General
        this.name = config["name"];
        this.type = config["type"] || "Switch";
        // RC Settings
        this.pin = config["pin"] || 0;
        this.systemcode = config["systemcode"] || "10000";
        this.unitcode = config["unitcode"] || 1;
        this.onState = false;
        rcswitch_1.default.enableTransmit(this.pin);
    }
    SimpleRemoteOutlet.prototype.getServices = function () {
        var informationService = new Service.AccessoryInformation();
        informationService
            .setCharacteristic(Characteristic.Manufacturer, "Dock51 UG")
            .setCharacteristic(Characteristic.Model, "Dock51 Remote Outlet")
            .setCharacteristic(Characteristic.SerialNumber, "de.dock51.mk1");
        this.switchService = new Service[this.type]();
        this.switchService
            .getCharacteristic(Characteristic.On)
            .on("get", this.getPowerState.bind(this))
            .on("set", this.setPowerState.bind(this));
        return [this.switchService];
    };
    SimpleRemoteOutlet.prototype.setPowerState = function (powerOn, callback) {
        if (powerOn) {
            this.onState = true;
            rcswitch_1.default.switchOn(this.systemcode, this.unitcode);
        }
        else {
            this.onState = false;
            rcswitch_1.default.switchOff(this.systemcode, this.unitcode);
        }
        callback();
    };
    SimpleRemoteOutlet.prototype.getPowerState = function (callback) {
        callback(null, this.onState);
    };
    SimpleRemoteOutlet.prototype.identify = function (callback) {
        this.log("Identify requested!");
        callback(); // success
    };
    return SimpleRemoteOutlet;
}());
exports.default = SimpleRemoteOutlet;
//# sourceMappingURL=SimpleRemoteOutlet.js.map