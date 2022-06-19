radio.onReceivedNumber(function (receivedNumber) {
    if (vinner == 0) {
        vinner = receivedNumber
        basic.showNumber(receivedNumber)
    }
})
input.onButtonPressed(Button.A, function () {
    figur = randint(0, 3)
    vinner = 0
    radio.sendNumber(figur)
    basic.showIcon(IconNames.Diamond)
})
let figur = 0
let vinner = 0
radio.setGroup(1)