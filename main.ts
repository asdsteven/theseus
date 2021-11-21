const channel = {
    s: "theseus",
    post: (o: Object) => control.simmessages.send(channel.s, Buffer.fromUTF8(JSON.stringify(o)))
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
    sprites.castle.tilePath9,
    sprites.castle.tileGrass1,
    sprites.castle.tileGrass2,
    sprites.castle.tileGrass3
]
const hero = {
    col: 0,
    row: 0,
    frame: 0,
    durations: {
        gait: 100,
        move: 1000
    },
    sprite: null as Sprite,
    sprites: [
        img`
            . . . . . . f f f f . . . . . .
            . . . . f f f 2 2 f f f . . . .
            . . . f f f 2 2 2 2 f f f . . .
            . . f f f e e e e e e f f f . .
            . . f f e 2 2 2 2 2 2 e e f . .
            . . f e 2 f f f f f f 2 e f . .
            . . f f f f e e e e f f f f . .
            . f f e f b f 4 4 f b f e f f .
            . f e e 4 1 f d d f 1 4 e e f .
            . . f e e d d d d d d e e f . .
            . . . f e e 4 4 4 4 e e f . . .
            . . e 4 f 2 2 2 2 2 2 f 4 e . .
            . . 4 d f 2 2 2 2 2 2 f d 4 . .
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . .
            . . . . . f f f f f f . . . . .
            . . . . . f f . . f f . . . . .
        `,
        img`
            . . . . . . . . . . . . . . . .
            . . . . . . f f f f . . . . . .
            . . . . f f f 2 2 f f f . . . .
            . . . f f f 2 2 2 2 f f f . . .
            . . f f f e e e e e e f f f . .
            . . f f e 2 2 2 2 2 2 e e f . .
            . f f e 2 f f f f f f 2 e f f .
            . f f f f f e e e e f f f f f .
            . . f e f b f 4 4 f b f e f . .
            . . f e 4 1 f d d f 1 4 e f . .
            . . . f e 4 d d d d 4 e f e . .
            . . f e f 2 2 2 2 e d d 4 e . .
            . . e 4 f 2 2 2 2 e d d e . . .
            . . . . f 4 4 5 5 f e e . . . .
            . . . . f f f f f f f . . . . .
            . . . . f f f . . . . . . . . .
        `,
        img`
            . . . . . . . . . . . . . . . .
            . . . . . . f f f f . . . . . .
            . . . . f f f 2 2 f f f . . . .
            . . . f f f 2 2 2 2 f f f . . .
            . . f f f e e e e e e f f f . .
            . . f e e 2 2 2 2 2 2 e f f . .
            . f f e 2 f f f f f f 2 e f f .
            . f f f f f e e e e f f f f f .
            . . f e f b f 4 4 f b f e f . .
            . . f e 4 1 f d d f 1 4 e f . .
            . . e f e 4 d d d d 4 e f . . .
            . . e 4 d d e 2 2 2 2 f e f . .
            . . . e d d e 2 2 2 2 f 4 e . .
            . . . . e e f 5 5 4 4 f . . . .
            . . . . . f f f f f f f . . . .
            . . . . . . . . . f f f . . . .
        `,
        img`
            . . . . . . f f f f f f . . . .
            . . . . f f e e e e f 2 f . . .
            . . . f f e e e e f 2 2 2 f . .
            . . . f e e e f f e e e e f . .
            . . . f f f f e e 2 2 2 2 e f .
            . . . f e 2 2 2 f f f f e 2 f .
            . . f f f f f f f e e e f f f .
            . . f f e 4 4 e b f 4 4 e e f .
            . . f e e 4 d 4 1 f d d e f . .
            . . . f e e e 4 d d d d f . . .
            . . . . f f e e 4 4 4 e f . . .
            . . . . . 4 d d e 2 2 2 f . . .
            . . . . . e d d e 2 2 2 f . . .
            . . . . . f e e f 4 5 5 f . . .
            . . . . . . f f f f f f . . . .
            . . . . . . . f f f . . . . . .
        `,
        img`
            . . . . . . . . . . . . . . . .
            . . . . . . f f f f f f . . . .
            . . . . f f e e e e f 2 f . . .
            . . . f f e e e e f 2 2 2 f . .
            . . . f e e e f f e e e e f . .
            . . . f f f f e e 2 2 2 2 e f .
            . . . f e 2 2 2 f f f f e 2 f .
            . . f f f f f f f e e e f f f .
            . . f f e 4 4 e b f 4 4 e e f .
            . . f e e 4 d 4 1 f d d e f . .
            . . . f e e e 4 d d d d f . . .
            . . . . 4 d d e 4 4 4 e f . . .
            . . . . e d d e 2 2 2 2 f . . .
            . . . . f e e f 4 4 5 5 f f . .
            . . . . f f f f f f f f f f . .
            . . . . . f f . . . f f f . . .
        `,
        img`
            . . . . . . . . . . . . . . . .
            . . . . . . f f f f f f . . . .
            . . . . f f e e e e f 2 f . . .
            . . . f f e e e e f 2 2 2 f . .
            . . . f e e e f f e e e e f . .
            . . . f f f f e e 2 2 2 2 e f .
            . . . f e 2 2 2 f f f f e 2 f .
            . . f f f f f f f e e e f f f .
            . . f f e 4 4 e b f 4 4 e e f .
            . . f e e 4 d 4 1 f d d e f . .
            . . . f e e e e e d d d f . . .
            . . . . . f 4 d d e 4 e f . . .
            . . . . . f e d d e 2 2 f . . .
            . . . . f f f e e f 5 5 f f . .
            . . . . f f f f f f f f f f . .
            . . . . . f f . . . f f f . . .
        `,
        img`
            . . . . . . f f f f . . . . . .
            . . . . f f e e e e f f . . . .
            . . . f e e e f f e e e f . . .
            . . f f f f f 2 2 f f f f f . .
            . . f f e 2 e 2 2 e 2 e f f . .
            . . f e 2 f 2 f f 2 f 2 e f . .
            . . f f f 2 2 e e 2 2 f f f . .
            . f f e f 2 f e e f 2 f e f f .
            . f e e f f e e e e f e e e f .
            . . f e e e e e e e e e e f . .
            . . . f e e e e e e e e f . . .
            . . e 4 f f f f f f f f 4 e . .
            . . 4 d f 2 2 2 2 2 2 f d 4 . .
            . . 4 4 f 4 4 4 4 4 4 f 4 4 . .
            . . . . . f f f f f f . . . . .
            . . . . . f f . . f f . . . . .
        `,
        img`
            . . . . . . . . . . . . . . . .
            . . . . . . f f f f . . . . . .
            . . . . f f e e e e f f . . . .
            . . . f e e e f f e e e f . . .
            . . . f f f f 2 2 f f f f . . .
            . . f f e 2 e 2 2 e 2 e f f . .
            . . f e 2 f 2 f f f 2 f e f . .
            . . f f f 2 f e e 2 2 f f f . .
            . . f e 2 f f e e 2 f e e f . .
            . f f e f f e e e f e e e f f .
            . f f e e e e e e e e e e f f .
            . . . f e e e e e e e e f . . .
            . . . e f f f f f f f f 4 e . .
            . . . 4 f 2 2 2 2 2 e d d 4 . .
            . . . e f f f f f f e e 4 . . .
            . . . . f f f . . . . . . . . .
        `,
        img`
            . . . . . . . . . . . . . . . .
            . . . . . . f f f f . . . . . .
            . . . . f f e e e e f f . . . .
            . . . f e e e f f e e e f . . .
            . . . f f f f 2 2 f f f f . . .
            . . f f e 2 e 2 2 e 2 e f f . .
            . . f e f 2 f f f 2 f 2 e f . .
            . . f f f 2 2 e e f 2 f f f . .
            . . f e e f 2 e e f f 2 e f . .
            . f f e e e f e e e f f e f f .
            . f f e e e e e e e e e e f f .
            . . . f e e e e e e e e f . . .
            . . e 4 f f f f f f f f e . . .
            . . 4 d d e 2 2 2 2 2 f 4 . . .
            . . . 4 e e f f f f f f e . . .
            . . . . . . . . . f f f . . . .
        `,
        img`
            . . . . f f f f f f . . . . . .
            . . . f 2 f e e e e f f . . . .
            . . f 2 2 2 f e e e e f f . . .
            . . f e e e e f f e e e f . . .
            . f e 2 2 2 2 e e f f f f . . .
            . f 2 e f f f f 2 2 2 e f . . .
            . f f f e e e f f f f f f f . .
            . f e e 4 4 f b e 4 4 e f f . .
            . . f e d d f 1 4 d 4 e e f . .
            . . . f d d d d 4 e e e f . . .
            . . . f e 4 4 4 e e f f . . . .
            . . . f 2 2 2 e d d 4 . . . . .
            . . . f 2 2 2 e d d e . . . . .
            . . . f 5 5 4 f e e f . . . . .
            . . . . f f f f f f . . . . . .
            . . . . . . f f f . . . . . . .
        `,
        img`
            . . . . . . . . . . . . . . . .
            . . . . f f f f f f . . . . . .
            . . . f 2 f e e e e f f . . . .
            . . f 2 2 2 f e e e e f f . . .
            . . f e e e e f f e e e f . . .
            . f e 2 2 2 2 e e f f f f . . .
            . f 2 e f f f f 2 2 2 e f . . .
            . f f f e e e f f f f f f f . .
            . f e e 4 4 f b e 4 4 e f f . .
            . . f e d d f 1 4 d 4 e e f . .
            . . . f d d d e e e e e f . . .
            . . . f e 4 e d d 4 f . . . . .
            . . . f 2 2 e d d e f . . . . .
            . . f f 5 5 f e e f f f . . . .
            . . f f f f f f f f f f . . . .
            . . . f f f . . . f f . . . . .
        `,
        img`
            . . . . . . . . . . . . . . . .
            . . . . f f f f f f . . . . . .
            . . . f 2 f e e e e f f . . . .
            . . f 2 2 2 f e e e e f f . . .
            . . f e e e e f f e e e f . . .
            . f e 2 2 2 2 e e f f f f . . .
            . f 2 e f f f f 2 2 2 e f . . .
            . f f f e e e f f f f f f f . .
            . f e e 4 4 f b e 4 4 e f f . .
            . . f e d d f 1 4 d 4 e e f . .
            . . . f d d d d 4 e e e f . . .
            . . . f e 4 4 4 e d d 4 . . . .
            . . . f 2 2 2 2 e d d e . . . .
            . . f f 5 5 4 4 f e e f . . . .
            . . f f f f f f f f f f . . . .
            . . . f f f . . . f f . . . . .
        `
    ]
}
const snake = {
    col: 0,
    row: 0,
    durations: {
        gait: 100,
        move: 1000,
        rest: 200,
        bite: 200,
        bites: 30000
    },
    sprite: null as Sprite,
    sprites: [
        img`
            . . . . c c c c c c . . . . . .
            . . . c 6 7 7 7 7 6 c . . . . .
            . . c 7 7 7 7 7 7 7 7 c . . . .
            . c 6 7 7 7 7 7 7 7 7 6 c . . .
            . c 7 c 6 6 6 6 c 7 7 7 c . . .
            . f 7 6 f 6 6 f 6 7 7 7 f . . .
            . f 7 7 7 7 7 7 7 7 7 7 f . . .
            . . f 7 7 7 7 6 c 7 7 6 f c . .
            . . . f c c c c 7 7 6 f 7 7 c .
            . . c 7 2 7 7 7 6 c f 7 7 7 7 c
            . c 7 7 2 7 7 c f c 6 7 7 6 c c
            c 1 1 1 1 7 6 f c c 6 6 6 c . .
            f 1 1 1 1 1 6 6 c 6 6 6 6 f . .
            f 6 1 1 1 1 1 6 6 6 6 6 c f . .
            . f 6 1 1 1 1 1 1 6 6 6 f . . .
            . . c c c c c c c c c f . . . .
        `,
        img`
            . . . c c c c c c . . . . . . .
            . . c 6 7 7 7 7 6 c . . . . . .
            . c 7 7 7 7 7 7 7 7 c . . . . .
            c 6 7 7 7 7 7 7 7 7 6 c . . . .
            c 7 c 6 6 6 6 c 7 7 7 c . . . .
            f 7 6 f 6 6 f 6 7 7 7 f . . . .
            f 7 7 7 7 7 7 7 7 7 7 f . . . .
            . f 7 7 7 7 6 c 7 7 6 f . . . .
            . . f c c c c 7 7 6 f c c c . .
            . . c 6 2 7 7 7 f c c 7 7 7 c .
            . c 6 7 7 2 7 7 c f 6 7 7 7 7 c
            . c 1 1 1 1 7 6 6 c 6 6 6 c c c
            . c 1 1 1 1 1 6 6 6 6 6 6 c . .
            . c 6 1 1 1 1 1 6 6 6 6 6 c . .
            . . c 6 1 1 1 1 1 7 6 6 c c . .
            . . . c c c c c c c c c c . . .
        `,
        img`
            . . . . . c c c c c c c . . . .
            . . . . c 6 7 7 7 7 7 6 c . . .
            . . . c 7 c 6 6 6 6 c 7 6 c . .
            . . c 6 7 6 f 6 6 f 6 7 7 c . .
            . . c 7 7 7 7 7 7 7 7 7 7 c . .
            . . f 7 8 1 f f 1 6 7 7 7 f . .
            . . f 6 f 1 f f 1 f 7 7 7 f . .
            . . . f f 2 2 2 2 f 7 7 6 f . .
            . . c c f 2 2 2 2 7 7 6 f c . .
            . c 7 7 7 7 7 7 7 7 c c 7 7 c .
            c 7 1 1 1 7 7 7 7 f c 6 7 7 7 c
            f 1 1 1 1 1 7 6 f c c 6 6 6 c c
            f 1 1 1 1 1 1 6 6 c 6 6 6 c . .
            f 6 1 1 1 1 1 6 6 6 6 6 6 c . .
            . f 6 1 1 1 1 1 6 6 6 6 c . . .
            . . f f c c c c c c c c . . . .
        `,
        img`
            . . . . . . c c c c c c c . . .
            . . . . . c f f 6 6 f f 7 c . .
            . . . . c 7 6 6 6 6 6 6 7 6 c .
            . . . c 7 7 7 7 7 7 7 7 7 7 c .
            . . . c 7 8 1 f f 1 6 7 7 7 c .
            . . . f 6 f 1 f f 1 f 7 7 7 f .
            . . . f 6 f 2 2 2 2 f 7 7 7 f .
            . . c c 6 f 2 2 2 2 f 7 7 6 f .
            . c 7 7 7 7 2 2 2 2 7 7 f c . .
            c 7 1 1 1 7 7 7 7 7 c c 7 7 c .
            f 1 1 1 1 1 7 7 7 f c 6 7 7 7 c
            f 1 1 1 1 1 1 6 f c c 6 6 6 c c
            f 6 1 1 1 1 1 6 6 c 6 6 6 c . .
            f 6 1 1 1 1 1 6 6 6 6 6 6 c . .
            . f 6 1 1 1 1 6 6 6 6 6 c . . .
            . . f f c c c c c c c c . . . .
        `,
        img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . c c c c c
            . . . . . . . . . c c 7 7 7 6 c
            . . . . . . . . c c 7 7 7 c c .
            . . . . . . . . c 6 7 7 c . . .
            . . . . . . . . c 6 6 6 c . . .
            . . . c c c c c c 6 6 6 c c . .
            . . c 6 7 7 7 7 6 c c 6 6 6 c .
            . c 7 7 7 7 7 7 7 7 c 6 6 6 c c
            c 6 7 7 7 7 7 7 7 7 6 c 6 6 6 c
            c 7 c 6 6 6 6 c 7 7 7 c 6 6 6 c
            f 7 c c 6 6 c c 7 7 7 f 6 6 6 c
            f 7 6 f 6 6 f 6 7 7 7 f 6 6 6 c
            . c 1 c f f 1 c 7 6 f 6 6 c c .
            . c c c c c c c c c c c c . . .
        `,
        img`
            . . . . . . . . . . . c c c c c
            . . . . . . . . . c c 7 7 7 6 c
            . . . . . . . . c c 7 7 7 c c .
            . . . . . . . . c 6 7 7 c . . .
            . . . . . . . . c 6 6 6 c . . .
            . . . . . . . . c 6 6 6 c c . .
            . . . c c c c c c c 6 6 6 c c .
            . . c 6 7 7 7 7 6 c c 6 6 6 c .
            . c 7 7 7 7 7 7 7 7 c 6 6 6 c c
            c 6 7 7 7 7 7 7 7 7 6 c 6 6 6 c
            c 7 c 6 6 6 6 c 7 7 7 c 6 6 6 c
            f 7 c c 6 6 c c 7 7 7 f 6 6 6 c
            f 7 6 f 6 6 f 6 7 7 7 f 6 6 6 c
            . f 7 7 7 7 7 7 7 7 6 f 6 6 c .
            . c 1 c f f 1 c 7 6 f 6 6 c c .
            . c c c c c c c c c c c c . . .
        `
    ]
}
const treasure = {
    col: 0,
    row: 0,
    sprite: null as Sprite,
    sprites: [
        img`
        . . b b b b b b b b b b b b . .
        . b e 4 4 4 4 4 4 4 4 4 4 e b .
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b
        b e e 4 4 4 4 4 4 4 4 4 4 e e b
        b e e e e e e e e e e e e e e b
        b e e e e e e e e e e e e e e b
        b b b b b b b d d b b b b b b b
        c b b b b b b c c b b b b b b c
        c c c c c c b c c b c c c c c c
        b e e e e e c b b c e e e e e b
        b e e e e e e e e e e e e e e b
        b c e e e e e e e e e e e e c b
        b b b b b b b b b b b b b b b b
        . b b . . . . . . . . . . b b .
        `,
        img`
            . b b b b b b b b b b b b b b .
            b e 4 4 4 4 4 4 4 4 4 4 4 4 4 b
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b
            b e e 4 4 4 4 4 4 4 4 4 4 e e b
            b b b b b b b d d b b b b b b b
            . b b b b b b c c b b b b b b .
            b c c c c c b c c b c c c c c b
            b c c c c c c b b c c c c c c b
            b c c c c c c c c c c c c c c b
            b c c c c c c c c c c c c c c b
            b b b b b b b b b b b b b b b b
            b e e e e e e e e e e e e e e b
            b e e e e e e e e e e e e e e b
            b c e e e e e e e e e e e e c b
            b b b b b b b b b b b b b b b b
            . b b . . . . . . . . . . b b .
        `
    ]
}
treasure.sprite = sprites.create(treasure.sprites[0])
hero.sprite = sprites.create(hero.sprites[0])
snake.sprite = sprites.create(snake.sprites[0])
const state = {
    n: 0,
    hero: null as any,
    snake: null as any,
    duration: 0,
    progress: 0,
    runtime: 0
}
game.onUpdateInterval(30, function () {
    const dt = game.runtime() - state.runtime
    state.progress += dt
    state.runtime += dt
    if (state.progress >= state.duration) {
        state.progress = state.duration
    }
    const u = scene.screenWidth() / 10
    const f = (a: number, b: number) => (b * state.progress + a * (state.duration - state.progress)) / state.duration
    const d1 = (a: number, b: number) => {
        if (a < b) {
            return 1
        }
        if (a > b) {
            return -1
        }
        return 0
    }
    if (state.n == 1) {
        const frames = [0, 1, 0, 2]
        hero.sprite.setImage(hero.sprites[hero.frame + frames[Math.floor(state.progress / hero.durations.gait) % 4]])
        hero.sprite.setPosition((f(state.hero.col, hero.col) + 0.5) * u, (f(state.hero.row, hero.row) + 0.5) * u)
        if (state.progress == state.duration) {
            hero.sprite.setImage(hero.sprites[hero.frame])
            state.n++
        }
    } else if (state.n == 2 || state.n == 6) {
        state.snake = {
            col: snake.col,
            row: snake.row
        }
        state.duration = snake.durations.move
        state.progress = 0
        const dc = d1(snake.col, hero.col)
        const dr = d1(snake.row, hero.row)
        if (dc) {
            snake.col += dc
            state.n++
        } else if (dr) {
            snake.row += dr
            state.n++
        } else {
            state.duration = snake.durations.bites
            state.progress = 0
            state.n = 9
        }
    } else if (state.n == 3 || state.n == 7) {
        snake.sprite.setImage(snake.sprites[Math.floor(state.progress / snake.durations.gait) % 2])
        snake.sprite.setPosition((f(state.snake.col, snake.col) + 0.5) * u, (f(state.snake.row, snake.row) + 0.5) * u)
        if (state.progress == state.duration) {
            snake.sprite.setImage(snake.sprites[0])
            state.n++
        }
    } else if (state.n == 4) {
        state.duration = snake.durations.rest
        state.progress = 0
        state.n++
    } else if (state.n == 5) {
        if (state.progress == state.duration) {
            state.n++
        }
    } else if (state.n == 8) {
        if (snake.col == hero.col && snake.row == hero.row) {
            state.duration = snake.durations.move
            state.progress = 0
            state.n++
        } else {
            state.n = 0
        }
    } else if (state.n == 9) {
        const frames = [2, 3, 3, 4, 5, 5, 5, 5]
        snake.sprite.setImage(snake.sprites[frames[Math.floor(state.progress / snake.durations.bite) % 8]])
    }
})
const move = (col: number, row: number, frame: number) => {
    if (state.n == 0) {
        state.hero = {
            col: hero.col,
            row: hero.row
        }
        state.duration = hero.durations.move
        state.progress = 0
        state.runtime = game.runtime()
        state.n++
        hero.col += col
        hero.row += row
        hero.frame = frame
    }
}
controller.player1.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    move(0, 1, 0)
})
controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    move(1, 0, 3)
})
controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    move(0, -1, 6)
})
controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    move(-1, 0, 9)
})
interface StringToAny {
    [key: string]: any
}
interface Tile {
    col: number,
    row: number,
    castle: number
}
const cmds: StringToAny = {
    splash: (s: string) => {
        game.splash(s)
    },
    setScene: (args: any) => {
        tiles.setTilemap(tilemap`template`)
        for (const tile of args.tiles as Tile[]) {
            tiles.setTileAt(tiles.getTileLocation(tile.col, tile.row), castles[tile.castle])
        }
        hero.col = args.hero.col
        hero.row = args.hero.row
        hero.durations = args.hero.durations
        snake.col = args.snake.col
        snake.row = args.snake.row
        snake.durations = args.snake.durations
        treasure.col = args.treasure.col
        treasure.row = args.treasure.row
        const u = scene.screenWidth() / 10
        hero.sprite.setPosition((hero.col + 0.5) * u, (hero.row + 0.5) * u)
        snake.sprite.setPosition((snake.col + 0.5) * u, (snake.row + 0.5) * u)
        treasure.sprite.setPosition((treasure.col + 0.5) * u, (treasure.row + 0.5) * u)
    }
}
control.simmessages.onReceived(channel.s, (buffer: Buffer) => {
    const o = JSON.parse(buffer.toString())
    const cmd = cmds[o.cmd]
    if (cmd) {
        cmd(o.args)
    }
})
cmds.setScene({
    tiles: [],
    walls: [],
    hero: {
        col: 5,
        row: 0,
        durations: {
            gait: 100,
            move: 1000
        }
    },
    snake: {
        col: 0,
        row: 1,
        durations: {
            gait: 100,
            move: 1000,
            rest: 200,
            bite: 200,
            bites: 30000
        }
    },
    treasure: {
        col: 1,
        row: 0
    }
})
