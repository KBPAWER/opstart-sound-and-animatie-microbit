music.start_melody(music.built_in_melody(Melodies.POWER_UP), MelodyOptions.ONCE)
basic.show_string("KB")
music.start_melody(music.built_in_melody(Melodies.POWER_DOWN),
    MelodyOptions.ONCE)
basic.show_leds("""
    . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
""")
basic.show_leds("""
    . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
""")
basic.show_leds("""
    # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
""")
basic.clear_screen()