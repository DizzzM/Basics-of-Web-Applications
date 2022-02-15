function Swap(){
    let x = document.getElementById("x")
    let y = document.getElementById("y")
    let buffer = x.innerHTML
    x.innerHTML=y.innerHTML
    y.innerHTML=buffer
}