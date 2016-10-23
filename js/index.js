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
				str += "<section  data-background-image='http://abhinemani.com/preso/img/"+data[i].bg+"'>";
				str += "<h1>" + data[i].Organization + "</h1>";
				str += "<h2>" + data[i].Applicant + "</h2>";
				str += "<p>" + data[i].Description + "</p>";
				
				str += "<h3>Proposed Grant: " + data[i].Grant + "</h3>";
				str += "</section>";				
			}
			gsheetClass.outerHTML=str; // it's simple replacement of whole element with contents of str var
		}
	}
