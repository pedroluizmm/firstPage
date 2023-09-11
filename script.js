function toggleMode() {
  //trocando o modo
  const html = document.documentElement
  /*if (html.classList.contains('light')) {
    html.classList.remove('light')
  } else {
    html.classList.add('light')
  } */
  html.classList.toggle('light')

  //imagem
  const img = document.querySelector('#profile img')

  if (html.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar-pedro-light.png')
  } else {
    img.setAttribute('src', './assets/avatar-pedro-dark.png')
  }
}
