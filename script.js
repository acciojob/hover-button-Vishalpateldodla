//your code here
const btn = document.getElementById("btn");

btn.addEventListener("mouseover", function(){
    btn.style.backgroundColor = "yellow";
    btn.style.color = "black";
    btn.style.borderRadius = "30px";
});

btn.addEventListener("mouseout", function(){
    btn.style.backgroundColor = "black";
    btn.style.color = "white";
    btn.style.borderRadius = "5px";
});
