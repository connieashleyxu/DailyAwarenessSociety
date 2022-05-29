//organize categories
filterSelection("all")
let active_filters = []
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all"){
      for (i = 0; i < x.length; i++) {
        w3AddClass(x[i], "show");
      }
      return;
  }
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    for(var j = 0; j < active_filters.length; j++){
      if (x[i].className.indexOf(active_filters[j]) > -1) w3AddClass(x[i], "show");
    }
  }
}

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    if(this.className.includes("active")){
      w3RemoveClass(this, "active");
      active_filters.splice(active_filters.indexOf(this.id), 1);
      if(active_filters.length != 0){
        filterSelection(active_filters[0]);
      }
      else{
        filterSelection("all")
      }
    }
    else{
      active_filters.push(this.id);
      this.className += " active";
      filterSelection(this.id);
    }
  });
}

// Tweet
window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));

function alertMail() {
  alert("Thanks for subscribing! Stay tuned for weekly DAS updates in your email.");
}

/*
function viewMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "View All";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "View Less";
    moreText.style.display = "inline";
  }
}
*/