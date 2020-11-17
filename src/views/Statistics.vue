<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <!-- Card stats -->
        <b-row>
        <b-col xl="3" md="6">
          <stats-card title="총 레시피수"
                      type="gradient-red"
                      sub-title="350,897"
                      icon="ni ni-bullet-list-67"
                      class="mb-4">

            <template slot="footer">
              <b-progress :value="40" :max="max" class="mb-3"></b-progress>
              <span class="text-success mr-2">최근 10 분 전</span>
            </template>
          </stats-card>
        </b-col>
        <b-col xl="3" md="6">
          <stats-card title="총 리뷰글수"
                      type="gradient-orange"
                      sub-title="2,356"
                      icon="ni ni-chart-pie-35"
                      class="mb-4">

            <template slot="footer">
              <b-progress :value="20" :max="max" class="mb-3"></b-progress>
              <span class="text-success mr-2">최근 20 분 전</span>
            </template>
          </stats-card>
        </b-col>
        <b-col xl="3" md="6">
          <stats-card title="월 방문자 수"
                      type="gradient-green"
                      sub-title="260"
                      icon="ni ni-money-coins"
                      class="mb-4">

            <template slot="footer">
               <b-progress :value="30" :max="max" class="mb-3"></b-progress>
              <span class="text-danger mr-2">* 09.01 ~ 10.01 기준</span>
            </template>
          </stats-card>

        </b-col>
        <b-col xl="3" md="6">
          <stats-card title="접속중인 회원 수"
                      type="gradient-info"
                      sub-title="90"
                      icon="ni ni-circle-08"
                      class="mb-4">

            <template slot="footer">
              <b-progress :value="90" :max="max" class="mb-3"></b-progress>
              <span class="text-success mr-2">실시간</span>
              <span class="text-nowrap">접속회원 보기</span>
            </template>
          </stats-card>
        </b-col>
      </b-row>
    </base-header>

    <b-container fluid class="mt--7">

    </b-container>
  </div>
</template>
<script>

  export default {
    data() {
      return {
        max: 100
      }
    },
    methods: {
      initMap(google) {
        let map, lat = 40.748817, lng = -73.985428, color = "#5e72e4";
        map = document.getElementById('map-custom');

        let myLatlng = new google.maps.LatLng(lat, lng);
        let mapOptions = {
          zoom: 12,
          scrollwheel: false,
          center: myLatlng,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          styles: [{
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [{ "color": "#444444" }]
          }, {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [{ "color": "#f2f2f2" }]
          }, {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [{ "visibility": "off" }]
          }, {
            "featureType": "road",
            "elementType": "all",
            "stylers": [{ "saturation": -100 }, { "lightness": 45 }]
          }, {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [{ "visibility": "simplified" }]
          }, {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [{ "visibility": "off" }]
          }, {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [{ "visibility": "off" }]
          }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": color }, { "visibility": "on" }] }]
        }

        map = new google.maps.Map(map, mapOptions);

        let marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          animation: google.maps.Animation.DROP,
          title: 'Hello World!'
        });

        let contentString = '<div class="info-window-content"><h2>Argon Dashboard PRO</h2>' +
          '<p>A beautiful premium dashboard for Bootstrap 4.</p></div>';

        let infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        google.maps.event.addListener(marker, 'click', function () {
          infowindow.open(map, marker);
        });
      }
    },
    mounted() {
      GoogleMapsLoader.load(google => {
        this.initMap(google);
      });
    }
  };
</script>
