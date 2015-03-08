var map = L.map('leafletmap').setView([40.831747,-73.90385], 13);

// add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


var mappingDataArray = mappingData.rows;


for (var i=0; i<mappingDataArray.length; i++) {
	var locationObject = mappingDataArray[i]
	
	var marker = L.marker([locationObject.latitude,locationObject.longitude]).addTo(map);
	marker.bindPopup("<b>"+locationObject.NameofCenter+"</b><br>"+locationObject.FullAddress);


}