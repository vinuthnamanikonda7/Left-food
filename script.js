et role = 'donor'; let otp = '1234';

function selectRole(btn, r){ role = r; document.querySelectorAll('.roles button').forEach(b=>b.classList.remove('active')); btn.classList.add('active'); }

function sendOTP(){ document.getElementById('otpBox').style.display='flex'; }

function verifyOTP(){ document.getElementById('otpBox').style.display='none'; document.getElementById('loginPage').style.display='none'; document.getElementById('app').style.display='block';

let name = document.getElementById('name').value; document.getElementById('user').innerText = name + ' : ' + role.toUpperCase(); document.getElementById('welcome').innerText = 'Welcome, ' + name;

document.getElementById('donorView').style.display = role==='donor'?'block':'none'; document.getElementById('receiverView').style.display = role==='receiver'?'flex':'none'; document.getElementById('deliveryView').style.display = role==='delivery'?'flex':'none'; }

function logout(){location.reload();}

function showPage(id){ document.querySelectorAll('.page').forEach(p=>p.classList.remove('active')); document.getElementById(id).classList.add('active'); }

function openModal(){document.getElementById('modal').style.display='flex';}

function addFood(){ let title = document.getElementById('food').value; let qty = document.getElementById('qty').value; let card = <div class='card'><h4>${title}</h4><p>${qty}</p></div>; document.getElementById('donorList').innerHTML += card; document.getElementById('modal').style.display='none';

document.getElementById('receiverView').innerHTML += <div class='card'><h4>${title}</h4><button>Claim</button></div>; document.getElementById('deliveryView').innerHTML += <div class='card'><h4>${title}</h4><button>Deliver</button></div>; }
