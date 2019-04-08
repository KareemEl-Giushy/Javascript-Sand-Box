
var text = document.getElementById("text");

function hamada (){
    'use strict';
    text.setAttribute("data",text.getAttribute("placeholder"));
    text.setAttribute("placeholder",'');
}
function onbluring (){
    'use strict';
    text.setAttribute("placeholder",text.getAttribute("data"));
    text.setAttribute("data",'');
}
