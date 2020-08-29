OLED12864_I2C.init(60)
basic.forever(function () {
    OLED12864_I2C.showNumber(
    5,
    1,
    pins.analogReadPin(AnalogPin.P2),
    1
    )
    basic.pause(500)
})
