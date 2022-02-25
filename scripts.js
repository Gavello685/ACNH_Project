const app = document.getElementById('root')

const logo = document.createElement('img')
logo.src = 'logo.png'
logo.style.height = '100%'
logo.style.width = '100%'

const container = document.createElement('div')
container.setAttribute('class','container')

app.appendChild(logo)
app.appendChild(container)

var request = new XMLHttpRequest()

request.open('GET', 'https://acnhapi.com/v1a/villagers/', true)
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    data.forEach(villager => {
      const card = document.createElement('div')
      card.setAttribute('class','card')

      const h1 = document.createElement('h1')
      h1.textContent = villager.name['name-USen']

      const h3a = document.createElement('h3')
      h3a.textContent = "Birthday: " + villager['birthday-string']

      const h3b = document.createElement('h3')
      h3b.textContent = "Personality: " + villager.personality

      const img = document.createElement('img')
      img.setAttribute('class','img')
      img.src = villager.image_uri

      container.appendChild(card)
      card.appendChild(h1)
      card.appendChild(img)
      card.appendChild(h3a)
      card.appendChild(h3b)
    })
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = 'Whoops! Something went wrong on our end!'
    app.appendChild(errorMessage)
  }
}
request.send()
