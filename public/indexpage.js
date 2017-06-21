/*
var fs = require('fs');
var updatesText = require('./text/updates');

function populateUpdateSelector(callback)
{
	var selector = '';
	selector += '<select>'
	updatesText.dates.forEach(function(date){
		selector += '<option value=' + date.id + '>' + date.name + '</option>';
	});
	selector += '</select>'
	
	document.getElementById('update-picker').innerHTML = selector;
}
	*/
	/*
	var xobj = new XMLHttpRequest();
	xobj.overrideMimeType('application/json');
	xobj.open('GET', './text/updates.json', true);
	xobj.onreadystatechange = function(){
		if(xobj.readyState == 4 && xobj.status == '200')
		{
			callback(xobj.responseText);
		}
	};
	xobj.send(null);
	*/