const myDivWish = document.getElementById("wishProducts")

function getProductsWish() {
    myDivWish.innerHTML = ``
    let wish = JSON.parse(localStorage.getItem("wish")) || []
    wish.map((item, index) => {
        let box = document.createElement("div")
        box.className = "box"
        box.innerHTML = `
                <img src="${item.image}" alt="">
                <p>${item.title}</p>
                <button onclick="removeItem(${index})">Remove from Wish</button>`
                myDivWish.append(box)
                console.log(getProductsWish);
       
    })

}
function removeItem(index) {
    let wish = JSON.parse(localStorage.getItem("wish"))
    wish.splice(index, 1)
    localStorage.setItem("wish", JSON.stringify(wish))
    getProductsWish()

}
 
window.onload = () => {
    getProductsWish()
}


