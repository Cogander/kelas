function teacherUI(user){

let app=document.getElementById("app");

app.innerHTML=`

<div class="topbar">
<h2>👨‍🏫 Guru: ${user.name}</h2>
<button onclick="logout()">Logout</button>
</div>

<div class="container">

<div class="card">

<h3>Buat Tugas</h3>

<input id="title" placeholder="Judul">

<select id="type">
<option value="Tugas">Tugas</option>
<option value="Ulangan">Ulangan</option>
</select>

<button onclick="createTask()">Buat</button>

</div>

<div class="card">
<h3>Daftar Tugas</h3>
<div id="taskList"></div>
</div>

<div class="card">
<h3>Data Siswa</h3>
<div id="studentList"></div>
</div>

</div>

`;

loadTasks();
loadStudents();
}



function createTask(){

let title=document.getElementById("title").value;
let type=document.getElementById("type").value;

if(!title) return alert("Isi judul");

let tasks=DB.get("tasks");

tasks.push({
id:uid(),
title,
type,
time:new Date().toLocaleString()
});

DB.set("tasks",tasks);

loadTasks();
}



function loadTasks(){

let tasks=DB.get("tasks");
let div=document.getElementById("taskList");

div.innerHTML="";

tasks.forEach(t=>{

div.innerHTML+=`
<div class="card">
<b>${t.title}</b><br>
${t.type}<br>
${t.time}
</div>
`;

});
}



function loadStudents(){

let students=DB.get("students");
let div=document.getElementById("studentList");

div.innerHTML="";

students.forEach(s=>{

div.innerHTML+=`
<div class="card">
${s.name}<br>
Password: ${s.password}
</div>
`;

});
}
