const message = 'Hello World'

// Vanilla JS
// document on ready equivalent to jQuery
document.addEventListener('DOMContentLoaded', ()=>{
  const div = document.querySelector('.container')
  div.innerHTML = '<h1>' + message + '</h1>'
})

ReactDOM.render(
  <h1> {message} </h1>,
  document.querySelector('.container')
)
