let saveEl= document.getElementById("save-el")
let countEl= document.getElementById("count-el")
let count= 0

function increment(){
count++
countEl.textContent = count
}

function save(){
let sam = count + ","  
saveEl.textContent += sam
count = 0
countEl.textContent = count
}