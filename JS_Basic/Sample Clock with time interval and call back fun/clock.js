setInterval(myFun,1000);

function myFun() {
    let d = new Date();
    document.getElementById("clock").style.color="orange";
    document.getElementById("clock").innerHTML=
    d.getHours() + ":" +
    d.getMinutes() + ":" +
    d.getSeconds() ;
}