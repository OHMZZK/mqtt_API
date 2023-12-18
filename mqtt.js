const mqtt = require('mqtt')
const fs = require('fs')
const mqttconnect = require("./mqttconnect")

const MQTT_SERVER = "10.36.16.96"
const MQTT_PORT = "1883"
const MQTT_USER = "sgtech"
const MQTT_PASSWORD = "sgtech@2019"

const client = mqttconnect(MQTT_SERVER, MQTT_PORT, MQTT_USER, MQTT_PASSWORD)

var resultObject = {};

const topicMain = "/energy/house_power"
const topicSup = "/energy/house_power_NA"
const topic1 = "/energy/house_power/h1"
const topic2 = "/energy/house_power/h2"
const topic3 = "/energy/house_power/h3"
const topic4 = "/energy/house_power/h4"
const topic5 = "/energy/house_power/h5"
const topic6 = "/energy/house_power/h6"
const topic7 = "/energy/house_power/h7"
const topic8 = "/energy/house_power/h8"
const topic9 = "/energy/house_power/h9"
const topic10 = "/energy/house_power/h10"

// const topic = "./topicFile.js"

// const topic11 = "/energy/house_power_h11"
// const topic12 = "/energy/house_power_h12"

client.on('connect', function () {
    // Subscribe any topic
    console.log("MQTT Connect");
    client.subscribe(topicMain, function (err) {
        if (err) {
            console.log(err);
        }
    });
});
client.on('message', function (topicMain, message) {
    // message is Buffer
    const dataString = message.toString()
    const jsondata = JSON.parse(dataString)


    for (var key in jsondata) {
        if (Object.hasOwnProperty.call(jsondata, key)) {
            const element = jsondata[key]
            resultObject[element["house_no"]] = element;

            console.log(jsondata[key]);

            client.publish(topicSup, JSON.stringify(element), function (err) {
                if (err) {
                    console.log(err)
                }
                client.publish(topic1, JSON.stringify(jsondata[4]), function (err) {
                    if (err) {
                        console.log(err)
                    }
                    client.publish(topic2, JSON.stringify(jsondata[5]), function (err) {
                        if (err) {
                            console.log(err)
                        }
                        client.publish(topic3, JSON.stringify(jsondata[3]), function (err) {
                            if (err) {
                                console.log(err)
                            }
                            client.publish(topic4, JSON.stringify(jsondata[9]), function (err) {
                                if (err) {
                                    console.log(err)
                                }
                                client.publish(topic5, JSON.stringify(jsondata[8]), function (err) {
                                    if (err) {
                                        console.log(err)
                                    }
                                    client.publish(topic6, JSON.stringify(jsondata[6]), function (err) {
                                        if (err) {
                                            console.log(err)
                                        }
                                        client.publish(topic7, JSON.stringify(jsondata[2]), function (err) {
                                            if (err) {
                                                console.log(err)
                                            }
                                            // client.publish(topic8, JSON.stringify(jsondata[1]), function (err) {
                                            //     if (err) {
                                            //         console.log(err)
                                            //     }
                                            // })
                                            client.publish(topic9, JSON.stringify(jsondata[7]), function (err) {
                                                if (err) {
                                                    console.log(err)
                                                }
                                                client.publish(topic10, JSON.stringify(jsondata[0]), function (err) {
                                                    if (err) {
                                                        console.log(err)
                                                    }
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        }
    }
    var jsonContent = JSON.stringify(resultObject);

    fs.writeFile("output.json", jsonContent, "utf8", function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }
        console.log("JSON file has been saved.");
    });
});






