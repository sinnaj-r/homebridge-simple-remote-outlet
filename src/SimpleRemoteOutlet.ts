import request = require("request-promise-native")
declare var Service: any
declare var Characteristic: any

export default class SimpleRemoteOutlet {
    switchService: any;
    private type: string;
    private log: any
    private http_method: any
    private default_state_off: any
    private name: any
    constructor(log: any, config: any) {
        this.log = log

        // General
        this.name = config["name"]
        this.type = config["type"] || "Switch"
    }
    getServices() {
        let informationService = new Service.AccessoryInformation()

        informationService
            .setCharacteristic(Characteristic.Manufacturer, "Dock51 UG")
            .setCharacteristic(Characteristic.Model, "Dock51 Remote Outlet")
            .setCharacteristic(Characteristic.SerialNumber, "de.dock51.mk1")

        this.switchService = new Service[this.type]()
        this.switchService
            .getCharacteristic(Characteristic.On)
            .on("get", this.getPowerState.bind(this))
            .on("set", this.setPowerState.bind(this))

        return [this.switchService]
    }
    setPowerState(powerOn: boolean, callback: (error?: Error) => void) {

    }
    getPowerState(callback: (error: Error | null, state?: boolean) => void) {
       
    }
    identify(callback: (error?: Error) => void) {
        this.log("Identify requested!")
        callback() // success
    }
}
