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


	var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	var curWeekDay = days[today.getDay()];
	var curDay = today.getDate();
	var curMonth = months[today.getMonth()];
	var curYear = today.getFullYear();
	var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
	document.getElementById("date").innerHTML = date;
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
    "10.0 Cheetah & 10.1 Puma" : "url('https://512pixels.net/downloads/macos-wallpapers-thumbs/10-0_10.1--thumb.png')",
    "10.2 Jaguar" : "url('https://512pixels.net/downloads/macos-wallpapers-thumbs/10-2--thumb.png')",
    "10.3 Panther" : "url('https://512pixels.net/downloads/macos-wallpapers-thumbs/10-3--thumb.png')",
    "10.4 Tiger" : "url('https://512pixels.net/downloads/macos-wallpapers-thumbs/10-4--thumb.png')",
    "10.5 Leopard" : "url('https://512pixels.net/downloads/macos-wallpapers-thumbs/10-5--thumb.png')",
    "10.6 Snow Leopard" : "url('https://512pixels.net/downloads/macos-wallpapers-thumbs/10-6--thumb.png')",
    "10.7 Lion" : "url('https://512pixels.net/downloads/macos-wallpapers-thumbs/10-7--thumb.png')",
    "10.8 Mountain Lion" : "url('https://512pixels.net/downloads/macos-wallpapers-thumbs/10-8--thumb.jpg')",
    "10.9 Mavericks" : "url('https://512pixels.net/downloads/macos-wallpapers-thumbs/10-9--thumb.jpg')",
    "10.10 Yosemite" : "url('https://512pixels.net/downloads/macos-wallpapers-thumbs/10-10--thumb.jpg')",
    "10.11 El Capitan" : "url('https://512pixels.net/downloads/macos-wallpapers-thumbs/10-11--thumb.jpg')",
	"10.12 Sierra" : "url('https://512pixels.net/downloads/macos-wallpapers-thumbs/10-12--thumb.jpg')",
	"10.13 High Sierra" : "url('https://512pixels.net/downloads/macos-wallpapers-thumbs/10-13--thumb.jpg')",
    "10.14 Mojave" : "url('https://512pixels.net/downloads/macos-wallpapers-thumbs/10-14-Day-Thumb.jpg')",
    "10.15 Catalina" : "url('https://512pixels.net/wp-content/uploads/2020/06/10-15-Day-thumb-500x500.jpg')",
    "11.0 Big Sur" : "url('https://512pixels.net/wp-content/uploads/2020/06/11-0-Color-Day-thumbnails-500x500.jpg')"
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


const setQuote = () => {
	const quotes = {
	"The more you seek uncomfortable, the more you become comfortable" : "Conor McGregor",
	"Productivity comes from making habits of doing. Creativity comes from breaking habits of thinking. Innovation comes from toggling between novel ideas and familiar routines.": "unknown",
	"All great things are created in place between madness and a method": "Bill Tench",
	"Life is not fair; get used to it.": "Steve Jobs",
	"Abandon harmfulness. Cultivate goodness. Subdue your mind.": "David Michie",
	"Life is like riding a bicycle. To keep your balance you must keep moving.":"Albert Einstein",
	"To see what is in front of one’s nose needs a constant struggle.":"George Orwell",
	"In our age there is no such thing as 'keeping out of politics. ' All issues are political issues, and politics itself is a mass of lies, evasions, folly, hatred and schizophrenia.":"George Orwell"
	}

	const noQuotes = Object.size(quotes)-1
	var random = randBetween(0, noQuotes);
	var selectedQuoteIndex = Object.keys(quotes)[random];
	// get the url for selected key
	var selectedQuoteAuthor = quotes[selectedQuoteIndex];
	//set the background to the selected url
	//print out the key (wallpaper source)
	document.getElementById('quote').innerHTML = selectedQuoteIndex;
	document.getElementById('author').innerHTML = selectedQuoteAuthor;
}

// to add: background colour, better looking fonts, bigger clock, to do list, icons

