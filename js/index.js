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
        var Arquimedes = {
          lat: 19.429088,
          lng: -99.194812
        }
        var Kant = {
          lat: 19.429128,
          lng: -99.178065
        }
        var Taco = {
          url: 'taco40.png',
          size: new google.maps.Size(70,70),
          origin: new google.maps.Point(0,0),
          anchor: new google.maps.Point(20,60)
        };
        map = new google.maps.Map(document.getElementById('map'), {
          center: CDMX,
          zoom: 14
        });
        var markerReforma = new google.maps.Marker({
          position: Reforma,
          map: map,
          title:"Taqueria Reforma",
          icon: Taco
        });
        var markerArquimedes = new google.maps.Marker({
          position: Arquimedes,
          map: map,
          title: "Taqueria Arquimedes",
          icon: Taco
        });
        var markerKant = new google.maps.Marker({
          position: Kant,
          map: map,
          title: "Taqueria Kant",
          icon: Taco
        });

        var infoReforma = '<h1>Taqueria Reforma</h1>' + '<p>Abierto desde las 2PM hasta las 12AM</p><p>Av. Paseo de la Reforma #382, Juarez 06600</p>' + '<a href="https://www.google.com/maps/place/Lumen+Polanco/@19.4280772,-99.1938794,17z/data=!4m5!3m4!1s0x0:0xeb0a49f740136e3!8m2!3d19.4304049!4d-99.1916326">View on Google Maps</a>';
        var infoArquimedes = '<h1>Taqueria Arquimedes</h1>' + '<p>Abrimos desde la 1PM y cerramos a las 9PM</p><p>Arquimedes #44, Polanco 11560</p>' + '<a href="https://www.google.com/maps/place/Carnes+la+Laguna/@19.4236708,-99.1862942,15z/data=!4m5!3m4!1s0x0:0x3dce5f47247b7910!8m2!3d19.4292212!4d-99.1779372">View on Google Maps</a>';
        var infoKant = '<h1>Taqueria Kant</h1>' + '<p>Abierto desde las 4PM hasta las 2AM</p><p>Emmanuel Kant #6, Anzures 11590</p>' + '<a href="https://www.google.com/maps/place/El+Califa/@19.4236708,-99.1862942,15z/data=!4m5!3m4!1s0x0:0xfee0a8a1b703aac8!8m2!3d19.4255686!4d-99.1694748">View on Google Maps</a>';


        var informacionR = new google.maps.InfoWindow({
          content: infoReforma
        });
        var informacionA = new google.maps.InfoWindow({
          content: infoArquimedes
        });
        var informacionK = new google.maps.InfoWindow({
          content: infoKant
        });

        markerReforma.addListener('click', function(){
          informacionR.open(map, markerReforma)

        });

        markerArquimedes.addListener('click', function(){
          informacionA.open(map, markerArquimedes)

        });

        markerKant.addListener('click', function(){
          informacionK.open(map, markerKant)

        })
      }
        
