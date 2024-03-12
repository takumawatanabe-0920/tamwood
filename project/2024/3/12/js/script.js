$(document).ready(function () {
  $('a').click(function (event) {
    event.preventDefault()
    $(this).hide('slow')
  })
})

function toggleActive() {
  $('#paragraph-1').toggleClass('active')
}
