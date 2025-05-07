---
title: "交互地图"
layout: "maps"

geojson_files:
  - path: "/data/pv_cf_2020.geojson"
    field: "value"
    thresholds: [0, 1, 5, 10, 20, 50, 100]
    colors: ["#FFEDA0", "#FED976", "#FEB24C", "#FD8D3C", "#FC4E2A", "#E31A1C", "#BD0026", "#800026"]
---
