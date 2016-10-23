var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1mxrXQbNi9d0rYxaGyw08Y3PKU4IPGZcPUguXq45qgyc/pubhtml';
	var target_gsheet_class_once = 'gsheet';

	window.onload = function() { init() };

	function init() {
	Tabletop.init( { key: public_spreadsheet_url,
	                 callback: showInfo,
	                 simpleSheet: true } )
	}

	function showInfo(data, tabletop) {

		// console.log(data);
		var str = "";
		var gsheetClass = document.getElementsByClassName(target_gsheet_class_once)[0];
		if(gsheetClass.outerHTML) { // if outerHTML is supported
			for (var i=0; i<data.length; i++) {
				str += "<section  class='future' data-background-image='http://abhinemani.com/preso/img/"+data[i].bg+"'>";
				str += "<h1> <a target='_blank' href='" + data[i].Link + "'>" + data[i].Organization + "</a></h1>";
				str += "<h4>" + data[i].Category + "  // " + data[i].Applicant + "   <a target='_blank' href='mailto:" + data[i].Email + "'><i class='fa fa-envelope-o' aria-hidden='true'></i></a> // "+  data[i].Grant + "</h4>";
				str += "<blockquote>" + data[i].Quote + "</blockquote>";
				str += "<p><strong>" + data[i].Description + "</strong></p>";
				str += "</section>";				
			}
			gsheetClass.outerHTML=str; // it's simple replacement of whole element with contents of str var
			Reveal.sync();
		}
	}

	Reveal.initialize({
// Display controls in the bottom right corner
controls: true,

// Display a presentation progress bar
progress: true,

// Push each slide change to the browser history
history: false,

// Enable keyboard shortcuts for navigation
keyboard: true,

// Enable the slide overview mode
overview: true,

// Vertical centering of slides
center: true,

// Loop the presentation
loop: false,

// Change the presentation direction to be RTL
rtl: false,

// Number of milliseconds between automatically proceeding to the 
// next slide, disabled when set to 0, this value can be overwritten
// by using a data-autoslide attribute on your slides
autoSlide: 0,

// Enable slide navigation via mouse wheel
mouseWheel: false,

// Apply a 3D roll to links on hover
rollingLinks: true,

// Transition style
transition: 'default' // default/cube/page/concave/zoom/linear/fade/none
				});
