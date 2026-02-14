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
<h3>Daftar Tugas</h3>
<div id="list"></div>
</div>

<div class="card">
<h3>Data Siswa & Password</h3>
<div id="students"></div>
</div>

</div>
`;

loadTasks();
loadStudents();
}
