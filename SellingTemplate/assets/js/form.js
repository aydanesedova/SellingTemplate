const myForm = document.getElementById("myForm");
const nameinp = document.getElementById("nameinp");
const titleinp = document.getElementById("titleinp");
const priceinp = document.getElementById("priceinp");
const logInBtn = document.getElementById("logInBtn");

myForm.addEventListener("submit", function (event) {
  event.preventDefault();
  axios
    .post("https://655c83b725b76d9884fd6e9b.mockapi.io/products", {
      name: nameinp.value,
      title: titleinp.value,
      price: priceinp.value,
     
    })
    .then((res) => {
        renderFormPro()
      console.log(res.data);
    });
});

const renderFormPro = () => {
  axios
    .get("https://655c83b725b76d9884fd6e9b.mockapi.io/products")
    .then((res) => {
      db = res.data;
      db.map((item) => {
        let formDiv = document.createElement("div");
        formDiv.className = "formDiv";
        formDiv.innerHTML = `
            <img src="${item.image}" alt="">
            <h2>${item.title}</h2>
            <div class="wishAdd">
                <button onclick = "addToCart(${item.id})">+ ADD TO CART</button>
            <button class="wish" onclick = "addToWish(${item.id})"><i class="fa-light fa-heart"></i></button>
</div>

            `;
        formProducts.append(formDiv);
      });
    });
};

const addToCart = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    cart.push(db.find(item => item.id == id))
    localStorage.setItem("cart", JSON.stringify(cart))
    console.log(cart);
}

window.onload = () => {
  renderFormPro();
};


logInBtn.addEventListener("click",renderFormPro)
