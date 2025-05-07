---
title: "交互式地理信息地图"
date: 2023-10-01
layout: map
geojson_file: "pv_cf_2020.geojson"  # 替换为你的 GeoJSON 文件名（需放在 static/data/ 目录）
value_field: "cf"            # 替换为你的 GeoJSON 中要渲染的关键字段名
zoom_level: 2                   # 可选：初始地图缩放级别
center_lat: 20                  # 可选：地图初始纬度
center_lng: 0                   # 可选：地图初始经度
color_scheme: "#eafff5,#006400" # 可选：颜色渐变范围（从浅色到深色）
---