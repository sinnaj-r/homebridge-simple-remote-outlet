import rcswitch from "rcswitch"
declare var Service: any
declare var Characteristic: any

export default class SimpleRemoteOutlet {
    private onState: boolean
    private systemcode: string
    private unitcode: number
    private pin: number
    private switchService: any
    private type: string
    private log: any
    private name: any
    constructor(log: any, config: any) {
        this.log = log

        // General
        this.name = config["name"]
        this.type = config["type"] || "Switch"

        // RC Settings
        this.pin = config["pin"] || 0
        this.systemcode = config["systemcode"] || "10000"
        this.unitcode = config["unitcode"] || 1

        this.onState = config["onState"] || false
        rcswitch.enableTransmit(this.pin)
    }
    getServices() {
        let informationService = new Service.AccessoryInformation()

        informationService
            .setCharacteristic(
                Characteristic.Manufacturer,
                "SimpleRemoteOutlet Manufacturer"
            )
            .setCharacteristic(Characteristic.Model, "Simple Remote Outlet")
            .setCharacteristic(
                Characteristic.SerialNumber,
                "de.jannisrosenbaum.SimpleRemoteOutlet"
            )

        this.switchService = new Service[this.type]()
        this.switchService
            .getCharacteristic(Characteristic.On)
            .on("get", this.getPowerState.bind(this))
            .on("set", this.setPowerState.bind(this))

        return [this.switchService]
    }
    setPowerState(powerOn: boolean, callback: (error?: Error) => void) {
        if (powerOn) {
            this.onState = true
            rcswitch.switchOn(this.systemcode, this.unitcode)
        } else {
            this.onState = false
            rcswitch.switchOff(this.systemcode, this.unitcode)
        }
        callback()
    }
    getPowerState(callback: (error: Error | null, state?: boolean) => void) {
        callback(null, this.onState)
    }
    identify(callback: (error?: Error) => void) {
        this.log("Identify requested!")
        callback() // success
    }
}
