import "./modules/example";

//Google Map

function initMap() {
	//Map Style
	var styleArray = [
		{
			featureType: 'water',
			stylers: [{color: '#00bfa5'}]
		},
		{
			featureType: 'landscape',
			elementType: 'geometry.fill',
			stylers: [{color: '#ffffff'}]
		},
		{
			featureType: 'landscape.man_made',
			elementType: 'all',
			stylers: [{saturation: '-70'}]
		},
		{
			featureType: 'landscape.natural',
			elementType: 'all',
			stylers: [{visibility: 'off'}]
		},
		{
			featureType: 'poi',
			elementType: 'labels',
			stylers: [{visibility: 'off'}]
		},
		{
			featureType: 'poi.park',
			elementType: 'all',
			stylers: [{visibility: 'off'}]
		},
		{
			featureType: 'road',
			elementType: 'all',
			stylers: [{lightness: '-15'}]
		},
		{
			featureType: 'transit',
			elementType: 'labels',
			stylers: [{visibility: 'off'}]
			}
	];
	// Create a map object and specify the DOM element for display.
	var map = new google.maps.Map(document.getElementById('myGoogleMap'), {
		center: {lat: 48.746010, lng: 44.504719},
		scrollwheel: false,
		zoom: 14,
		styles: styleArray,
		disableDefaultUI: true
	});
	// Create marker
	var myMarker = new google.maps.Marker({
		position: {lat: 48.746010, lng: 44.504719},
		map: map,
		icon: 'assets/images/map_marker.svg'
	});
}