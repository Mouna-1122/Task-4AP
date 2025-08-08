function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}
showPage('about');

// TO-DO LIST
function addTask() {
  const input = document.getElementById('taskInput');
  const t = input.value.trim();
  if (!t) return;

  const li = document.createElement('li');
  li.innerHTML = `
    <span>${t}</span>
    <div>
      <input type="checkbox" onchange="toggleTask(this)" />
      <button onclick="this.closest('li').remove()" title="Remove Task">❌</button>
    </div>`;
  document.getElementById('taskList').appendChild(li);
  input.value = '';
}

function toggleTask(checkbox) {
  const li = checkbox.closest('li');
  li.classList.toggle('completed');
}

// PRODUCT LISTING
const products = [
  { name: "Marshall Acton III Bluetooth Speaker", price: 19999, category: "tech", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTD9DfQGFk8NJZ6s5LbPSOFhbqSX2IpCb7Rm4RzFtSRnv0nHupAv5vqDcjBVYU2GsGGW_9W7NnoS07Y4fQdgihrXyPOgyKMyNupY8rebQ3jvPl5o-rp7WDF" },
  { name: "Notebook Set", price: 499, category: "stationery", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRFxyE-RoUftl4W5Fap4MBZ7vcSQyEMSA-BPd8vQTb12MfwlKelTf1W_fkkV7gyjjE7cwv1sHhif-GgBhRK6DwJvmReMFLRokBxor9smfKdTI8JGGL6WRCL" },
  { name: "Wireless Mouse", price: 799, category: "tech", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSwNOHiOCPnLUYkB02itb-sNvUUZ-VNrCoQllWuymJHGnDbzak4QnlfaGsRacYsaNr7CyYoOMrb_luf0gFdeCoXZhP-IgEJowN2UcHugGztSzogIz-05wgbfCM" },
  { name: "Water Bottle", price: 599, category: "accessories", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQQmFwxlnjqVMRslOYFvS8lW427QzHgvIqouedeZe5Ca6sb7dGtoGMedj3Fx5ysbhjvU4OaZYNwdIoCeFIYq40m0UFHGXfgngyQrPGKQcIOJ6rmm1wiTHc7n6s" }
];

let currentProducts = [...products];

function displayProducts() {
  const container = document.getElementById('productList');
  container.innerHTML = '';
  currentProducts.forEach(p => {
    container.innerHTML += `
      <div class="product-card">
        <img src="${p.image}" alt="${p.name}" />
        <h4>${p.name}</h4>
        <p>₹${p.price}</p>
      </div>`;
  });
}

function sortProducts() {
  const sortValue = document.getElementById("sortSelect").value;
  if (sortValue === "name") {
    currentProducts.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortValue === "price") {
    currentProducts.sort((a, b) => a.price - b.price);
  } else {
    currentProducts = [...products];
  }
  displayProducts();
}

function filterProducts() {
  const cat = document.getElementById("categorySelect").value;
  if (cat === "all") {
    currentProducts = [...products];
  } else {
    currentProducts = products.filter(p => p.category === cat);
  }
  sortProducts();
}

displayProducts();

// CONTACT FORM
function handleSubmit(e) {
  e.preventDefault();
  const message = document.getElementById("formMessage");
  message.textContent = "Thank you for your message!";
  setTimeout(() => {
    message.textContent = "";
  }, 4000);
  e.target.reset();
}