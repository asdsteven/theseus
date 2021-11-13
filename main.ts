controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    control.simmessages.send(channel, Buffer.fromUTF8("button A"))
})
let channel = "theseus"
control.simmessages.onReceived(channel, (msg) => {
    control.simmessages.send(channel, Buffer.fromUTF8(`received msg: ${msg.toString()}`))
})
