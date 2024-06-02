radio.onReceivedData(function (receivedData) {
    if (radio.isBetriebsart(receivedData, radio.e0Betriebsart.p0)) {
        mkc.servo_set16(radio.getByte(receivedData, radio.eBufferPointer.m0, radio.eBufferOffset.b1_Servo))
        mkc.motorPower(radio.getaktiviert(receivedData, radio.e3aktiviert.m0) || radio.getaktiviert(receivedData, radio.e3aktiviert.m1))
        mkc.motor255(Motor.M0, radio.getByte(receivedData, radio.eBufferPointer.m0, radio.eBufferOffset.b0_Motor))
        mkc.motor255(Motor.M1, radio.getByte(receivedData, radio.eBufferPointer.m1, radio.eBufferOffset.b0_Motor))
        mkc.rgbLEDon(mkc.eRGBled.a, 0xff0000, radio.getaktiviert(receivedData, radio.e3aktiviert.m0))
        mkc.buzzer(radio.getSchalter(receivedData, radio.e0Schalter.b0))
        mkc.rgbLEDs(mkc.eRGBled.b, 0x00ff00, true)
    }
})
mkc.beimStart(239, 90)
basic.showLeds(`
    . . # . .
    . # . # .
    . . # . .
    # # # # #
    # . . . #
    `)
loops.everyInterval(700, function () {
    if (radio.timeout(1000)) {
        mkc.rgbLEDon(mkc.eRGBled.a, 0x000000, false)
        mkc.rgbLEDs(mkc.eRGBled.b, 0x0000ff, true)
    }
})
