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
				str += "<section  data-background-image='" + data[i].bg + "'>";
				str += "<h1>" + data[i].Applicant + "</h1>";
				str += "<span>by " + data[i].Grant + "</span>";
				str += "</section>";				
			}
			gsheetClass.outerHTML=str; // it's simple replacement of whole element with contents of str var
			Reveal.sync();
		}
	}

Reveal.initialize({
				history: true
			});