document.addEventListener("DOMContentLoaded", function () {
    const config = window.mapConfig;
  
    // 初始化地图
    const map = L.map('map').setView([20, 0], 2);
  
    // 添加底图
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);
  
    // 获取颜色函数（基于配置）
    function getColor(value) {
      const ranges = config.colorRanges;
      const colors = config.colorPalette;
  
      for (let i = 0; i < ranges.length; i++) {
        if (value <= ranges[i]) {
          return colors[i];
        }
      }
      return colors[colors.length - 1];
    }
  
    // 加载 GeoJSON 数据
    fetch(config.geojsonPath)
      .then(response => response.json())
      .then(data => {
        // 创建 GeoJSON 图层
        const geojsonLayer = L.geoJSON(data, {
          style: feature => ({
            color: getColor(feature.properties[config.colorKey]),
            weight: 2,
            fillOpacity: 0.7
          }),
          onEachFeature: function (feature, layer) {
            const popupContent = Object.entries(feature.properties)
              .map(([k, v]) => `<strong>${k}:</strong> ${v}`).join('<br>');
            layer.bindPopup(popupContent);
          }
        }).addTo(map);
  
        // 自动缩放地图
        map.fitBounds(geojsonLayer.getBounds());
  
        // 渲染图例
        const legendContent = document.getElementById('legend-content');
        const ranges = config.colorRanges;
        const colors = config.colorPalette;
  
        let html = '';
        for (let i = 0; i < colors.length; i++) {
          const lower = i === 0 ? '≤' : ranges[i - 1];
          const upper = i < ranges.length ? ranges[i] : '∞';
          html += `
            <span>
              <i style="width: 20px; height: 20px; background-color: ${colors[i]}; display: inline-block;"></i>
              ${lower} - ${upper}
            </span><br>
          `;
        }
        legendContent.innerHTML = html;
      })
      .catch(error => console.error('加载 GeoJSON 失败:', error));
  });