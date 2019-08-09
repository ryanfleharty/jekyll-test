/* global $:true */
// if (typeof jQuery === 'undefined') {
//   console.log('oops! I still have to link my jQuery properly!')
// } else { console.log('I did it! I linked jQuery and this js file!')}

$(() => {
  // make a table

  // make a table element
  const $table = $('<table>')
  // make an h5 element
  const $h5 = $('<h5>')
  // make a thead
  const $thead = $('<thead>')
  // two th elements
  $thead.html(
    `<th>Day</th>
     <th>Classes</th>
    `
  )

  const $tr = $('<tr>')
  const $td = $('<td>').text('Monday')
  const $td2 = $('<td>').text('Potions')
  $tr.append($td, $td2)

  const $trTuesday = $('<tr>')
  const $tdTuesday = $('<td>').text('Tuesday')
  const $td2Tuesday = $('<td>').text('Defense of the Dark Arts')
  $trTuesday.append($tdTuesday, $td2Tuesday)

  const $trWednesday = $('<tr>')
  const $tdWednesday = $('<td>').text('Wednesday')
  const $td2Wednesday = $('<td>').text('Divination')
  $trWednesday.append($tdWednesday, $td2Wednesday)

  const $trThursday = $('<tr>')
  const $tdThursday = $('<td>').text('Thursday')
  const $td2Thursday = $('<td>').text('Quiddich')

  $trThursday.append($tdThursday, $td2Thursday)

  const $trFriday = $('<tr>')
  const $tdFriday = $('<td>').text('Friday')
  const $td2Friday = $('<td>').text('Botany')

  $trFriday.append($tdFriday, $td2Friday)
  // tr - with two td inside of it - repeat for each day of the week
  $table.append($thead)
  $table.append($tr, $trTuesday, $trWednesday, $trThursday, $trFriday)
  // grab the div with id container
  $('#container').append($table)

})
