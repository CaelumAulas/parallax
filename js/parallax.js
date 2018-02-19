var $secondHeader = document.querySelector('.second-header')
var $secondContent = document.querySelector('.second-content')

window.addEventListener('scroll', function () {
  if ($secondHeader.getBoundingClientRect().top <= 0) {
    $secondHeader.classList.add('second-header_fixed')
  } 

  if ($secondContent.getBoundingClientRect().top >= $secondHeader.getBoundingClientRect().height - $secondHeader.getBoundingClientRect().height) {
    $secondHeader.classList.remove('second-header_fixed')
  }
    
})

console.log($secondHeader)
