(function ($, Drupal, window, document, undefined) {
  Drupal.behaviors.umnw_gmap = {
    attach: function(context, settings) {
      if($('.umnw_gmap').length > 0){
        //Carico la mappa di google
        $(window).load(function(){Drupal.behaviors.umnw_gmap.loadGMapLib();});
      }
    },
    map_init: function() {
      // Loading settings.
      var lat = parseFloat(Drupal.settings.umnw_gmap.conf.umnw_gmap_lat);
      var lng = parseFloat(Drupal.settings.umnw_gmap.conf.umnw_gmap_lng);
      var dialogTitle = Drupal.settings.umnw_gmap.conf.umnw_gmap_dialogTitle;
      var markerTitle = Drupal.settings.umnw_gmap.conf.umnw_gmap_dialogTitle;
      var zoomLevel = parseInt(Drupal.settings.umnw_gmap.conf.umnw_gmap_zoomLevel);
      var gmapApiKey = Drupal.settings.umnw_gmap.conf.umnw_gmap_gmapApiKey;
      // Building map.
      var myLatlng = new google.maps.LatLng(lat,lng);
      var mapOptions = {
        center: myLatlng,
        zoom: zoomLevel,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        scrollwheel: false
        //navigationControl: false,
        //scaleControl: false,
        //draggable: false,
      };
      var map_container = $('.umnw_gmap');
      var map_container_id = map_container.attr('id');
      var map = new google.maps.Map(document.getElementById(map_container_id), mapOptions);
      var marker = new google.maps.Marker({
        position: myLatlng,
        animation: google.maps.Animation.DROP,
        title: markerTitle
      });
      var contentString = '<div class="gmap_dialog"><h5>'+dialogTitle+'</h5></div>';
      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });
      // Adding event on marker on click.
      google.maps.event.addListener(marker, "click", function(){infowindow.open(map,marker);});
      // Setting a timeout to get a kind of entrance effect.
      setTimeout(function(){marker.setMap(map);},1800);
      setTimeout(function(){infowindow.open(map,marker);},2500);
    },
    loadGMapLib: function() {
      var gmapApiKey = Drupal.settings.umnw_gmap.conf.umnw_gmap_gmapApiKey;
      var callback = "Drupal.behaviors.umnw_gmap.map_init";
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://maps.googleapis.com/maps/api/js?key="+gmapApiKey+"&sensor=true&callback="+callback;
      document.body.appendChild(script);
    }
  };
})(jQuery, Drupal, this, this.document);