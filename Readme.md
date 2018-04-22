# homebridge-simple-remote-outlet
This Project tries to deliver a simple, but fail-safe 403Mhz-Remote-Outlet Plugin for HomeBridge on a Raspberry Pi.
It needs a (inexpensive) 403Mhz-Transmitter connected to a pin of the Rasperry Pi.

## Installation
Just install the NPM Plugin Globally
```
npm install -g homebridge-simple-remote-outlet
```

## Usage
Just configure the config.json as usual, the following paramteres are supported:
```
    {
      "accessory" : "SimpleRemoteOutlet",
      "unitcode" : 1,                       // The Unitcode of the Remote Outlet
      "name" : "Desk Light",                // The Name which should be displayed in HomeKit
      "pin" : 0,                            // The GPIO Pin where the 403Mhz-Transmitter is connected to the Pi
      "systemcode" : "10000",               // The Systemcode of the Remote Outlets
      "onState" : false                     // Should it be assumed that the device is on at homebridge startup?
      "type": "Lightbulb"                   // The HomeKit-Type; To display it as a light(bulb) choose "Lightbulb", a
                                            // general "Switch" is also supported.
    }
```

## ToDo
- improve TypeScript Typings
- improve code readability
- migrate to a platform instead of a single accessory
- support 'Outlet' HomeKit-Accessory