let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  const form = document.querySelector("add-toy-form")

  form.addEventListener("submit", addNewToy)
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
  getToys()
});

function getToys() {
  fetch("http://localhost:3000/toys")
  .then(response => response.json())
}
const BASE_URL = "http://localhost:3000/toys"

fetch(BASE_URL)
.then(function(res) {
  return res.json()
})
.then((toyArray) => toyArray.forEach((toyObj) => renderToy(toyObj)))

function renderToy(toyObj) {
  const toyDiv = document.createElement('div')
  toyDiv.className = "card"

  const toyName = document.createElement('h2')
  toyName.innerText = toyObj.toyName

  const toyImg = document.createElement('img')
  toyImg.src = toyObj.image
  toyImg.className = "toy-avatar"

  const toyLikes = document.createElement('p')
  toyLikes.innerText = "Like: " + toyObj.toyLikes

  const Likebtn = document.createElement('button')
  Likebtn.innerText = ''
  Likebtn.addEventListener('click', () => {

    ++toyObj.likes

    toyLikes.innerText = `Like: ${toyObj, likes}`

  })

  toyDiv.append(toyName, toyImg, toyLikes, likeBtn)
  const toyCollection = document.getElementById('toy-collection')
  toyCollection.appendChild(toyDiv)
}

const form = document.querySelector('add-toy-form')

form.addEventListener('submit', submitHandler)

function submitHandler(event) {
  event.preventDefault()
  console.log("submitHandler")

  const newToy = {
    name: event.target.name.value,
    likes: 0,
    image: event.target.image.value
  }

  window.scrollTo(0,document.body.scrollHeight)
  renderToy(newToy)
  event.target.reset()
}


