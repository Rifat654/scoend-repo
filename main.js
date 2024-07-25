let ul = document.getElementById("ul");
ul.style.maxHeight = "0px";

function toggleMenu() {
  
    if (ul.style.maxHeight == "0px") 
    {
    ul.style.maxHeight = "300px";
  } 

  else{
    ul.style.maxHeight = "0px";
 }

}
