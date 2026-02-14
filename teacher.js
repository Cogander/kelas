function teacherUI(user){

app.innerHTML=`

<div class="topbar">
<h2>Guru: ${user.name}</h2>
<button onclick="logout()">Logout</button>
</div>

<div class="card">

<h3>Buat Tugas / Ulangan</h3>

<input id="title" placeholder="Judul">
<select id="type">
<option value="tugas">Tugas</option>
<option value="ulangan">Ulangan</option>
</select>

<button onclick="createTask()">Buat</button>

</div>

<div class="card">
<h3>Daftar</h3>
<div id="list"></div>
</div>

`;

loadTasks();
}


function createTask(){

let data={
id:uid(),
title:title.value,
type:type.value,
time:new Date().toLocaleString()
};

DB.add("tasks",data);

loadTasks();
}



function loadTasks(){

let tasks=DB.get("tasks");

list.innerHTML="";

tasks.forEach(t=>{

list.innerHTML+=`
<div class="card">
<b>${t.title}</b><br>
Jenis: ${t.type}<br>
${t.time}
</div>
`;

});
}
