namespace SpriteKind {
    export const GatheringStuff = SpriteKind.create()
    export const Portal = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (SAMLEJOHN.vy == 0) {
        SAMLEJOHN.vy = -100
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Portal, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(sprite, myTiles.tile1)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile8, function (sprite, location) {
    tiles.placeOnRandomTile(SAMLEJOHN, myTiles.tile9)
})
sprites.onDestroyed(SpriteKind.GatheringStuff, function (sprite) {
    if (SAMLEJOHN.overlapsWith(Burger4)) {
        tiles.placeOnRandomTile(SAMLEJOHN, myTiles.tile1)
    }
    if (SAMLEJOHN.overlapsWith(Burger5)) {
        tiles.placeOnRandomTile(SAMLEJOHN, myTiles.tile8)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.GatheringStuff, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(Burger1portal, myTiles.transparency16)
    otherSprite.destroy()
    info.changeScoreBy(5)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile11, function (sprite, location) {
    info.setScore(info.score() * 2)
    pause(100)
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile6, function (sprite, location) {
    tiles.placeOnRandomTile(SAMLEJOHN, myTiles.tile7)
})
let Burger1portal: Sprite = null
let Burger5: Sprite = null
let Burger4: Sprite = null
let SAMLEJOHN: Sprite = null
game.showLongText("Hello, you are playing a game made by Julius. In this game your supposed to collect food and earn points, which you can use to buy food when you're done playing! I hope you have a great time!", DialogLayout.Bottom)
SAMLEJOHN = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . b b b b . . . . . . 
    . . . . . . b b b b . . . . . . 
    . . . . . . 2 b b 2 . . . . . . 
    b b . . . b b 2 2 b b . . . b b 
    . b . b b b 2 b b 2 b b b . b . 
    . b b b b b b 2 2 b b b b b b . 
    . . b b b b b b b b b b b b . . 
    . . b b b b b b b b b b b b . . 
    . . b b b b b b b b b b b b . . 
    . . b . . . b . . b . . . b . . 
    . . b . . b b . . b b . . b . . 
    . b b . . b . . . . b . . b b . 
    . b . . b b . . . . b b . . b . 
    . b . . b . . . . . . b . . b . 
    `, SpriteKind.Player)
let Burger2 = sprites.create(img`
    . . . . c c c b b b b b . . . . 
    . . c c b 4 4 4 4 4 4 b b b . . 
    . c c 4 4 4 4 4 5 4 4 4 4 b c . 
    . e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
    e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
    e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
    e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
    . e b 4 4 4 4 4 5 4 4 4 4 b e . 
    8 7 e e b 4 4 4 4 4 4 b e e 6 8 
    8 7 2 e e e e e e e e e e 2 7 8 
    e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
    e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
    e b e 8 8 c c 8 8 c c c 8 e b e 
    e e b e c c e e e e e c e b e e 
    . e e b b 4 4 4 4 4 4 4 4 e e . 
    . . . c c c c c e e e e e . . . 
    `, SpriteKind.GatheringStuff)
let Burger1 = sprites.create(img`
    . . . . . . b b b b . . . . . . 
    . . . . . . b 4 4 4 b . . . . . 
    . . . . . . b b 4 4 4 b . . . . 
    . . . . . b 4 b b b 4 4 b . . . 
    . . . . b d 5 5 5 4 b 4 4 b . . 
    . . . . b 3 2 3 5 5 4 e 4 4 b . 
    . . . b d 2 2 2 5 7 5 4 e 4 4 e 
    . . . b 5 3 2 3 5 5 5 5 e e e e 
    . . b d 7 5 5 5 3 2 3 5 5 e e e 
    . . b 5 5 5 5 5 2 2 2 5 5 d e e 
    . b 3 2 3 5 7 5 3 2 3 5 d d e 4 
    . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
    b d 3 2 d 5 5 5 d d d 4 4 . . . 
    b 5 5 5 5 d d 4 4 4 4 . . . . . 
    4 d d d 4 4 4 . . . . . . . . . 
    4 4 4 4 . . . . . . . . . . . . 
    `, SpriteKind.GatheringStuff)
let Burger3 = sprites.create(img`
    . . 2 2 b b b b b . . . . . . . 
    . 2 b 4 4 4 4 4 4 b . . . . . . 
    2 2 4 4 4 4 d d 4 4 b . . . . . 
    2 b 4 4 4 4 4 4 d 4 b . . . . . 
    2 b 4 4 4 4 4 4 4 d 4 b . . . . 
    2 b 4 4 4 4 4 4 4 4 4 b . . . . 
    2 b 4 4 4 4 4 4 4 4 4 e . . . . 
    2 2 b 4 4 4 4 4 4 4 b e . . . . 
    . 2 b b b 4 4 4 b b b e . . . . 
    . . e b b b b b b b e e . . . . 
    . . . e e b 4 4 b e e e b . . . 
    . . . . . e e e e e e b d b b . 
    . . . . . . . . . . . b 1 1 1 b 
    . . . . . . . . . . . c 1 d d b 
    . . . . . . . . . . . c 1 b c . 
    . . . . . . . . . . . . c c . . 
    `, SpriteKind.GatheringStuff)
Burger4 = sprites.create(img`
    . . . . . . . e e e e . . . . . 
    . . . . . e e 4 5 5 5 e e . . . 
    . . . . e 4 5 6 2 2 7 6 6 e . . 
    . . . e 5 6 6 7 2 2 6 4 4 4 e . 
    . . e 5 2 2 7 6 6 4 5 5 5 5 4 . 
    . e 5 6 2 2 8 8 5 5 5 5 5 4 5 4 
    . e 5 6 7 7 8 5 4 5 4 5 5 5 5 4 
    e 4 5 8 6 6 5 5 5 5 5 5 4 5 5 4 
    e 5 c e 8 5 5 5 4 5 5 5 5 5 5 4 
    e 5 c c e 5 4 5 5 5 4 5 5 5 e . 
    e 5 c c 5 5 5 5 5 5 5 5 4 e . . 
    e 5 e c 5 4 5 4 5 5 5 e e . . . 
    e 5 e e 5 5 5 5 5 4 e . . . . . 
    4 5 4 e 5 5 5 5 e e . . . . . . 
    . 4 5 4 5 5 4 e . . . . . . . . 
    . . 4 4 e e e . . . . . . . . . 
    `, SpriteKind.GatheringStuff)
Burger5 = sprites.create(img`
    . . . . . . b b b b a a . . . . 
    . . . . b b d d d 3 3 3 a a . . 
    . . . b d d d 3 3 3 3 3 3 a a . 
    . . b d d 3 3 3 3 3 3 3 3 3 a . 
    . b 3 d 3 3 3 3 3 b 3 3 3 3 a b 
    . b 3 3 3 3 3 a a 3 3 3 3 3 a b 
    b 3 3 3 3 3 a a 3 3 3 3 d a 4 b 
    b 3 3 3 3 b a 3 3 3 3 3 d a 4 b 
    b 3 3 3 3 3 3 3 3 3 3 d a 4 4 e 
    a 3 3 3 3 3 3 3 3 3 d a 4 4 4 e 
    a 3 3 3 3 3 3 3 d d a 4 4 4 e . 
    a a 3 3 3 d d d a a 4 4 4 e e . 
    . e a a a a a a 4 4 4 4 e e . . 
    . . e e b b 4 4 4 4 b e e . . . 
    . . . e e e e e e e e . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.GatheringStuff)
Burger1portal = sprites.create(img`
    . . . . . f c c c c f . . . . . 
    . . c c f b b 3 3 b b f c c . . 
    . c b 3 3 b b c c b b 3 3 b c . 
    . f 3 c c c b c c b c c c 3 f . 
    f c b b c c b c c b c c b b c f 
    c 3 c c b c c c c c c b c c 3 c 
    c 3 c c c c c c c c c c c c 3 c 
    . f b b c c c c c c c c b b f . 
    . . f b b c 8 9 9 8 c b b f . . 
    . . c c c f 9 3 1 9 f c c c . . 
    . c 3 f f f 9 3 3 9 f f f 3 c . 
    c 3 f f f f 8 9 9 8 f f f f 3 c 
    f 3 c c f f f f f f f f c c 3 f 
    f b 3 c b b f b b f b b c 3 b f 
    . c b b 3 3 b 3 3 b 3 3 b b c . 
    . . f f f f f f f f f f f f . . 
    `, SpriteKind.Portal)
tiles.setTilemap(tilemap`level_0`)
tiles.placeOnRandomTile(Burger5, sprites.castle.tileDarkGrass3)
tiles.placeOnRandomTile(Burger4, myTiles.tile10)
tiles.placeOnRandomTile(Burger3, myTiles.tile4)
tiles.placeOnRandomTile(Burger2, myTiles.transparency16)
tiles.placeOnRandomTile(Burger1, myTiles.tile5)
SAMLEJOHN.ay = 300
scene.cameraFollowSprite(SAMLEJOHN)
controller.moveSprite(SAMLEJOHN, 100, 0)
tiles.placeOnRandomTile(SAMLEJOHN, myTiles.tile1)
game.onUpdate(function () {
    if (SAMLEJOHN.y >= 230) {
        info.setScore(0)
        game.over(false, effects.dissolve)
    }
})
