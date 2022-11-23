function myFunction() {
    var x = document.getElementById("toggle_menu");
    if (x.className === "nav-links") {
      x.className += " responsive";
    } else {
      x.className = "toggle_menu";
    }
  }