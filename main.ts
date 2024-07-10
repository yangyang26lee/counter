input.onButtonPressed(Button.A, function () {
    Number_1 += 1
    basic.showNumber(Number_1)
})
input.onButtonPressed(Button.AB, function () {
    Total = Number_1 + Number_2
    basic.showNumber(Total)
})
input.onButtonPressed(Button.B, function () {
    Number_2 += 1
    basic.showNumber(Number_2)
})
input.onGesture(Gesture.Shake, function () {
    Total = 0
    Number_1 = 0
    Number_2 = 0
    basic.clearScreen()
})
/**
 * Number 1-Based on input.
 * 
 * Display
 * 
 * Number 2-Based on input.
 * 
 * Display
 * 
 * Add them
 * 
 * Display
 */
let Total = 0
let Number_2 = 0
let Number_1 = 0
Number_1 = 0
Number_2 = 0
Total = 0
