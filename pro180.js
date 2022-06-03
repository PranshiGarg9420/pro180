let latitude, longitude, destination;

$(document).ready(function () {
	alert("Please allow the device to know your location!")
	initGeolocation();
})

function initGeolocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(success);
	}
	else {
		alert("Sorry, your browser does not support geolocation services.");
	}
}

$(function () {
	$("#navigate-button").click(function () {
		window.location.href = `pro180_weather.html?source=${latitude};${longitude}&destination=${destination[1]};${destination[0]}`
	})
})

function success(position) {
	longitude = position.coords.longitude;
	latitude = position.coords.latitude

	// Initializing Mapbox
	mapboxgl.accessToken = 'pk.eyJ1IjoicHJhbnNoaSIsImEiOiJjbDMxaWxqeHgwYWx6M2NwOXo0MGJsenpwIn0.lDEkMYbwQNj1SqYbbVFrig';

	var map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/mapbox/streets-v11',
		center: [longitude, latitude],
		zoom: 4
	});

	map.addControl(
		new MapboxGeocoder({
			accessToken: mapboxgl.accessToken,
			mapboxgl: mapboxgl
		}).on('result', function (e) {
			destination = e.result.center
		})
	);

    var img1= document.querySelector('#panna_nat_park');
    var marker1= new mapboxgl.Marker({
        element: img1
    })
    .setLngLat([79.94112608436139,24.591597550477125])
    .addTo(map);
    
    var img2= document.querySelector('#golden_temple');
    var marker2= new mapboxgl.Marker({
        element: img2
    })
    .setLngLat([ 74.87569455326599,31.62081995737212])
    .addTo(map);
    
    var img3= document.querySelector('#bodhgaya');
    var marker3= new mapboxgl.Marker({
        element: img3
    })
    .setLngLat([ 84.98974915739858,24.693199667858007])
    .addTo(map);
    
    var img4= document.querySelector('#jatayu_temple');
    var marker4= new mapboxgl.Marker({
        element: img4
    })
    .setLngLat([76.86731287191861, 8.866189057431164])
    .addTo(map);
    
    var img5= document.querySelector('#solang_valley');
    var marker5= new mapboxgl.Marker({
        element: img5
    })
    .setLngLat([77.15228218142312,32.31968395195609])
    .addTo(map);
    

}