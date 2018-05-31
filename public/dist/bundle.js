(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function(){

	"use strict"

	var map = {
		init: function() {
			this.create();
		},
		create: function() {
			/* create sandboxmap/leaflet */
			var mymap = L.map('mapid').setView([52.3667, 4.9000], 11);

			L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
					maxZoom: 18,
					id: 'mapbox.light',
					accessToken: 'pk.eyJ1Ijoic3V1c3RlbnZvb3JkZSIsImEiOiJjamVmc3Q3MDQxbGJ0MzNrdHE4Y3QwMW82In0.AWAlzy0cXMbrfR8Ed-7DOg'
			}).addTo(mymap);

			mymap.scrollWheelZoom.disable();

			/* loading GeoJSON file TO DO: omschrijven naar javascript */
			$.getJSON("/js/amsterdam-stadsdelen.geojson", function (stadsdelen) {
				var allStadsdelenJSONArray = [];
				/* save all stadsdelen in array */
				for (var i = 0; i < stadsdelen.features.length; ++i) {
					var stadsdelenJSON = stadsdelen.features[i].properties.titel;
					allStadsdelenJSONArray.push(stadsdelenJSON);
				}
				map.allStadsdelenJSON = allStadsdelenJSONArray

				// get aside with stadsdelen from allStadsdelenJSON
				// template.renderAside();

				// popup
				function onEachFeature(feature, layer) {
					if (feature.properties && feature.properties.titel) {
							layer.bindPopup(feature.properties.titel);
					}
				}

				L.geoJSON(stadsdelen, {onEachFeature: onEachFeature}).addTo(mymap);

			})
		},
		allStadsdelenJSON: []
	}
	map.init()
})()

},{}],2:[function(require,module,exports){

if (navigator.onLine == true){
	console.log('network connection with the browser')
} else {
	window.alert('No network detected. You are seeing a cached page');
}

},{}],3:[function(require,module,exports){
console.log('test');

},{}]},{},[1,2,3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwdWJsaWMvanMvbWFwLmpzIiwicHVibGljL2pzL25ldHdvcmsuanMiLCJwdWJsaWMvanMvdGVzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiKGZ1bmN0aW9uKCl7XG5cblx0XCJ1c2Ugc3RyaWN0XCJcblxuXHR2YXIgbWFwID0ge1xuXHRcdGluaXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhpcy5jcmVhdGUoKTtcblx0XHR9LFxuXHRcdGNyZWF0ZTogZnVuY3Rpb24oKSB7XG5cdFx0XHQvKiBjcmVhdGUgc2FuZGJveG1hcC9sZWFmbGV0ICovXG5cdFx0XHR2YXIgbXltYXAgPSBMLm1hcCgnbWFwaWQnKS5zZXRWaWV3KFs1Mi4zNjY3LCA0LjkwMDBdLCAxMSk7XG5cblx0XHRcdEwudGlsZUxheWVyKCdodHRwczovL2FwaS50aWxlcy5tYXBib3guY29tL3Y0L3tpZH0ve3p9L3t4fS97eX0ucG5nP2FjY2Vzc190b2tlbj17YWNjZXNzVG9rZW59Jywge1xuXHRcdFx0XHRcdG1heFpvb206IDE4LFxuXHRcdFx0XHRcdGlkOiAnbWFwYm94LmxpZ2h0Jyxcblx0XHRcdFx0XHRhY2Nlc3NUb2tlbjogJ3BrLmV5SjFJam9pYzNWMWMzUmxiblp2YjNKa1pTSXNJbUVpT2lKamFtVm1jM1EzTURReGJHSjBNek5yZEhFNFkzUXdNVzgySW4wLkFXQWx6eTBjWE1icmZSOEVkLTdET2cnXG5cdFx0XHR9KS5hZGRUbyhteW1hcCk7XG5cblx0XHRcdG15bWFwLnNjcm9sbFdoZWVsWm9vbS5kaXNhYmxlKCk7XG5cblx0XHRcdC8qIGxvYWRpbmcgR2VvSlNPTiBmaWxlIFRPIERPOiBvbXNjaHJpanZlbiBuYWFyIGphdmFzY3JpcHQgKi9cblx0XHRcdCQuZ2V0SlNPTihcIi9qcy9hbXN0ZXJkYW0tc3RhZHNkZWxlbi5nZW9qc29uXCIsIGZ1bmN0aW9uIChzdGFkc2RlbGVuKSB7XG5cdFx0XHRcdHZhciBhbGxTdGFkc2RlbGVuSlNPTkFycmF5ID0gW107XG5cdFx0XHRcdC8qIHNhdmUgYWxsIHN0YWRzZGVsZW4gaW4gYXJyYXkgKi9cblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdGFkc2RlbGVuLmZlYXR1cmVzLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRcdFx0dmFyIHN0YWRzZGVsZW5KU09OID0gc3RhZHNkZWxlbi5mZWF0dXJlc1tpXS5wcm9wZXJ0aWVzLnRpdGVsO1xuXHRcdFx0XHRcdGFsbFN0YWRzZGVsZW5KU09OQXJyYXkucHVzaChzdGFkc2RlbGVuSlNPTik7XG5cdFx0XHRcdH1cblx0XHRcdFx0bWFwLmFsbFN0YWRzZGVsZW5KU09OID0gYWxsU3RhZHNkZWxlbkpTT05BcnJheVxuXG5cdFx0XHRcdC8vIGdldCBhc2lkZSB3aXRoIHN0YWRzZGVsZW4gZnJvbSBhbGxTdGFkc2RlbGVuSlNPTlxuXHRcdFx0XHQvLyB0ZW1wbGF0ZS5yZW5kZXJBc2lkZSgpO1xuXG5cdFx0XHRcdC8vIHBvcHVwXG5cdFx0XHRcdGZ1bmN0aW9uIG9uRWFjaEZlYXR1cmUoZmVhdHVyZSwgbGF5ZXIpIHtcblx0XHRcdFx0XHRpZiAoZmVhdHVyZS5wcm9wZXJ0aWVzICYmIGZlYXR1cmUucHJvcGVydGllcy50aXRlbCkge1xuXHRcdFx0XHRcdFx0XHRsYXllci5iaW5kUG9wdXAoZmVhdHVyZS5wcm9wZXJ0aWVzLnRpdGVsKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRMLmdlb0pTT04oc3RhZHNkZWxlbiwge29uRWFjaEZlYXR1cmU6IG9uRWFjaEZlYXR1cmV9KS5hZGRUbyhteW1hcCk7XG5cblx0XHRcdH0pXG5cdFx0fSxcblx0XHRhbGxTdGFkc2RlbGVuSlNPTjogW11cblx0fVxuXHRtYXAuaW5pdCgpXG59KSgpXG4iLCJcbmlmIChuYXZpZ2F0b3Iub25MaW5lID09IHRydWUpe1xuXHRjb25zb2xlLmxvZygnbmV0d29yayBjb25uZWN0aW9uIHdpdGggdGhlIGJyb3dzZXInKVxufSBlbHNlIHtcblx0d2luZG93LmFsZXJ0KCdObyBuZXR3b3JrIGRldGVjdGVkLiBZb3UgYXJlIHNlZWluZyBhIGNhY2hlZCBwYWdlJyk7XG59XG4iLCJjb25zb2xlLmxvZygndGVzdCcpO1xuIl19
