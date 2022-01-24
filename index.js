let arr = []
var modal = document.getElementById("redmor");
let Notes = document.getElementById("notes")
let Tasks = document.getElementById("tasks")
let Pio =document.getElementById("popup1")
let Conte = document.getElementById("conte")
const Box =document.getElementById("boxx")
const Notess = localStorage.getItem("one")

if (Notess) {
    arr = JSON.parse(Notess)
    display(arr)
}
let obj = new Object();
function addnotes() {
    // obj.key=Notes.value
    arr[arr.length] = { note: Notes.value }
    localStorage.setItem("one", JSON.stringify(arr))
    console.log(arr)
    Notes.value = ""
    display(arr)
}
function clearr(d) {
    arr.splice(d, 1)
    localStorage.setItem("one", JSON.stringify(arr))
    display(arr)
}
function display(r) {

    let a = ""
    for (let i = 0; i < r.length; i++) {

        a += `<div class='visi'>
        <button id="clearr" class="closee" onclick="clearr(' ${i}  ')">x </button>
        Note ${i + 1}:- ${r[i].note.slice(0,120)}...
        <button id="redmor" id="newid" onclick="callmodel('${r[i].note}')"> Readmore </button></div>
`
    }
    Tasks.innerHTML = a
}

// try
let c =""
function newid(f) {
    alert(f);
    c=arr[f]
    // console.log(c)
    // Conte.innerHTML=c
    nav(c)

}

function  nav(z) {
    alert("hi");
    Pio.display.modal=block;
    var abc=` `
        console.log(z+abc)
    Box.innerHTML=abc
     
    
}
//Get the modal
var modal = document.getElementById("myModal");



// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

function callmodel(val)
{
    document.getElementById("info").innerText=val;
    modal.style.display = "block";
}



// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}