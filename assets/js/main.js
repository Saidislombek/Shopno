/* Code for Slick Slider*/

$(document).ready(function(){
      $('.slider').slick({
        arrows:true,
        dots:true,
        adaptiveHeight:true,        
        appendArrows: $('.slick-arrow-wrap')
       });
    });

/* Code for Raiting Star*/

var list=['one','two','three','four','five'];
list.forEach(function(element) {
  document.getElementById(element).addEventListener("click", function(){
    var cls=document.getElementById(element).className;
    if(cls.includes("unchecked"))
       {
   document.getElementById(element).classList.remove("unchecked");
   document.getElementById(element).classList.add("checked");
      }
    else
      {
  document.getElementById(element).classList.remove("checked");     
  document.getElementById(element).classList.add("unchecked");
      }
});
});

  document.getElementById("buttonnew").addEventListener("click", function(){
  alert("Work in progress");
});