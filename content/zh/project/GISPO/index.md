---
title: 全球综合可持续电力系统优化模型（GISPO）
summary: 面向全球净零电力系统转型的高时空分辨率规划优化模型。
date: 2026-05-04
authors:
  - admin
tags:
  - GISPO
  - Global
  - Power model
  - Net zero
  - Renewable energy
image:
  caption: ''
---

GISPO 是面向全球电力系统低碳转型的规划优化框架，在网格尺度刻画可再生能源资源，并以全年 8760 小时分辨率模拟电力系统运行。模型能够在统一框架下协同优化发电装机、储能、输电、稳定电源与碳管理技术，服务于全球净零电力系统路径研究。

该模型支撑了 Nature Energy 论文 **Integrated planning of net-zero power systems for all**，用于分析在满足全球基本电力需求的同时实现净零电力系统的可行路径。

## 数据与代码

- 源代码与绘图复现脚本：[NetZero2050](https://github.com/mrziheng/NetZero2050)
- 全球可再生能源资源潜力数据：[GlobalRenewableEnergyResource](https://github.com/mrziheng/GlobalRenewableEnergyResource)
- GISPO 基准情景线性规划文件：[Zenodo 10.5281/zenodo.17618090](https://doi.org/10.5281/zenodo.17618090)

## 模型范围

- 全球陆上风电、海上风电、集中式光伏和分布式光伏资源评估。
- 电力系统容量扩张与全年逐小时运行优化。
- 能源可及性、土地利用、储能、跨国输电、技术贸易壁垒、碳捕集与系统成本分析。
