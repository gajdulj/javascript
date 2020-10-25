'use strict';

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('clock').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}


function randBetween(min, max) {

	return Math.floor(Math.random() * (max - min +1))+min;

}

// Function to check for length of k,v objects
Object.size = function(obj) {
        var size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    };


const setBackground = () => {
	// Set the background image
	
    const wallpaperUrls = {
    "10.0 Cheetah ": "url('https://512pixels.net/downloads/macos-wallpapers-thumbs/10-0_10.1--thumb.png')",
    "10.5 Leopard ": "url('https://512pixels.net/downloads/macos-wallpapers-thumbs/10-5--thumb.png')",
    "10.7 Lion ": "url('https://512pixels.net/downloads/macos-wallpapers-thumbs/10-7--thumb.png')",
    "10.10 Yosemite ": "url('https://512pixels.net/downloads/macos-wallpapers-thumbs/10-10--thumb.jpg')",
    "10.14 Mojave ": "url('https://512pixels.net/downloads/macos-wallpapers-thumbs/10-14-Day-Thumb.jpg')",
    "10.15 Catalina ": "url('https://512pixels.net/wp-content/uploads/2020/06/10-15-Day-thumb-500x500.jpg')",
    }

    const noWallpapers = Object.size(wallpaperUrls)-1
  //var noLinks = Object.keys(wallpaperUrls.length)
  // Get random index to sleect from dictionary of Urls


  var random = randBetween(0, noWallpapers);
  // get the key for selected index
  var selectedImageIndex = Object.keys(wallpaperUrls)[random];
  // get the url for selected key
  var selectedImageUrl = wallpaperUrls[selectedImageIndex];
  //set the background to the selected url
  document.getElementById('randomBackground').style.backgroundImage = selectedImageUrl;
  //print out the key (wallpaper source)
  document.getElementById('macos').innerHTML = `<p>Wallpaper from MAC OS ${selectedImageIndex}.</p>`;

};




//setBackground();


//startTime();

