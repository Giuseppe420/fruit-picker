input.onButtonPressed(Button.A, function () {
    if (player_x <= 0) {
        player_x = 0
    } else {
        led.unplot(player_x, player_y)
        player_x += -1
        led.plot(player_x, player_y)
    }
})
input.onButtonPressed(Button.AB, function () {
    led.unplot(player_x, player_y)
    player_y += -1
    led.plot(player_x, player_y)
    basic.pause(500)
    led.unplot(player_x, player_y - 1)
    led.unplot(player_x, player_y)
    player_y = 4
    led.plot(player_x, player_y)
})
input.onButtonPressed(Button.B, function () {
    if (player_x >= 4) {
        player_x = 4
    } else {
        led.unplot(player_x, player_y)
        player_x += 1
        led.plot(player_x, player_y)
    }
})
let fruit_spawn = 0
let player_y = 0
let player_x = 0
player_x = 2
player_y = 4
basic.showLeds(`
    . . . . .
    # # # # #
    . . . . .
    . . . . .
    . . . . .
    `)
led.plot(player_x, player_y)
basic.forever(function () {
    fruit_spawn = randint(0, 4)
    basic.pause(5000)
    led.plot(fruit_spawn, 2)
})
