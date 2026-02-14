function uid(){
return Date.now().toString(36);
}

function login(){

let role=document.getElementById("role").value;
let name=document.getElementById("name").value;
let pass=document.getElementById("password").value;
let info=document.getElementById("info");

if(!name){
info.innerText="Isi nama dulu";
return;
}


/* ================= GURU ================= */

if(role==="guru"){

if(pass!=="SmpXaverius1GuruHebat"){
info.innerText="Password Guru Salah";
return;
}

saveUser(role,name);
return;
}


/* ================= KEPSEK ================= */

if(role==="kepsek"){

if(pass!=="SmpXaverius1KepalaHebat"){
info.innerText="Password Salah";
return;
}

saveUser(role,name);
return;
}


/* ================= SISWA ================= */

let students=DB.get("students");

let existing=students.find(s=>s.name===name);


if(existing){

// login normal
if(existing.password!==pass){
info.innerText="Password salah";
return;
}

saveUser(role,name);
return;

}else{

// siswa baru → buat password
if(!pass){
info.innerText="Buat password dulu";
return;
}

students.push({
name:name,
password:pass
});

DB.set("students",students);

saveUser(role,name);
return;

}


}



function saveUser(role,name){

let user={
id:uid(),
name,
role
};

localStorage.setItem("user",JSON.stringify(user));

location.href="dashboard.html";
}



function loadDashboard(){

let user=JSON.parse(localStorage.getItem("user"));

if(!user){
location.href="index.html";
return;
}

if(user.role==="guru") teacherUI(user);
if(user.role==="siswa") studentUI(user);
if(user.role==="kepsek") kepsekUI(user);

}

if(document.getElementById("app")){
loadDashboard();
}
