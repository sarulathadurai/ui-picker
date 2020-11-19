
 const red =    {
    "heading":"Fury Red", 
    c1:"#ff5252",
    c2:"#ff1744",
    c3:"#d50000",
    c4:"#ef5350",
    c5:"#f44336",
    c6:"#e53935",
    c7:"#d32f2f",
    c8:"#c62828",
    c9:"#b71c1c",
    c10:"#ff8a80",   
}

const yellow = {
    "heading":"Mellow Yellow",
    c1:"#ffca28",
    c2:"#ffc107",
    c3:"#ffb300",
    c4:  " #ffee58", 
    c5:  " #ffeb3b", 
    c6:  "#fbc02d ",
    c7:  "#f9a825 ",
    c10: "#ffff00 ",
    c11:  "#ffea00", 
    c12:  "#ffd600", 
}

const cyan = {
    "heading":"Cyan",
    c1:"#b2ebf2",
    c2:"#80deea", 
    c3:"#4dd0e1", 
    c4:"#26c6da", 
    c5:"#00bcd4", 
    c6:"#00acc1", 
    c7:"#0097a7", 
    c8:"#00838f", 
    c9:"#006064", 
    c10:"#84ffff", 
    c11:"#18ffff", 
    c12:"#00e5ff", 
    c13:"#00b8d4", 
}

const green = {
    "heading":"Glowing Green",
    c1:  "#81c784",
    c2:  "#66bb6a", 
    c3:  "#4caf50", 
    c4:  "#43a047", 
    c5:  "#388e3c", 
    c6:  "#2e7d32",
    c7:  "#1b5e20",
    c8: "#00e676",
    c9: "#00c853", 
   }

const pink = {
    "heading":"Quirky Pinky",
    c1:"#f06292",  
    c2:"#ec407a" ,
    c3 :"#e91e63",
    c4 :"#c2185b" , 
    c5 :"#ad1457",
    c6 :"#880e4f",
    c7 :"#ff80ab",
    c8 :"#ff4081",
    c9 :"#f50057",
    c10 :"#c51162"
} 

const grey = {
    "heading":"Grey bae",
    c1:"#cfd8dc", 
    c2:"#b0bec5", 
    c3:"#90a4ae", 
    c4:"#78909c" ,
    c5:"#607d8b" ,
    c6:"#455a64" ,
    c7:"#37474f" ,
    c8:"#263238" ,
    c9:"#757575",
    c10:"#616161",
}  

const blue = {
    "heading" : "Gloomy Purple",
        c1:"#9575cd", 
        c2:"#7e57c2", 
        c3:"#673ab7", 
        c4:"#5e35b1", 
        c5:"#512da8", 
        c6:"#4527a0", 
        c7:"#311b92", 
        c8:"#b388ff", 
        c9:"#7c4dff", 
        c10:"#651fff", 
}
//pallete colors in array
const uiColors = [red ,yellow,blue,green,cyan,pink,grey];

//selected colors
var selectedColors = [];

function ColorPallete(el,uiColors,selectedColors){

    this.uiColors = uiColors
    this.el = document.querySelector(el);
    this.color = selectedColors;
    this.displaySidebar=0;
    this.createColor();    
    this.bindEvents();
   
}   

ColorPallete.prototype.createColor = function(){

    for(let i=0 ;i<this.uiColors.length;i++ ){

        var colorSection = document.createElement('div');
        colorSection.classList.add("colorSection")
        let list = this.uiColors[i]

        for(const color in list ){       
            
            //header
            if(color === "heading"){
                var h4 = document.createElement("H4");
                h4.innerHTML = list[color];
                this.el.appendChild(h4);
            }

            else{

             //colordiv
            var box = document.createElement('div');
            //innerdiv
            var innerdiv =  document.createElement('div');
            //copy icon
            var copyIcon = document.createElement("i");
            copyIcon.classList.add("material-icons");
            copyIcon.innerHTML="content_copy";
            copyIcon.dataset.clipboard=list[color];


            //add icon
            var addIcon = document.createElement("i");
            addIcon.classList.add("material-icons");
            addIcon.innerHTML="add";
            addIcon.dataset.add=list[color];
            
            
            //append icon to innerdiv
            innerdiv.appendChild(copyIcon);
            innerdiv.appendChild(addIcon);

        
            box.classList.add("box");
            box.innerHTML = list[color];
            box.dataset.colordiv = list[color];
            box.style.backgroundColor = list[color];
            box.appendChild(innerdiv);
            colorSection.appendChild(box);

            }

        }
        this.el.appendChild(colorSection);
    }
}

ColorPallete.prototype.bindEvents = function(){

    this.el.addEventListener('click',e => {
        e.target.innerHTML === 'add' && this.pushColor(e.target.dataset.add);
        e.target.innerHTML === 'remove' && this.removeColor(e.target.dataset.add);

        if(e.target.dataset.add){
            e.target.innerHTML = e.target.innerHTML === 'add' ? "remove":"add";
        }   
        
        e.target.dataset.clipboard && this.copyContent(e.target);
    })
}

ColorPallete.prototype.pushColor = function(col){

    //pushing color to array
 this.displaySidebar +=1;
 if(this.displaySidebar === 1){
    var sidenav = document.getElementById("sidenav")
    sidenav.style.width = "250px";
    document.getElementById("color").style.marginRight = "250px";
 }

 if(this.color.push(col)){

    this.displayColor(col)
 }

}

ColorPallete.prototype.removeColor =function(col){

    this.color.pop(this.color.find(elem => elem === col));
    var removeElement = document.querySelector('div[data-color="'+col+'"]');
    removeElement.remove();
    localStorage.setItem("selectedColors",selectedColors);    

 }

ColorPallete.prototype.displayColor = function(color){


        var item = document.createElement("div");
        item.classList.add("item_display");
        item.dataset.color = color;
        item.style.background = color;
        item.innerHTML=color;
        sidenav.appendChild(item);     
        localStorage.setItem("selectedColors",selectedColors);    
}

ColorPallete.prototype.copyContent = function(content){

    if(navigator.clipboard){
        let copyItem = content.dataset.clipboard;
        navigator.clipboard.writeText(copyItem);
    }
}


new ColorPallete("#color",uiColors,selectedColors)

