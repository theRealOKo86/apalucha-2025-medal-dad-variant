input.onGesture(Gesture.EightG, function () {
    if (0 == modes_array.indexOf(mode)) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        radio.sendNumber(2)
    } else if (1 == modes_array.indexOf(mode)) {
    	
    }
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    if (input.isGesture(Gesture.ScreenDown)) {
        mode = modes_array[(modes_array.indexOf(mode) + 1) % modes_array.length]
        music.play(music.tonePlayable(tones_array[modes_array.indexOf(mode)], music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        if (0 == modes_array.indexOf(mode)) {
            strip.showColor(neopixel.colors(NeoPixelColors.Black))
            rotate = 0
            speed = 2
            radio.setTransmitPower(7)
        } else if (1 == modes_array.indexOf(mode)) {
            strip.showColor(neopixel.colors(NeoPixelColors.Black))
            radio.setTransmitPower(tx_power_treasure_hunt)
        }
        led.stopAnimation()
        basic.showString("" + (mode))
    } else if (input.buttonIsPressed(Button.A)) {
        tx_power_treasure_hunt = Math.constrain(tx_power_treasure_hunt - 1, 1, 7)
        radio.setTransmitPower(tx_power_treasure_hunt)
        led.stopAnimation()
        basic.showString("" + (tx_power_treasure_hunt))
        basic.clearScreen()
    } else if (input.buttonIsPressed(Button.B)) {
        tx_power_treasure_hunt = Math.constrain(tx_power_treasure_hunt + 1, 1, 7)
        radio.setTransmitPower(tx_power_treasure_hunt)
        led.stopAnimation()
        basic.showString("" + (tx_power_treasure_hunt))
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.A, function () {
    if (0 == modes_array.indexOf(mode)) {
        if (0 == rotate) {
            strip.rotate(1)
            strip.show()
        } else {
            speed = speed - 1
        }
    } else if (1 == modes_array.indexOf(mode)) {
    	
    }
})
input.onButtonPressed(Button.AB, function () {
    if (0 == modes_array.indexOf(mode)) {
        radio.sendNumber(1)
    } else if (1 == modes_array.indexOf(mode)) {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    if (0 == modes_array.indexOf(mode)) {
        if (0 == rotate) {
            strip.setPixelColor(4, colors_array._pickRandom())
            strip.show()
        } else {
            speed = speed + 1
        }
    } else if (1 == modes_array.indexOf(mode)) {
    	
    }
})
input.onGesture(Gesture.Shake, function () {
    if (0 == modes_array.indexOf(mode)) {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        rotate = 0
        speed = 2
    } else if (1 == modes_array.indexOf(mode)) {
    	
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (0 == modes_array.indexOf(mode)) {
        if (0 == rotate) {
            rotate = 1
        } else {
            rotate = 0
        }
        basic.pause(200)
    } else if (1 == modes_array.indexOf(mode)) {
    	
    }
})
let tx_power_treasure_hunt = 0
let mode = ""
let tones_array: number[] = []
let modes_array: string[] = []
let colors_array: number[] = []
let speed = 0
let rotate = 0
let strip: neopixel.Strip = null
radio.setGroup(1)
radio.setTransmitPower(7)
strip = neopixel.create(DigitalPin.P0, 11, NeoPixelMode.RGB)
strip.setBrightness(50)
rotate = 0
speed = 2
colors_array = [
neopixel.colors(NeoPixelColors.Red),
neopixel.colors(NeoPixelColors.Orange),
neopixel.colors(NeoPixelColors.Yellow),
neopixel.colors(NeoPixelColors.Green),
neopixel.colors(NeoPixelColors.Blue),
neopixel.colors(NeoPixelColors.Indigo),
neopixel.colors(NeoPixelColors.Violet),
neopixel.colors(NeoPixelColors.Purple),
neopixel.colors(NeoPixelColors.White),
neopixel.colors(NeoPixelColors.Black)
]
modes_array = ["lightshow", "treasure_hunt"]
tones_array = [262, 294]
mode = modes_array[0]
let id = 42
tx_power_treasure_hunt = 3
basic.forever(function () {
    if (0 == modes_array.indexOf(mode)) {
        if (1 == rotate) {
            if (speed > 0) {
                strip.rotate(1)
            } else {
                strip.rotate(-1)
            }
            strip.show()
            basic.pause(Math.abs(speed) * 25)
        }
    } else if (1 == modes_array.indexOf(mode)) {
        radio.sendNumber(id)
        basic.pause(200)
    }
})
basic.forever(function () {
    if (0 == modes_array.indexOf(mode)) {
        basic.showString("Apalucha 2025")
    } else if (1 == modes_array.indexOf(mode)) {
    	
    }
})
