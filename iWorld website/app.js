const phones=[
["iPhone X",6500],["iPhone XS",7500],["iPhone 11",9500],
["iPhone 12",11500],["iPhone 13",13500],["iPhone 14",15500],
["iPhone 15",17500],["iPhone 16",19500],["iPhone 17 Pro",22500]
];
const storage={"128GB":0,"256GB":1500,"512GB":3000};

let cart=[];
const el=document.getElementById("phones");
const cartEl=document.getElementById("cart");
const items=document.getElementById("items");
const totalEl=document.getElementById("total");

function render(list){
  el.innerHTML="";
  list.forEach(p=>{
    el.innerHTML+=`
      <div class="card">
        <img src="https://via.placeholder.com/300x400?text=${p[0]}">
        <h3>${p[0]}</h3>
        <select id="s-${p[0]}">
          <option>128GB</option><option>256GB</option><option>512GB</option>
        </select>
        <button onclick="add('${p[0]}',${p[1]})">Add to Cart</button>
      </div>`;
  });
}
render(phones);

search.oninput=()=>render(phones.filter(p=>p[0].toLowerCase().includes(search.value.toLowerCase())));

function add(name,base){
  const s=document.getElementById(`s-${name}`).value;
  const price=base+storage[s];
  cart.push({name,s,price});
  updateCart();
}

function updateCart(){
  cartEl.classList.remove("hidden");
  items.innerHTML="";
  let t=0;
  cart.forEach(i=>{t+=i.price; items.innerHTML+=`<p>${i.name} ${i.s} – R ${i.price}</p>`});
  totalEl.textContent="Total: R "+t;
}

function toggleDark(){document.body.classList.toggle("dark")}

function pay(){
  if(cart.length===0) return alert("Cart empty!");
  alert("Payment preview only — real payments not enabled on GitHub Pages");
  cart=[];
  updateCart();
}

