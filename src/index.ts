import SimpleRemoteOutlet from "./SimpleRemoteOutlet"

declare var global: any
export = function(homebridge: any) {
    var hap = homebridge.hap
    global.Service = hap.Service
    global.Characteristic = hap.Characteristic
    homebridge.registerAccessory(
        "homebridge-simple-remote-outlet",
        "SimpleRemoteOutlet",
        SimpleRemoteOutlet
    )
}
