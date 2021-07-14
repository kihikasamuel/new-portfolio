
window.addEventListener('load', autoLoad);

function autoLoad(event) {
    
}

let $switch = document.querySelector('.bi-moon');
$switch.addEventListener('click', (event)=>{
    event.preventDefault();

    let body = document.querySelector("body");
    body.style.backgroundColor = "#FFFFFF";

    body.style.opacity = "1";
    for(let prop of document.querySelectorAll("p")) {
        prop.style.color = "#000000";
    }
    
    document.querySelector(".bi-moon").style.color = "#000000";
});