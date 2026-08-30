(function(){
 const KEY='luxecar_session_v1', USERS='luxecar_users_v1', ORD='luxecar_orders_v1';
 const cfg=window.LUXECAR_CONFIG||{};
 function users(){return JSON.parse(localStorage.getItem(USERS)||'[]')}
 function saveUsers(x){localStorage.setItem(USERS,JSON.stringify(x))}
 function session(){try{return JSON.parse(localStorage.getItem(KEY)||'null')}catch{return null}}
 function setSession(x){localStorage.setItem(KEY,JSON.stringify(x)); updateNav()}
 function esc(s){return String(s||'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}
 function go(p){location.href=new URL(p,location.href).href}
 function updateNav(){
   const s=session(), host=document.querySelector('.navright'); if(!host)return;
   let old=document.getElementById('accountNav'); if(old)old.remove();
   const a=document.createElement('button');a.id='accountNav';a.className='accountNav';
   a.textContent=s?`◉ ${s.name||s.email.split('@')[0]}`:'ĐĂNG NHẬP';
   a.onclick=()=>go(s?'./account.html':'./auth.html');host.prepend(a);
 }
 function register(e){e.preventDefault();const name=regName.value.trim(),email=regEmail.value.trim().toLowerCase(),pass=regPass.value;
   if(pass.length<8)return msg('Mật khẩu cần ít nhất 8 ký tự.','err');
   let us=users();if(us.some(x=>x.email===email))return msg('Email đã tồn tại. Hãy đăng nhập.','err');
   us.push({id:crypto.randomUUID(),name,email,pass,role:'customer',createdAt:new Date().toISOString()});saveUsers(us);setSession({id:us.at(-1).id,name,email,role:'customer'});msg('Tạo tài khoản thành công.','ok');setTimeout(()=>go('./account.html'),500)
 }
 function login(e){e.preventDefault();const email=loginEmail.value.trim().toLowerCase(),pass=loginPass.value;if(email==='admin@luxecar.local'&&pass==='LuxeCarAdmin2026!'){setSession({id:'demo-admin',name:'LuxeCar Administrator',email,role:'admin'});msg('Đăng nhập quản trị demo thành công.','ok');setTimeout(()=>go('./admin.html'),400);return}const u=users().find(x=>x.email===email&&x.pass===pass);
   if(!u)return msg('Thông tin đăng nhập không đúng.','err');setSession({id:u.id,name:u.name,email:u.email,role:u.role});msg('Đăng nhập thành công.','ok');setTimeout(()=>go('./account.html'),400)
 }
 function msg(t,c){const x=document.getElementById('authMsg');if(x){x.textContent=t;x.className='authMsg '+c}}
 function logout(){localStorage.removeItem(KEY);go('./index.html')}
 function orders(){return JSON.parse(localStorage.getItem(ORD)||'[]')}
 window.LuxeAuth={session,logout,orders,saveOrder(o){const a=orders();a.push(o);localStorage.setItem(ORD,JSON.stringify(a));return o}, isDemo:()=>cfg.DEMO_MODE!==false}
 document.addEventListener('DOMContentLoaded',()=>{
   updateNav();
   if(document.getElementById('registerForm'))registerForm.addEventListener('submit',register);
   if(document.getElementById('loginForm'))loginForm.addEventListener('submit',login);
   const out=document.querySelector('[data-logout]');if(out)out.onclick=logout;
   const s=session();
   if(document.body.dataset.requireAuth==='true'&&!s)go('./auth.html');
   if(document.body.dataset.admin==='true'&&(!s||s.role!=='admin'))go('./auth.html');
   if(document.getElementById('accountName')&&s){accountName.textContent=s.name;accountEmail.textContent=s.email;accountRole.textContent=s.role==='admin'?'ADMINISTRATOR':'CLIENT';}
   if(document.getElementById('accountOrders')&&s){accountOrders.innerHTML=orders().filter(o=>o.email===s.email).map(o=>`<div class="orderCard"><b>${esc(o.carName||'Yêu cầu mua xe')}</b><span>${esc(o.status||'Đã tiếp nhận')}</span><small>${new Date(o.createdAt).toLocaleString('vi-VN')}</small></div>`).join('')||'<p class="muted">Chưa có đơn hàng.</p>'}
 });
})();
