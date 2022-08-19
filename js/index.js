var switchModal = () => {
    var modal = document.querySelector('#modal')
    var actualStyle = modal.style.display
    if(actualStyle == 'block') {
      modal.style.display = 'none'
    }
    else {
      modal.style.display = 'block'
    }
  }
  
  var btn = document.querySelector('.modalBtn')
  btn.addEventListener('click', switchModal)
  
  window.onclick = function(event) {
      var modal = document.querySelector('#modal')
    if (event.target == modal) {
      switchModal()
    }
  }