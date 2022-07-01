/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  window.addEventListener('load', async () => {
    let video = document.querySelector('video[muted][autoplay]');
    try {
      await video.play();
    } catch (err) {
      video.controls = true;
    }
  });

