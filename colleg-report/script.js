
function openPage(){

window.location.href="ministries.html"

}

function go(name){

localStorage.setItem("ministry",name)

window.location.href="ministry.html"

}

if(document.getElementById("title")){

let name = localStorage.getItem("ministry")

document.getElementById("title").innerText="Отчеты: "+name

loadReports()

}

function addReport(){

let img = prompt("Вставь ссылку на фото")

let text = prompt("Описание отчета")

let name = localStorage.getItem("ministry")

let reports = JSON.parse(localStorage.getItem(name) || "[]")

reports.push({img,text})

localStorage.setItem(name,JSON.stringify(reports))

loadReports()

}

function loadReports(){

let name = localStorage.getItem("ministry")

let reports = JSON.parse(localStorage.getItem(name) || "[]")

let div = document.getElementById("reports")

div.innerHTML=""

reports.forEach(r=>{

let d=document.createElement("div")

d.className="report"

d.innerHTML=`<img src="${r.img}"><p>${r.text}</p>`

div.appendChild(d)

})

}
