---
title: ""
layout: "map"
---

<div id="map" style="height: 90vh;"></div>

<!-- 引入 Leaflet -->
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css">
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

<!-- 自定义样式 -->
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

<!-- 地图脚本 -->
<script>
document.addEventListener("DOMContentLoaded", function () {
  // 初始化地图
  var map = L.map("map").setView([20, 0], 2);

  // 添加底图
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(map);

  // 定义颜色映射函数
  function getColor(cf) {
    const min = 0;
    const max = 1;
    const hue = 210; // 蓝色系
    const saturation = 70;
    const lightness = 100 - (cf - min) / (max - min) * 60; // cf越大，越深
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }

  // 样式函数
  function getStyle(feature) {
    return {
      weight: 1,
      color: "#333",
      fillOpacity: 0.7,
      fillColor: getColor(feature.properties.cf)
    };
  }

  // 弹窗信息
  function onEachFeature(feature, layer) {
    if (feature.properties) {
      const props = Object.entries(feature.properties)
        .map(([k, v]) => `<strong>${k}:</strong> ${v}`).join("<br>");
      layer.bindPopup(props);
    }
  }

  // 图例控件
  var legend = L.control({ position: "bottomright" });

  legend.onAdd = function (map) {
    var div = L.DomUtil.create("div", "info legend");
    var grades = [0, 0.2, 0.4, 0.6, 0.8, 1];
    var labels = [];

    for (var i = 0; i < grades.length; i++) {
      div.innerHTML +=
        '<i style="background:' + getColor(grades[i]) + '"></i> ' +
        grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
  };

  legend.addTo(map);

  // 加载 GeoJSON
  fetch("/data/global-grid.geojson")
    .then(response => response.json())
    .then(data => {
      L.geoJSON(data, {
        style: getStyle,
        onEachFeature: onEachFeature
      }).addTo(map);
    })
    .catch(error => console.error("加载 GeoJSON 出错:", error));
});
</script>