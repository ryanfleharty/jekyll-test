/* global $ event */


let action = ''
let firstValue = true
let value1 = 0
let value2 = 0
let total = 0

$(() => {
  // get the button
  const $numButton = $('.num')
  // console.log($numButton)

  // working so I can get the number
  $numButton.on('click', () => {
    // console.log('I clicked it', $(event.target).text())
    const $num = $(event.target).text()
    // get number to show up in output
    $('#output').append($num)
    // later get rid of the leading 0
  })

  const $actionButton = $('.action')
  $actionButton.on('click', () => {
    // store the value of what is in the display field
    const value = Number($('#output').text())
    // need to store action
    action = $(event.target).text()
    if (firstValue) {
      value1 = value
      firstValue = !firstValue
      $('#output').text('0')
    } else {
      value2 = value
      firstValue = !firstValue
      // just adding two nums toether would be nice to do other operations
      // further figure out way to operate on multiple inputs rather than just 2
      $('#output').text(value1 + value2)
    }
    console.log(value1, value2, action)
  })
})

// can add two numbers together
// need to make equal sign work
