const itemBtn = document.getElementsByClassName("item-button")
const itemContainer = document.getElementById("item-container")
const removeItem = document.getElementsByClassName("remove-item")
let total = document.getElementById("total")

for (let i = 0; i < itemBtn.length; i++) {
  itemBtn[i].addEventListener("click", addItem, false)
}

function delItem(e) {
  let elem = e.parentNode.parentNode.textContent
  let subtotal = parseInt(total.textContent.replace(/[^\d.-]/g, '')) -
    parseInt(elem.replace(/[^\d.-]/g, ''))
  total.textContent = `$${subtotal}`
  e.parentNode.parentNode.remove()
}

function addItem() {
  const data = this.textContent
  const myArray = data.split(":")
  const item = document.createElement('p')
  item.className += "justified"
  const span1 = document.createElement('span')
  span1.innerHTML = myArray[0] + `<span class="small-font remove-item" onclick="delItem(this)"> remove</span>`
  const span2 = document.createElement('span')
  span2.textContent = myArray[1]
  item.append(span1, span2)
  itemContainer.append(item)
  if (total.textContent == "TOTAL") {
    let subtotal = parseInt(myArray[1].replace(/[^\d.-]/g, ''))
    total.textContent = `$${subtotal}`
  } else {
    let subtotal = parseInt(myArray[1].replace(/[^\d.-]/g, '')) +
      parseInt(total.textContent.replace(/[^\d.-]/g, ''))
    total.textContent = `$${subtotal}`
  }
}

