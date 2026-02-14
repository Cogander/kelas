function teacherUI(user){

let app=document.getElementById("app");

app.innerHTML=`

<div class="topbar">
<h2>👨‍🏫 Guru: ${user.name}</h2>
<button onclick="logout()">Logout</button>
</div>

<div class="container">

<div class="card">

<h3>Buat Tugas / Ulangan</h3>

<input id="title" placeholder="Judul">

<select id="type">
<option value="Tugas">Tugas</option>
<option value="Ulangan">Ulangan</option>
</select>

<button onclick="createTask()">Buat</button>

</div>

<div class="card">
<h3>Daftar</h3>
<div id="list"></div>
</div>

</div>
`;

loadTasks();
}


function createTask(){

let data={
id:uid(),
title:document.getElementById("title").value,
type:document.getElementById("type").value,
time:new Date().toLocaleString()
};

DB.add("tasks",data);

loadTasks();
}



function loadTasks(){

let tasks=DB.get("tasks");
let list=document.getElementById("list");

list.innerHTML="";

tasks.forEach(t=>{

list.innerHTML+=`
<div class="card">
<b>${t.title}</b><br>
${t.type}<br>
${t.time}
</div>
`;

});
}
