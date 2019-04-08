var text = document.getElementById("text"),
    pass = document.getElementById("pass"),
    button = document.getElementById("button"),
    button2 = document.getElementById("button2"),
    scroll = document.getElementById("scroll"),
    mytext = "This is text",
    mylest = ["defult", "one", "two", "three"],
    ch = true,
    thenum = Math.floor(Math.random() * mylest.length),
    k=0;
document.body.setAttribute("class", mylest[thenum]);
text.onfocus = function (){
    text.setAttribute("data",text.getAttribute("placeholder"));
    text.setAttribute("placeholder", "");
};
text.onblur = function (){
    text.setAttribute("placeholder",text.getAttribute("data"));
    text.setAttribute("data", "");
};
button.onclick = function (){
  k=0;
  document.getElementById("type").textContent = '';
  var clear =  setInterval(function(){
        document.getElementById("type").textContent += mytext[k];
        k++;
        if(mytext.length-1 < k ){
            clearInterval(clear);
        }
    }, 200);
};
button2.onclick = function (){
    if(button2.textContent == "Show password"){
        pass.setAttribute("type","text");
        button2.textContent = "Hide password";
    }else{
        pass.setAttribute("type","password");
        button2.textContent = "Show password";
    }
};
window.onscroll = function (){
    if (window.pageYOffset >= 400){
        scroll.style.display = "block";
        document.getElementById("somm").style.display = "none";
      }else{
        scroll.style.display = "none";
        document.getElementById("somm").style.display = "block";
    }
};
scroll.onclick = function (){
    window.scrollTo(0,0);
};
document.getElementById("text2").onkeyup = function () {
    document.getElementById("content").textContent = this.value;
};
document.getElementById("check").onchange = function (){
    document.addEventListener("contextmenu" , function (e){
      e.preventDefault();
    });
    document.getElementById("par").textContent = "Reload The Page To Return Default";
};
