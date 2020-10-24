
const s = localStorage.getItem("selectedColors");
const selected = s.split(",");


function sidenav(selected,el){
    let copyItem;
    let sidenav = document.getElementById("sidenav");
    sidenav.style.width = "250px";
    document.getElementById("body").style.marginRight = "250px";
    for(let i=0;i<selected.length;i++){
        var item = document.createElement("div");
        item.classList.add("item_display");
        item.dataset.color = selected[i];
        item.innerHTML= selected[i];
        item.style.background = selected[i];
        sidenav.appendChild(item); 
    }

    sidenav.addEventListener('click', e=>{

        if(navigator.clipboard){
            copyItem = e.target.dataset.color;
            navigator.clipboard.writeText(copyItem);

        }
    });

    let content = document.querySelector(el);
    content.addEventListener('click',e=>{
        e.target.style.background = copyItem
    });

};

sidenav(selected,"#body");


