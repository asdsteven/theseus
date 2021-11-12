controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    control.simmessages.send("web", Buffer.fromUTF8(JSON.stringify({ action: "open", url: "hello" })))
})
