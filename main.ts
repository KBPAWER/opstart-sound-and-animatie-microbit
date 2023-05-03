music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
basic.showString("Micro:bit")
music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . # # # .
    . # # # .
    . # # # .
    . . . . .
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.pause(100)
basic.showIcon(IconNames.Heart)
basic.pause(100)
basic.clearScreen()
basic.pause(100)
basic.showIcon(IconNames.Heart)
basic.pause(100)
basic.clearScreen()
basic.pause(100)
basic.showIcon(IconNames.Heart)
basic.pause(100)
basic.clearScreen()
basic.pause(100)
basic.showIcon(IconNames.Heart)
basic.pause(100)
basic.clearScreen()
basic.showString("welcome")
