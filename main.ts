(() => {
    game.splash("hello");
    const channel = "theseus";
    controller.A.onEvent(ControllerButtonEvent.Pressed, () => {
        control.simmessages.send(channel, Buffer.fromUTF8(JSON.stringify({msg:"button A"})));
    });
    control.simmessages.onReceived(channel, (msg) => {
        control.simmessages.send(channel, Buffer.fromUTF8(JSON.stringify({msg:`received msg: ${msg.toString()}`})));
    });
})();