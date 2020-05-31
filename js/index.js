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


        

        var infoReforma = '<h1>Taqueria Reforma</h1>' + '<p>Abierto desde las 2PM hasta las 12AM</p><p>Av. Paseo de la Reforma #382, Juarez 06600</p>' + '<a href="https://www.google.com/maps/dir/Castillo+de+Chapultepec/Av.+Paseo+de+la+Reforma+382,+Ju%C3%A1rez,+Cuauht%C3%A9moc,+06600+Ciudad+de+M%C3%A9xico,+CDMX/@19.4230644,-99.1800399,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x85d1fecd47ed8f23:0xa6e0008524818b32!2m2!1d-99.181935!2d19.4204397!1m5!1m1!1s0x85d1ff498bc746b9:0xa8ecee6a5fb9fde1!2m2!1d-99.16939!2d19.4254584!3e0">View on Google Maps</a>';
        var infoRevolucion = '<h1>Taqueria Revolucion</h1>' + '<p>Abrimos desde la 1PM y cerramos a las 9PM</p><p>Av. Revolucion #241, Tacubaya</p>' + '<a href="https://www.google.com/maps/dir/Castillo+de+Chapultepec,+Bosque+de+Chapultepec+I+Secci%C3%B3n,+Ciudad+de+M%C3%A9xico,+CDMX/Taquer%C3%ADa+El+Borrego+Viudo,+Av.+Revoluci%C3%B3n+241,+Tacubaya,+Miguel+Hidalgo,+11870+Ciudad+de+M%C3%A9xico,+CDMX/@19.4115646,-99.1925705,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x85d1fecd47ed8f23:0xa6e0008524818b32!2m2!1d-99.181935!2d19.4204397!1m5!1m1!1s0x85d1ff6390f27487:0x3be7a56e41f9854a!2m2!1d-99.1852036!2d19.3994293!3e0">View on Google Maps</a>';
        var infoViaducto = '<h1>Taqueria Viaducto</h1>' + '<p>Abierto desde las 4PM hasta las 2AM</p><p>Viad. Río de la piedad #318, Asturias</p>' + '<a href="https://www.google.com/maps/dir/Castillo+de+Chapultepec,+Bosque+de+Chapultepec+I+Secci%C3%B3n,+Ciudad+de+M%C3%A9xico,+CDMX/Viad.+R%C3%ADo+de+la+Piedad+318,+Asturias,+Cuauht%C3%A9moc,+06850+Ciudad+de+M%C3%A9xico,+CDMX/@19.4120239,-99.1903494,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x85d1fecd47ed8f23:0xa6e0008524818b32!2m2!1d-99.181935!2d19.4204397!1m5!1m1!1s0x85d1feeed7863283:0x8c89da6e69f8f057!2m2!1d-99.1316472!2d19.4033107!3e0">View on Google Maps</a>';
        var infoCalleSur = '<h1>Taqueria Calle Sur</h1>' + '<p>Abierto desde las 3:30 PM hasta las 2:30 AM</p><p>Calle Sur #103, Héroes de Churubusco</p>'+ '<a href="https://www.google.com/maps/dir/Castillo+de+Chapultepec,+Bosque+de+Chapultepec+I+Secci%C3%B3n,+Ciudad+de+M%C3%A9xico,+CDMX/Taquer%C3%ADa+los+G%C3%BCeros,+Calle+Sur+103+401,+H%C3%A9roes+de+Churubusco,+Iztapalapa,+09090+Ciudad+de+M%C3%A9xico,+CDMX/@19.3901398,-99.1828926,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x85d1fecd47ed8f23:0xa6e0008524818b32!2m2!1d-99.181935!2d19.4204397!1m5!1m1!1s0x85d1fe14e91a5b7f:0xe2472f776fdcf041!2m2!1d-99.1197896!2d19.3617464!3e0">View on Google Maps</a>';
        var infoNaranjito = '<h1>Taqueria Naranjito</h1>' + '<p>Abierto desde las 5:30 PM hasta las 1:30 AM</p><p>Av. Torres Adalid #636, Narvarte Poniente</p>' + '<a href="https://www.google.com/maps/dir//EL+NARANJITO,+Av,+Torres+Adalid+636,+Narvarte+Poniente,+Benito+Ju%C3%A1rez,+03020+CDMX/@19.3898751,-99.1613614,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x85d1ff08d9547df3:0x225d912514e0d676!2m2!1d-99.1591727!2d19.3898751!3e0">View on Google Maps</a>';
        var infoInn = '<h1>Taqueria Inn</h1>' + '<p>Abierto desde las 7:00 PM hasta las 4 AM</p><p>Av. Revolución #1366, Guadalupe Inn</p>' + '<a href="https://www.google.com/maps/dir//Taco+Inn,+Av.+Revoluci%C3%B3n+1366,+Guadalupe+Inn,+%C3%81lvaro+Obreg%C3%B3n,+01020+Ciudad+de+M%C3%A9xico,+CDMX/@19.3574961,-99.189858,19z/data=!4m9!4m8!1m0!1m5!1m1!1s0x85d1fff5795454d9:0xe33e2983bb83453e!2m2!1d-99.1895462!2d19.3573965!3e0">View on Google Maps</a>';
        var infoFranz = '<h1>Taqueria Franz</h1>' + '<p>Abierto desde las 2:00 PM hasta las 11 PM</p><p>Franz Schubert #165, Cuauhtémoc</p>' + '<a href="https://www.google.com/maps/dir//Los+Compadres,+Franz+Schubert+165,+Peralvillo,+Cuauht%C3%A9moc,+06220+Ciudad+de+M%C3%A9xico,+CDMX/@19.4623627,-99.1391889,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x85d1f91983d53d47:0x811f97c571f00c5!2m2!1d-99.1370735!2d19.4623337!3e0">View on Google Maps</a>';
        var infoFloricultura = '<h1>Taqueria Floricultura</h1>' + '<p>Abierto desde las 1:00 PM hasta las 10 PM</p><p>Floricultura #183, 20 de Noviembre</p>' + '<a href="https://www.google.com/maps/dir//Taqueria+El+Buen+Pastor,+Floricultura+183,+20+de+Noviembre,+Venustiano+Carranza,+15300+Ciudad+de+M%C3%A9xico,+CDMX/@19.4455425,-99.1094463,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x85d1f9ccf3a12249:0x79b82b0f81c5d93f!2m2!1d-99.107258!2d19.445543!3e0">View on Google Maps</a>';

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
        
