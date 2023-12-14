const mqtt = require("mqtt")

function mqttConnectServer(MQTT_SERVER,MQTT_PORT,MQTT_USER,MQTT_PASSWORD){
    const client = mqtt.connect({
        host: MQTT_SERVER,
        port: MQTT_PORT,
        username: MQTT_USER,
        password: MQTT_PASSWORD
    })

    return client

}
module.exports = mqttConnectServer;