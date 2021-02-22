/*
const btn = document.getElementById('btn')
const container = document.getElementById('container')


btn.addEventListener('click', () => {
  createNotification();
})

function createNotification() {
  const notif = document.createElement('div');
  notif.classList.add('toast');

  notif.innerText = 'This challenge is crazy!';

  container.appendChild(notif)

  setTimeout(() => {
    notif.remove();
  }, 3000)
}
*/

class Notif {
  constructor() {
    this.btn = document.getElementById('btn')
    this.container = document.getElementById('container')
    this.showNotif()
  }

  showNotif() {
    this.btn.addEventListener('click', () => {
      this.createNotif()
    })
  }

  createNotif() {
    const notif = document.createElement('div');
    notif.classList.add('toast');

    notif.innerText = 'This challenge is crazy!';

    container.appendChild(notif)

    setTimeout(() => {
      notif.remove();
    }, 3000)
  }
}

new Notif()
