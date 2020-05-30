var map;
      function initMap() {
      	var CDMX = {
      		lat: 19.422959,
      		lng: -99.191059
      	}

        var Reforma = {
          lat: 19.425658,
          lng: -99.169646
        }
        var Revolucion = {
          lat: 19.3994293,
          lng: -99.1873923
        }
        var Viaducto = {
          lat: 19.4033478,
          lng: -99.1324495
        }
        var CalleSur = {
          lat: 19.3616494,
          lng: -99.1201229
        }
        var Naranjito = {
          lat: 19.3896752,
          lng: -99.1595968
        }
        var Inn = {
          lat: 19.357405,
          lng: -99.1917262
        }
        var Franz = {
          lat: 19.4623335,
          lng: -99.1392624
        }
        var Floricultura = {
          lat: 19.4446502,
          lng: -99.1081488
        }
        var Taco = {
          url: 'taco40.png',
          size: new google.maps.Size(70,70),
          origin: new google.maps.Point(0,0),
          anchor: new google.maps.Point(20,60)
        };
        map = new google.maps.Map(document.getElementById('map'), {
          center: CDMX,
          zoom: 12,
          styles: [
          {
              "featureType": "all",
              "elementType": "labels.text.fill",
              "stylers": [
                  {
                      "saturation": 36
                  },
                  {
                      "color": "#ffffff"
                  },
                  {
                      "lightness": 40
                  }
              ]
          },
          {
              "featureType": "all",
              "elementType": "labels.text.stroke",
              "stylers": [
                  {
                      "visibility": "off"
                  },
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 16
                  }
              ]
          },
          {
              "featureType": "all",
              "elementType": "labels.icon",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "administrative",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#c0c0c0"
                  },
                  {
                      "lightness": 20
                  },
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "administrative",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 17
                  },
                  {
                      "weight": 1.2
                  },
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "landscape",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 20
                  }
              ]
          },
          {
              "featureType": "landscape",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#3f3f3f"
                  }
              ]
          },
          {
              "featureType": "landscape",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "landscape.man_made",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#333333"
                  },
                  {
                      "visibility": "on"
                  },
                  {
                      "saturation": "0"
                  },
                  {
                      "lightness": "0"
                  },
                  {
                      "gamma": "1.00"
                  }
              ]
          },
          {
              "featureType": "landscape.man_made",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "landscape.natural",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#2b2b2b"
                  },
                  {
                      "visibility": "on"
                  },
                  {
                      "gamma": "1"
                  },
                  {
                      "lightness": "0"
                  },
                  {
                      "saturation": "0"
                  }
              ]
          },
          {
              "featureType": "landscape.natural",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "landscape.natural.landcover",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "visibility": "off"
                  },
                  {
                      "color": "#ff0000"
                  }
              ]
          },
          {
              "featureType": "landscape.natural.landcover",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "landscape.natural.terrain",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "visibility": "on"
                  },
                  {
                      "color": "#222222"
                  }
              ]
          },
          {
              "featureType": "landscape.natural.terrain",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 21
                  }
              ]
          },
          {
              "featureType": "poi",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#4a4a4a"
                  },
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#ffb900"
                  },
                  {
                      "lightness": "0"
                  },
                  {
                      "gamma": "1.00"
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 29
                  },
                  {
                      "weight": 0.2
                  }
              ]
          },
          {
              "featureType": "road.arterial",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#ac9455"
                  },
                  {
                      "lightness": "0"
                  }
              ]
          },
          {
              "featureType": "road.arterial",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#ffb900"
                  }
              ]
          },
          {
              "featureType": "road.arterial",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "road.local",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 16
                  }
              ]
          },
          {
              "featureType": "road.local",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#222222"
                  }
              ]
          },
          {
              "featureType": "road.local",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "transit",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 19
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 17
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#1a1a1a"
                  }
              ]
          }
      ] 

        });
        var markerReforma = new google.maps.Marker({
          position: Reforma,
          map: map,
          title:"Taqueria Reforma",
          icon: Taco
        });
        var markerRevolucion = new google.maps.Marker({
          position: Revolucion,
          map: map,
          title: "Taqueria Revolucion",
          icon: Taco
        });
        var markerViaducto = new google.maps.Marker({
          position: Viaducto,
          map: map,
          title: "Taqueria Viaducto",
          icon: Taco
        });
        var markerCalleSur = new google.maps.Marker({
          position: CalleSur,
          map: map,
          title: "Taqueria Calle Sur",
          icon: Taco
        });
        var markerNaranjito = new google.maps.Marker({
          position: Naranjito,
          map: map,
          title: "Taqueria Naranjito",
          icon: Taco
        });
        var markerInn = new google.maps.Marker({
          position: Inn,
          map: map,
          title: "Taqueria Inn",
          icon: Taco
        });
        var markerFranz = new google.maps.Marker({
          position: Franz,
          map: map,
          title: "Taqueria Franz",
          icon: Taco
        });
        var markerFloricultura = new google.maps.Marker({
          position: Floricultura,
          map: map,
          title: "Taqueria Floricultura",
          icon: Taco
        });


        

        var infoReforma = '<h1>Taqueria Reforma</h1>' + '<img src="califa.png">' + '<p>Abierto desde las 2PM hasta las 12AM</p><p>Av. Paseo de la Reforma #382, Juarez 06600</p>' + '<a href="https://www.google.com/maps/place/Lumen+Polanco/@19.4280772,-99.1938794,17z/data=!4m5!3m4!1s0x0:0xeb0a49f740136e3!8m2!3d19.4304049!4d-99.1916326">View on Google Maps</a>';
        var infoRevolucion = '<h1>Taqueria Revolucion</h1>' + '<p>Abrimos desde la 1PM y cerramos a las 9PM</p><p>Av. Revolucion #241, Tacubaya</p>' + '<a href="https://www.google.com/maps/place/Carnes+la+Laguna/@19.4236708,-99.1862942,15z/data=!4m5!3m4!1s0x0:0x3dce5f47247b7910!8m2!3d19.4292212!4d-99.1779372">View on Google Maps</a>';
        var infoViaducto = '<h1>Taqueria Viaducto</h1>' + '<p>Abierto desde las 4PM hasta las 2AM</p><p>Viad. Río de la piedad #318, Asturias</p>' + '<a href="https://www.google.com/maps/place/El+Califa/@19.4236708,-99.1862942,15z/data=!4m5!3m4!1s0x0:0xfee0a8a1b703aac8!8m2!3d19.4255686!4d-99.1694748">View on Google Maps</a>';
        var infoCalleSur = '<h1>Taqueria Calle Sur</h1>' + '<p>Abierto desde las 3:30 PM hasta las 2:30 AM</p><p>Calle Sur #103, Héroes de Churubusco</p>'
        var infoNaranjito = '<h1>Taqueria Naranjito</h1>' + '<p>Abierto desde las 5:30 PM hasta las 1:30 AM</p><p>Av. Torres Adalid #636, Narvarte Poniente</p>'
        var infoInn = '<h1>Taqueria Inn</h1>' + '<p>Abierto desde las 7:00 PM hasta las 4 AM</p><p>Av. Revolución #1366, Guadalupe Inn</p>'
        var infoFranz = '<h1>Taqueria Franz</h1>' + '<p>Abierto desde las 2:00 PM hasta las 11 PM</p><p>Franz Schubert #165, Cuauhtémoc</p>'
        var infoFloricultura = '<h1>Taqueria Floricultura</h1>' + '<p>Abierto desde las 1:00 PM hasta las 10 PM</p><p>Floricultura #183, 20 de Noviembre</p>'

        var informacionR = new google.maps.InfoWindow({
          content: infoReforma
        });
        var informacionRevo = new google.maps.InfoWindow({
          content: infoRevolucion
        });
        var informacionViad = new google.maps.InfoWindow({
          content: infoViaducto
        });
        var informacionCalleSur = new google.maps.InfoWindow({
          content: infoCalleSur
        });
        var informacionNaranjito = new google.maps.InfoWindow({
          content: infoNaranjito
        });
        var informacionInn = new google.maps.InfoWindow({
          content: infoInn
        });
        var informacionFranz = new google.maps.InfoWindow({
          content: infoFranz
        });
        var informacionFloricultura = new google.maps.InfoWindow({
          content: infoFloricultura
        });

        

        markerReforma.addListener('click', function(){
          informacionR.open(map, markerReforma)

        });

        markerRevolucion.addListener('click', function(){
          informacionRevo.open(map, markerRevolucion)

        });

        markerViaducto.addListener('click', function(){
          informacionViad.open(map, markerViaducto)

        });

        markerCalleSur.addListener('click', function(){
          informacionCalleSur.open(map, markerCalleSur)

        });

        markerNaranjito.addListener('click', function(){
          informacionNaranjito.open(map, markerNaranjito)

        });

        markerInn.addListener('click', function(){
          informacionInn.open(map, markerInn)

        });

        markerFranz.addListener('click', function(){
          informacionFranz.open(map, markerFranz)

        });

        markerFloricultura.addListener('click', function(){
          informacionFloricultura.open(map, markerFloricultura)

        })
      }
        
