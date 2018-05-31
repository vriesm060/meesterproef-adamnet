(function(){

	"use strict"

	var map = {
		init: function() {
			this.create();
		},
		create: function() {
			mapboxgl.accessToken = 'pk.eyJ1Ijoic3V1c3RlbnZvb3JkZSIsImEiOiJjamVmc3Q3MDQxbGJ0MzNrdHE4Y3QwMW82In0.AWAlzy0cXMbrfR8Ed-7DOg'
			    var map = new mapboxgl.Map({
			    container: 'map',
			    style: 'mapbox://styles/mapbox/light-v9',
			    center: [4.8776926, 52.3563219],
			    zoom: '11'
			})
		}
	}
	map.init()
})()
