input.onButtonPressed(Button.A, function () {
    BagelWithCreamCheese += 1
    basic.clearScreen()
    basic.showNumber(BagelWithCreamCheese,1)
})
input.onButtonPressed(Button.AB, function () {
    BagelWithCreamCheese = 0
    basic.clearScreen()
    basic.showNumber(BagelWithCreamCheese,0)
})
input.onButtonPressed(Button.B, function () {
    BagelWithCreamCheese += -1
    basic.clearScreen()
    basic.showNumber(BagelWithCreamCheese,-1)
})
let BagelWithCreamCheese = 0
basic.showNumber(0)
BagelWithCreamCheese = 0
