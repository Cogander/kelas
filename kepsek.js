function kepsekUI(user){

let app=document.getElementById("app");

app.innerHTML=`

<div class="topbar">
<h2>👑 Kepala Sekolah: ${user.name}</h2>
<button onclick="logout()">Logout</button>
</div>

<div class="container">

<div class="card">
<h3>Aktivitas Guru</h3>
<div id="activity"></div>
</div>

</div>
`;

loadActivity();
}



function loadActivity(){

let tasks=DB.get("tasks");
let div=document.getElementById("activity");

div.innerHTML="";

tasks.forEach(t=>{

div.innerHTML+=`
<div class="card">
Guru membuat ${t.type}<br>
<b>${t.title}</b><br>
${t.time}
</div>
`;

});
}
