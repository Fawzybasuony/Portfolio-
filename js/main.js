

function myFunction(x) {
     x.classList.toggle("change");
     $(navbarNav).slideToggle("togle")

}


let x1 = 1;
setInterval(() => {

     let title = " Frontend developer";

     nt.innerText = title.slice(0, x1);
     x1++;
     
     if (title.length < x1) {
          x1 = 1;
     }
   

}, 300);


function upp() {
     window.scrollTo({
               top:0,
               left:0,
               behavior:"smooth"
          })
}
