const cars=[
{id:1,name:"Ferrari SF90 Stradale",cat:"ferrari",price:14500000000,old:16500000000,img:"https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=900&q=85",sale:12},
{id:2,name:"Lamborghini Aventador SVJ",cat:"lamborghini",price:16500000000,old:18000000000,img:"https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=900&q=85",sale:8},
{id:3,name:"Bugatti Chiron Sport",cat:"bugatti",price:72000000000,old:80000000000,img:"https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=900&q=85",sale:10},
{id:4,name:"McLaren 720S Spider",cat:"mclaren",price:12750000000,old:15000000000,img:"https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=900&q=85",sale:15},
{id:5,name:"Porsche 911 GT3 RS",cat:"porsche",price:8900000000,old:9500000000,img:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=85",sale:7},
{id:6,name:"Rolls-Royce Cullinan",cat:"rolls",price:18500000000,old:19500000000,img:"https://images.unsplash.com/photo-1631295868223-63265b40d9e4?auto=format&fit=crop&w=900&q=85",sale:5},
{id:7,name:"Ferrari 812 Superfast",cat:"ferrari",price:13500000000,old:14200000000,img:"https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=900&q=85",sale:6},
{id:8,name:"Lamborghini Huracán EVO",cat:"lamborghini",price:9800000000,old:10500000000,img:"https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=900&q=85",sale:9}
];
let cart=JSON.parse(localStorage.getItem("luxecar_cart")||"[]"), wishes=new Set(JSON.parse(localStorage.getItem("luxecar_wishes")||"[]"));
const money=n=>n.toLocaleString("vi-VN")+"₫";
function card(c){return `<article class="card"><span class="tag">-${c.sale}%</span><button class="heart" onclick="toggleWish(${c.id})">${wishes.has(c.id)?"♥":"♡"}</button><div class="pic" style="background-image:url('${c.img}')"></div><div class="card-body"><h3>${c.name}</h3><span class="old">${money(c.old)}</span><span class="price">${money(c.price)}</span><button class="add" onclick="addCart(${c.id})">🛒 THÊM VÀO GIỎ</button></div></article>`}
function render(list=cars){document.getElementById("carGrid").innerHTML=list.map(card).join("");document.getElementById("resultCount").textContent=list.length+" mẫu xe"}
function renderSale(){document.getElementById("saleGrid").innerHTML=cars.slice(0,4).map(card).join("")}
function save(){localStorage.setItem("luxecar_cart",JSON.stringify(cart));document.getElementById("cartCount").textContent=cart.reduce((a,x)=>a+x.qty,0);localStorage.setItem("luxecar_wishes",JSON.stringify([...wishes]))}
function addCart(id){let x=cart.find(x=>x.id===id);x?x.qty++:cart.push({id,qty:1});save();renderCart();toast("Đã thêm xe vào giỏ hàng")}
function changeQty(id,d){let x=cart.find(x=>x.id===id);if(!x)return;x.qty+=d;if(x.qty<1)cart=cart.filter(x=>x.id!==id);save();renderCart()}
function removeCart(id){cart=cart.filter(x=>x.id!==id);save();renderCart()}
function renderCart(){let el=document.getElementById("cartItems");document.getElementById("cartTitle").textContent=`(${cart.reduce((a,x)=>a+x.qty,0)})`;if(!cart.length){el.innerHTML='<p style="padding:25px;color:#777">Giỏ hàng đang trống.</p>'}else el.innerHTML=cart.map(x=>{let c=cars.find(c=>c.id===x.id);return `<div class="cart-row"><img src="${c.img}"><div><h4>${c.name}</h4><span class="price">${money(c.price)}</span><div class="qty"><button onclick="changeQty(${c.id},-1)">−</button><span>${x.qty}</span><button onclick="changeQty(${c.id},1)">+</button></div></div><button class="remove" onclick="removeCart(${c.id})">🗑</button></div>`}).join("");let total=cart.reduce((a,x)=>a+cars.find(c=>c.id===x.id).price*x.qty,0);document.getElementById("subtotal").textContent=money(total)}
function toggleWish(id){wishes.has(id)?wishes.delete(id):wishes.add(id);save();render();renderSale();toast(wishes.has(id)?"Đã thêm vào yêu thích":"Đã bỏ khỏi yêu thích")}
function toast(t){let e=document.getElementById("toast");e.textContent=t;e.classList.add("show");setTimeout(()=>e.classList.remove("show"),1800)}
document.querySelectorAll(".filter").forEach(b=>b.onclick=()=>{document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));b.classList.add("active");let cat=b.dataset.cat;let q=document.getElementById("search").value.toLowerCase();render(cars.filter(c=>(cat==="all"||c.cat===cat)&&c.name.toLowerCase().includes(q)))});
document.getElementById("search").oninput=e=>{let q=e.target.value.toLowerCase(),cat=document.querySelector(".filter.active").dataset.cat;render(cars.filter(c=>(cat==="all"||c.cat===cat)&&c.name.toLowerCase().includes(q)))};
document.getElementById("cartOpen").onclick=()=>document.getElementById("drawer").classList.add("open");
document.getElementById("cartClose").onclick=()=>document.getElementById("drawer").classList.remove("open");
document.getElementById("checkout").onclick=()=>cart.length?toast("Đây là bản demo — kết nối cổng thanh toán tại đây."):toast("Giỏ hàng đang trống");
document.getElementById("newsletter").onsubmit=e=>{e.preventDefault();document.getElementById("newsMsg").textContent="✓ Đăng ký thành công! Cảm ơn bạn đã tham gia LuxeCar Insider.";e.target.reset()};
let end=Date.now()+((2*24+15)*3600+47*60+33)*1000;
setInterval(()=>{let s=Math.max(0,end-Date.now())/1000,d=Math.floor(s/86400),h=Math.floor(s%86400/3600),m=Math.floor(s%3600/60),sec=Math.floor(s%60);document.getElementById("timer").textContent=[d,h,m,sec].map(x=>String(x).padStart(2,"0")).join(" : ")},1000);
render();renderSale();save();renderCart();