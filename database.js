const DB = {

get(key){
return JSON.parse(localStorage.getItem(key)) || [];
},

set(key,value){
localStorage.setItem(key,JSON.stringify(value));
},

add(key,data){
let arr=this.get(key);
arr.push(data);
this.set(key,arr);
},

}
