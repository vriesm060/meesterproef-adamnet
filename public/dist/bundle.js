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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwdWJsaWMvanMvbWFwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIoZnVuY3Rpb24oKXtcblxuXHRcInVzZSBzdHJpY3RcIlxuXG5cdHZhciBtYXAgPSB7XG5cdFx0aW5pdDogZnVuY3Rpb24oKSB7XG5cdFx0XHR0aGlzLmNyZWF0ZSgpO1xuXHRcdH0sXG5cdFx0Y3JlYXRlOiBmdW5jdGlvbigpIHtcblx0XHRcdC8qIGNyZWF0ZSBzYW5kYm94bWFwL2xlYWZsZXQgKi9cblx0XHRcdHZhciBteW1hcCA9IEwubWFwKCdtYXBpZCcpLnNldFZpZXcoWzUyLjM2NjcsIDQuOTAwMF0sIDExKTtcblxuXHRcdFx0TC50aWxlTGF5ZXIoJ2h0dHBzOi8vYXBpLnRpbGVzLm1hcGJveC5jb20vdjQve2lkfS97en0ve3h9L3t5fS5wbmc/YWNjZXNzX3Rva2VuPXthY2Nlc3NUb2tlbn0nLCB7XG5cdFx0XHRcdFx0bWF4Wm9vbTogMTgsXG5cdFx0XHRcdFx0aWQ6ICdtYXBib3gubGlnaHQnLFxuXHRcdFx0XHRcdGFjY2Vzc1Rva2VuOiAncGsuZXlKMUlqb2ljM1YxYzNSbGJuWnZiM0prWlNJc0ltRWlPaUpqYW1WbWMzUTNNRFF4YkdKME16TnJkSEU0WTNRd01XODJJbjAuQVdBbHp5MGNYTWJyZlI4RWQtN0RPZydcblx0XHRcdH0pLmFkZFRvKG15bWFwKTtcblxuXHRcdFx0bXltYXAuc2Nyb2xsV2hlZWxab29tLmRpc2FibGUoKTtcblxuXHRcdFx0LyogbG9hZGluZyBHZW9KU09OIGZpbGUgVE8gRE86IG9tc2NocmlqdmVuIG5hYXIgamF2YXNjcmlwdCAqL1xuXHRcdFx0JC5nZXRKU09OKFwiL2pzL2Ftc3RlcmRhbS1zdGFkc2RlbGVuLmdlb2pzb25cIiwgZnVuY3Rpb24gKHN0YWRzZGVsZW4pIHtcblx0XHRcdFx0dmFyIGFsbFN0YWRzZGVsZW5KU09OQXJyYXkgPSBbXTtcblx0XHRcdFx0Lyogc2F2ZSBhbGwgc3RhZHNkZWxlbiBpbiBhcnJheSAqL1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0YWRzZGVsZW4uZmVhdHVyZXMubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0XHR2YXIgc3RhZHNkZWxlbkpTT04gPSBzdGFkc2RlbGVuLmZlYXR1cmVzW2ldLnByb3BlcnRpZXMudGl0ZWw7XG5cdFx0XHRcdFx0YWxsU3RhZHNkZWxlbkpTT05BcnJheS5wdXNoKHN0YWRzZGVsZW5KU09OKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRtYXAuYWxsU3RhZHNkZWxlbkpTT04gPSBhbGxTdGFkc2RlbGVuSlNPTkFycmF5XG5cblx0XHRcdFx0Ly8gZ2V0IGFzaWRlIHdpdGggc3RhZHNkZWxlbiBmcm9tIGFsbFN0YWRzZGVsZW5KU09OXG5cdFx0XHRcdC8vIHRlbXBsYXRlLnJlbmRlckFzaWRlKCk7XG5cblx0XHRcdFx0Ly8gcG9wdXBcblx0XHRcdFx0ZnVuY3Rpb24gb25FYWNoRmVhdHVyZShmZWF0dXJlLCBsYXllcikge1xuXHRcdFx0XHRcdGlmIChmZWF0dXJlLnByb3BlcnRpZXMgJiYgZmVhdHVyZS5wcm9wZXJ0aWVzLnRpdGVsKSB7XG5cdFx0XHRcdFx0XHRcdGxheWVyLmJpbmRQb3B1cChmZWF0dXJlLnByb3BlcnRpZXMudGl0ZWwpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdEwuZ2VvSlNPTihzdGFkc2RlbGVuLCB7b25FYWNoRmVhdHVyZTogb25FYWNoRmVhdHVyZX0pLmFkZFRvKG15bWFwKTtcblxuXHRcdFx0fSlcblx0XHR9LFxuXHRcdGFsbFN0YWRzZGVsZW5KU09OOiBbXVxuXHR9XG5cdG1hcC5pbml0KClcbn0pKClcbiJdfQ==
