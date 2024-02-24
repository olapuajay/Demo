var a = document.getElementById("tn");
var b = a.getElementsByTagName("img");
var c = document.getElementById("main");
for(let i = 0; i < b.length; i++) {
    let d = b[i];
    d.addEventListener("click", function(){
        c.src = this.src;
    })
}