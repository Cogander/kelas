function studentUI(user){

app.innerHTML=`

<div class="topbar">
<h2>Siswa: ${user.name}</h2>
<button onclick="logout()">Logout</button>
</div>

<div class="card">
<h3>Tugas Tersedia</h3>
<div id="tasks"></div>
</div>

`;

loadStudentTasks(user);

}



function loadStudentTasks(user){

let tasks=DB.get("tasks");

tasksDiv.innerHTML="";

tasks.forEach(t=>{

tasks.innerHTML+=`
<div class="card">
<b>${t.title}</b><br>
${t.type}<br>

<textarea id="ans${t.id}" placeholder="Jawaban"></textarea>
<button onclick="submit('${t.id}','${user.name}')">
Kirim
</button>

</div>
`;

});

}



function submit(taskId,name){

let ans=document.getElementById("ans"+taskId).value;

DB.add("answers",{
taskId,
name,
ans
});

alert("Terkirim");

}
