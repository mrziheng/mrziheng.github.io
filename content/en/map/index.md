---
title: "全球格点数据地图"
layout: "map"
---

<div id="map" style="height: 90vh;"></div>

<!-- 引入Leaflet CSS -->
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css">
<!-- 引入自定义CSS -->
<style>
#map { 
  height: 90vh; 
  width: 100%;
}
.info {
  padding: 6px 8px;
  font: 14px/16px Arial, Helvetica, sans-serif;
  background: white;
  background: rgba(255,255,255,0.8);
  box-shadow: 0 0 15px rgba(0,0,0,0.2);
  border-radius: 5px;
}
</style>

<!-- 引入Leaflet JS -->
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

<!-- 自定义地图脚本 -->
<script>
document.addEventListener("DOMContentLoaded", function() {
  // 初始化地图
  var map = L.map('map').setView([20, 0], 2);

  // 添加底图
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  // 加载GeoJSON数据
  fetch('/data/pv_cf_2020.geojson')
    .then(response => response.json())
    .then(data => {
      // 创建样式函数
      function getStyle(feature) {
        return {
          weight: 1,
          opacity: 1,
          color: '#333',
          fillOpacity: 0.6,
          fillColor: '#555'
        };
      }

      // 创建弹窗内容
      function onEachFeature(feature, layer) {
        if (feature.properties) {
          layer.bindPopup(() => {
            const props = Object.entries(feature.properties)
              .map(([k,v]) => `<strong>${k}:</strong> ${v}`).join('<br>');
            return props;
          });
        }
      }

      // 添加GeoJSON图层
      L.geoJSON(data, {
        style: getStyle,
        onEachFeature: onEachFeature
      }).addTo(map);
    })
    .catch(error => console.error('Error loading GeoJSON:', error));
});
</script>