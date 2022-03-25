const btns = document.querySelector('.btns')
const buttons = document.querySelectorAll('.btn')
btns.addEventListener('click', (e)=> {
  buttons.forEach(element=> {
    element.classList.remove('clicked')
  })
  e.target.classList.add('clicked')
})


