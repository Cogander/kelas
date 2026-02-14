function uid(){
return Date.now().toString(36);
}

function logout(){
localStorage.removeItem("user");
location.href="index.html";
}
