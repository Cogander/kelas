function uid(){
return Date.now().toString(36);
}

function login(){

let role=document.getElementById("role").value;
let name=document.getElementById("name").value;
let pass=document.getElementById("password").value;
let info=document.getElementById("info");

if(role==="guru" && pass!=="SmpXaverius1GuruHebat"){
info.innerText="Password Guru Salah";
return;
}

if(role==="kepsek" && pass!=="SmpXaverius1KepalaHebat"){
info.innerText="Password Kepsek Salah";
return;
}

let user={
id:uid(),
name,
role
};

localStorage.setItem("user",JSON.stringify(user));

window.location.href="dashboard.html";
}



function loadDashboard(){

let user=JSON.parse(localStorage.getItem("user"));

if(!user){
window.location.href="index.html";
return;
}

if(user.role==="guru") teacherUI(user);
if(user.role==="siswa") studentUI(user);
if(user.role==="kepsek") kepsekUI(user);

}

if(document.getElementById("app")){
loadDashboard();
}
