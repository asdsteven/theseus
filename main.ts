const channel = {
    s: "theseus",
    post: (o: Object) => control.simmessages.send(channel.s, Buffer.fromUTF8(JSON.stringify(o)))
}

interface StringToAny {
    [key: string]: any
}

interface Tile {
    col: number,
    row: number,
    castle: number    
}

const castles = [
    sprites.castle.tilePath1,
    sprites.castle.tilePath2,
    sprites.castle.tilePath3,
    sprites.castle.tilePath4,
    sprites.castle.tilePath5,
    sprites.castle.tilePath6,
    sprites.castle.tilePath7,
    sprites.castle.tilePath8,
    sprites.castle.tilePath9
]

const cmds: StringToAny = {
    splash: (s: string) => {
        game.splash(s)
    },
    setTiles: (tileList: Tile[]) => {
        for (const tile of tileList) {
            tiles.setTileAt(tiles.getTileLocation(tile.col, tile.row), castles[tile.castle])
        }
    }
}

control.simmessages.onReceived(channel.s, (buffer: Buffer) => {
    const o = JSON.parse(buffer.toString())
    const cmd = cmds[o.cmd]
    if (cmd) {
        cmd(o.args)
    }
})
