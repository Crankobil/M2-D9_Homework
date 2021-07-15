let songTrack1 = document.getElementById("track1")
let songTrack2 = document.getElementById("track2")
let songTrack3 = document.getElementById("track3")
let songTrack4 = document.getElementById("track4")

let deleteBtn1 = document.getElementById("btn-1")
let deleteBtn2 = document.getElementById("btn-2")
let deleteBtn3 = document.getElementById("btn-3")
let deleteBtn4 = document.getElementById("btn-4")

const removeTrack1 =() => {
    songTrack1.remove()
}

const removeTrack2 =() => {
    songTrack2.remove()
}

const removeTrack3 =() => {
    songTrack3.remove()
}

const removeTrack4 =() => {
    songTrack4.remove()
}

deleteBtn1.addEventListener("click", removeTrack1)
deleteBtn2.addEventListener("click", removeTrack2)
deleteBtn3.addEventListener("click", removeTrack3)
deleteBtn4.addEventListener("click", removeTrack4)