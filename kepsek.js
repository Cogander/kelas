function kepsekUI(user){

app.innerHTML=`

<div class="topbar">
<h2>Kepala Sekolah: ${user.name}</h2>
<button onclick="logout()">Logout</button>
</div>

<div class="card">
<h3>Aktivitas Guru</h3>
<div id="activity"></div>
</div>

`;

loadActivity();
}



function loadActivity(){

let tasks=DB.get("tasks");

activity.innerHTML="";

tasks.forEach(t=>{

activity.innerHTML+=`
<div class="card">
Guru membuat ${t.type}<br>
<b>${t.title}</b><br>
${t.time}
</div>
`;

});

}
