function dropdown() {
  var x = document.getElementById("myLinks");
  x.classList.toggle("show");
}
 

// working FADE OUT
document.addEventListener('DOMContentLoaded', function(event) {
  document.body.classList.add('load');


  const links = document.querySelectorAll('a');

  links.forEach(link => {
    const href = link.getAttribute('href'); // move
    link.addEventListener('click', function(event) {
      event.preventDefault();
  
      // Add the "fade-out" class to the body
      console.log(href)
      if (href === "/index.html" || href === "/pages/about.html" || href === "/pages/projects.html" || href === "/pages/contact.html") {
      console.log("yes")
      document.body.classList.add('fade-out');
      }
      
      // Wait 

      if (href === "https://www.instagram.com/alex.rrr999/" || href === "https://github.com/alex-rrr999" || href === "https://www.linkedin.com/in/alex-rrr999/" || href === "https://www.youtube.com/@alex-rrr999")
      setTimeout(function() {
        // window.location.href = href;
        window.open(href);
      }, 100);
      else {
      setTimeout(function() {
        window.location.href = href;
      }, 200);
      }
    });
  });
});




document.addEventListener('DOMContentLoaded',function(event){
  var dataText = ["Alexander Rodriguez"];
  

  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
     document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 20000);
     }
     // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
     typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text

     });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});




