radio.onReceivedNumber(function (receivedNumber) {
    pilTall = receivedNumber
    if (receivedNumber == 0) {
        basic.showArrow(ArrowNames.West)
    } else if (receivedNumber == 1) {
        basic.showArrow(ArrowNames.East)
    } else if (receivedNumber == 2) {
        basic.showArrow(ArrowNames.North)
    } else {
        basic.showArrow(ArrowNames.South)
    }
    kanSvare = true
})
input.onButtonPressed(Button.A, function () {
    sjekkSvar(0)
})
input.onGesture(Gesture.Shake, function () {
    sjekkSvar(3)
})
input.onButtonPressed(Button.AB, function () {
    sjekkSvar(2)
})
input.onButtonPressed(Button.B, function () {
    sjekkSvar(1)
})
function sjekkSvar (tall: number) {
    if (kanSvare == true) {
        if (pilTall == tall) {
            radio.sendNumber(playerNummer)
            kanSvare = false
            basic.showIcon(IconNames.Yes)
        }
    }
}
let pilTall = 0
let kanSvare = false
let playerNummer = 0
radio.setGroup(1)
//set unike playerNummer for hver spiller
playerNummer = 2
kanSvare = false