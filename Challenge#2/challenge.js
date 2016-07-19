// var theParent = document.getElementById("navBar");
// theParent.addEventListener("click", grow);

// function grow(event) {
//   if (event.target !== event.currentTarget) {
//         var pressedItem = event.target.id;
//         console.log(pressedItem);
//     }
//   event.stopPropagation();
// }

var links = document.getElementsByTagName("a");

for (i=0; i<links.length; i++) {
      links[i].addEventListener('click', function(event){
        console.log(event);
        var li = event.target.parentElement;
        li.style.padding = "15px 20px"
 });
}

