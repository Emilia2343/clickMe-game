let clicks = document.getElementById("clicks");
let button = document.getElementById("click-me");


// function myFunction() {
//     clicks += 1;
//     document.getElementById("clicks").innerHTML = clicks;
// }


button.addEventListener("click", function myFunction(){
    clicks++;
    document.getElementById("clicks").innerHTML = clicks;
    if(clicks === 30){
        alert("Congratulations!!! You now wasted 30 seconds of your life, you stupid :D")
        return clicks = 0;
    }
})

