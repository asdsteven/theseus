controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    control.simmessages.send("theseus", Buffer.fromUTF8(JSON.stringify({ action: "open", url: "hello" })))
})
