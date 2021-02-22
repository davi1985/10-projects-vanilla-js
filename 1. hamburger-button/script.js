// first solution using just functions
/*const btn = document.getElementById('btn');
const nav = document.getElementById('nav');


const toggleModal = () => {
  btn.addEventListener('click', () => {
    nav.classList.toggle('active')
    btn.classList.toggle('active')
  })
}

toggleModal();*/

// second solution using class
class HamburgerMenu {
  constructor() {
    this.btn = document.getElementById('btn')
    this.nav = document.getElementById('nav')
    this.toggle()
  }

  toggle() {
    btn.addEventListener('click', () => {
      this.nav.classList.toggle('active')
      this.btn.classList.toggle('active')
    })
  }
}

new HamburgerMenu();