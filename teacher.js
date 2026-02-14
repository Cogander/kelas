/* ===============================
   DASHBOARD GURU
=============================== */

function teacherUI(user){

let app=document.getElementById("app");

app.innerHTML = `

<div class="topbar">
    <h2>👨‍🏫 Guru: ${user.name}</h2>
    <button onclick="logout()">Logout</button>
</div>

<div class="container">

    <!-- BUAT TUGAS -->
    <div class="card">

        <h3>📘 Buat Tugas / Ulangan</h3>

        <input id="title" placeholder="Judul">

        <select id="type">
            <option value="Tugas">Tugas</option>
            <option value="Ulangan">Ulangan</option>
        </select>

        <button onclick="createTask()">Buat</button>

    </div>


    <!-- DAFTAR TUGAS -->
    <div class="card">
        <h3>📋 Daftar Tugas</h3>
        <div id="taskList"></div>
    </div>


    <!-- DATA SISWA -->
    <div class="card">
        <h3>👨‍🎓 Data Siswa & Password</h3>
        <div id="studentList"></div>
    </div>

</div>

`;

loadTasks();
loadStudents();

}



/* ===============================
   BUAT TUGAS
=============================== */

function createTask(){

let title = document.getElementById("title").value;
let type = document.getElementById("type").value;

if(!title){
alert("Judul kosong");
return;
}

let tasks = DB.get("tasks");

tasks.push({
id: uid(),
title: title,
type: type,
time: new Date().toLocaleString()
});

DB.set("tasks", tasks);

document.getElementById("title").value="";

loadTasks();

}



/* ===============================
   LOAD TUGAS
=============================== */

function loadTasks(){

let tasks = DB.get("tasks");
let div = document.getElementById("taskList");

if(!div) return;

div.innerHTML = "";

if(tasks.length===0){
div.innerHTML = "Belum ada tugas";
return;
}

tasks.forEach(task => {

div.innerHTML += `

<div class="card">

<b>${task.title}</b><br>
Jenis: ${task.type}<br>
Waktu: ${task.time}<br><br>

<button onclick="viewAnswers('${task.id}')">
Lihat Jawaban
</button>

<button onclick="deleteTask('${task.id}')"
style="background:#ef4444;">
Hapus
</button>

</div>

`;

});

}



/* ===============================
   HAPUS TUGAS
=============================== */

function deleteTask(id){

let tasks = DB.get("tasks");

tasks = tasks.filter(t => t.id !== id);

DB.set("tasks", tasks);

loadTasks();

}



/* ===============================
   LIHAT JAWABAN SISWA
=============================== */

function viewAnswers(taskId){

let answers = DB.get("answers");

let filtered = answers.filter(a => a.taskId === taskId);

let html = "<h3>Jawaban Siswa</h3>";

if(filtered.length===0){
html += "Belum ada jawaban";
}else{

filtered.forEach(a => {

html += `
<div class="card">
<b>${a.name}</b><br>
${a.ans}
</div>
`;

});

}

alertBox(html);

}



/* ===============================
   DATA SISWA
=============================== */

function loadStudents(){

let students = DB.get("students");
let div = document.getElementById("studentList");

if(!div) return;

div.innerHTML = "";

if(students.length===0){
div.innerHTML = "Belum ada siswa login";
return;
}

students.forEach(s => {

div.innerHTML += `

<div class="card">

Nama: <b>${s.name}</b><br>
Password: ${s.password}

</div>

`;

});

}



/* ===============================
   POPUP BOX
=============================== */

function alertBox(content){

let box = document.createElement("div");

box.style.position="fixed";
box.style.top="0";
box.style.left="0";
box.style.width="100%";
box.style.height="100%";
box.style.background="rgba(0,0,0,0.7)";
box.style.display="flex";
box.style.justifyContent="center";
box.style.alignItems="center";

box.innerHTML = `

<div style="
background:#1e293b;
padding:20px;
border-radius:12px;
max-width:400px;
color:white;
">

${content}

<br><br>

<button onclick="this.parentElement.parentElement.remove()">
Tutup
</button>

</div>

`;

document.body.appendChild(box);

}
