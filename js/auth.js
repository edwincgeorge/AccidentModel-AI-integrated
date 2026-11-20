// PROTOTYPE AUTH. Replace with POST /api/auth/login that sets an HttpOnly session cookie.
const $=i=>document.getElementById(i);
$("sh").onclick=()=>{const s=$("p").type==="password";$("p").type=s?"text":"password";$("sh").textContent=s?"Hide":"Show"};
$("go").onclick=()=>{["eu","ep","eg"].forEach(i=>$(i).textContent="");let ok=true;const u=$("u").value.trim(),p=$("p").value;
if(u.length<3){$("eu").textContent="Enter at least 3 characters.";ok=false}
if(p.length<8){$("ep").textContent="Password must be at least 8 characters.";ok=false}
if(!ok)return;$("go").disabled=true;$("go").textContent="Signing in…";
setTimeout(()=>{sessionStorage.setItem("demoAdmin",u);location.href="admin-dashboard.html"},700)};
