
const s = localStorage.getItem("selectedColors");
const selected = s.split(",")

function sidenav(selected){

    let sidenav = document.getElementById("sidenav");
    sidenav.style.width = "250px";
    document.getElementById("content").style.marginRight = "250px";
    for(let i=0;i<selected.length;i++){
        var item = document.createElement("div");
        item.classList.add("item_display");
        item.dataset.color = selected[i];
        item.innerHTML= selected[i];
        sidenav.appendChild(item); 
    }
};

sidenav(selected);


