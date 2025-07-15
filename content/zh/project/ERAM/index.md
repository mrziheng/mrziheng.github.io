---
title: ☀️ 能源资源量评估模型（E-RAM）
summary: E-RAM是一个适应于全球电力系统规划建模的高分辨率资源评估模型，主要包括风电、光伏、水电、生物质和碳封存等。
date: 2025-05-25
math: true
authors:
  - admin
tags:
  - ERAM
  - Renewable energy
  - Resource assessment
image:
  caption: ''
---

好的，这是为您准备的关于ERAM模型的Markdown文档。

-----

# ERAM（能源资源评估模型）概览

[cite\_start]能源资源评估模型（ERAM）是一个旨在评估全球可再生能源潜力的综合框架 [cite: 1, 2][cite\_start]。该模型专注于多种能源形式，包括陆上/海上风能、公用事业规模/分布式光伏、水电、抽水蓄能、生物质能以及碳封存 [cite: 4, 625, 697, 758][cite\_start]。ERAM通过整合高分辨率的气象数据和地理空间信息，对各种能源的发电潜力和装机容量进行时空显式表征，充分考虑了大气动态和土地利用限制等因素 [cite: 7, 10]。

[cite\_start]该评估框架主要包含两个核心部分 [cite: 5, 6]：

1.  [cite\_start]**小时级发电潜力**：通过容量因子（Capacity Factor, CF）来定义，即实际输出功率与额定装机容量的比率，它是一个衡量时间变化和发电效率的标准化指标 [cite: 5]。
2.  [cite\_start]**最大装机容量**：通过将装机密度（$MW/km^2$）与技术上适宜的开发面积（$km^2$）相乘得出 [cite: 6]。

-----

## **S2.1 风能与太阳能资源评估**

### **S2.1.1 风力发电潜力评估**

[cite\_start]风力发电的潜力主要取决于风力涡轮机的功率输出曲线与轮毂高度的风速之间的相互作用 [cite: 12]。

#### **风力涡轮机模型与参数**

[cite\_start]本研究分别采用了 **2020 ATB NREL Reference 5.5 MW 175** 和 **IEA 15MW 240 RWT** 涡轮机模型来评估陆上和海上风电情景 [cite: 15][cite\_start]。其关键技术参数如下表所示 [cite: 16, 18]：

| 技术参数 | 2020ATB NREL Reference 5.5MW 175 | IEA 15MW 240 RWT |
| :--- | :--- | :--- |
| 额定容量 (MW) | [cite\_start]5.5 [cite: 18] | [cite\_start]15.0 [cite: 18] |
| 轮毂高度 (m) | [cite\_start]120.0 [cite: 18] | [cite\_start]150.0 [cite: 18] |
| 切入风速 (m/s) | [cite\_start]3.25 [cite: 18] | [cite\_start]3.00 [cite: 18] |
| 切出风速 (m/s) | [cite\_start]25.0 [cite: 18] | [cite\_start]25.0 [cite: 18] |
| 额定风速 (m/s) | [cite\_start]10.0 [cite: 18] | [cite\_start]10.6 [cite: 18] |

[cite\_start]\<center\>\<em\>表格 S2: GISPO选定的风力涡轮机技术参数 [cite: 17]\</em\>\</center\>

#### **容量因子计算**

[cite\_start]涡轮机的功率输出是一个关于轮毂高度风速（$v\_w^h$）的分段函数 [cite: 19, 22]：

$$P(v_{w}^{h})=\begin{cases}0,&v_{w}^{h}<v_{cut-in} \text{ or } v_{w}^{h}\ge v_{cut\cdot out}\\ f(v_{w}^{h}),&v_{cut-in}\le v_{w}^{h}<v_{rated}\\ P_{rated},&v_{rated}\le v_{w}^{h}<v_{cut\cdot out}\end{cases}$$
[cite\_start]\<center\>\<em\>(公式 S2-1) [cite: 23, 24]\</em\>\</center\>

[cite\_start]其中，当风速低于切入风速或高于切出风速时，发电量为零 [cite: 25][cite\_start]。在切入和额定风速之间，功率单调增加 [cite: 26][cite\_start]。达到额定风速后，涡轮机以最大效率运行 [cite: 27][cite\_start]。下图展示了不同涡轮机模型的归一化功率输出曲线 [cite: 28, 29]。

[cite\_start]\<center\>\<em\>图 S3: 不同风力发电模型的归一化功率输出曲线 [1]。 (a) 陆上风电 (b) 海上风电 [cite: 65]\</em\>\</center\>

[cite\_start]为了精确计算，模型采用了欧洲中期天气预报中心（ECMWF）的ERA5再分析气象数据集，该数据集提供全球$0.25^\\circ \\times 0.25^\\circ$分辨率的逐小时数据 [cite: 96][cite\_start]。由于ERA5不直接提供轮毂高度（陆上120米，海上150米）的风速，模型使用垂直风功率定律进行估算 [cite: 97]：

$$v_{w}^{h}=v_{w}^{100}\times(\frac{z_{h}}{z_{100}})^{\alpha}$$
[cite\_start]\<center\>\<em\>(公式 S2-2) [cite: 98, 99]\</em\>\</center\>

[cite\_start]此外，模型还考虑了空气密度的影响，将实测风速转换为标准空气密度下的等效风速，以获得更准确的功率输出 [cite: 103, 104][cite\_start]。最终，容量因子还会根据尾流效应、电气损耗（-5%）以及极端低温（\<-30°C）等因素进行调整 [cite: 131, 132]。

[cite\_start]下图展示了2019年全球陆上及海上风电的年平均容量因子分布 [cite: 140]。

[cite\_start]\<center\>\<em\>图 S5: 2019年每个网格单元的陆上和海上风电年平均容量因子 (0-1) [cite: 149]\</em\>\</center\>

-----

### **S2.1.2 太阳能光伏发电潜力评估**

[cite\_start]模型采用固定倾角光伏系统模型来量化太阳能的每小时容量因子 [cite: 151][cite\_start]。评估依据ERA5提供的地面短波辐射、地表温度和风速等气象数据 [cite: 153]。

#### **容量因子计算**

[cite\_start]光伏直流功率输出与额定容量的比率由以下公式计算 [cite: 154]：

$$\frac{P_{dc}}{P_{dc0}}=[1+\gamma\times(T_{cell}(t)-T_{std})]\times\frac{ssrd(t)}{ssrd_{std}}\times\eta_{sys}$$
[cite\_start]\<center\>\<em\>(公式 S2-9) [cite: 155, 156]\</em\>\</center\>

其中，

  - [cite\_start]$T\_{cell}(t)$ 是光伏电池温度，受环境温度、太阳辐射和风速影响 [cite: 158, 164]。
  - [cite\_start]$\\gamma$ 是电池的温度系数，设定为-0.005/°C [cite: 159]。
  - [cite\_start]$ssrd(t)$ 是小时级的地面短波辐射 [cite: 162]。
  - [cite\_start]$\\eta\_{sys}$ 是直流电气系统效率，设定为0.86 [cite: 163]。

[cite\_start]交流电输出则通过PVWatts模型进一步计算，考虑了逆变器的效率 [cite: 172, 176][cite\_start]。下图显示了2019年全球太阳能光伏的年平均容量因子 [cite: 184]。

[cite\_start]\<center\>\<em\>图 S6: 2019年每个网格单元的太阳能光伏年平均容量因子 (0-1) [cite: 192]\</em\>\</center\>

-----

### **S2.1.3 风能与公用事业规模光伏的适宜开发区域评估**

[cite\_start]装机容量潜力的估算基于适宜的土地面积和设定的装机密度 [cite: 194][cite\_start]。模型使用欧洲航天局（ESA）2020年全球300米分辨率的土地覆盖数据作为基础地图 [cite: 195]。

#### **适宜性评估框架**

[cite\_start]评估过程首先会排除自然保护区和生物多样性保护区 [cite: 199][cite\_start]。随后，根据坡度、海拔、水深以及航道（仅海上风电）等自然条件，在 **开放、基础、保守** 三种情景下进一步筛选不适宜的区域 [cite: 200, 201][cite\_start]。下图说明了网格单元与土地利用像素之间的关系 [cite: 195]。

[cite\_start]\<center\>\<em\>图 S7: 网格单元和土地利用像素之间关系的示意图 [cite: 224]\</em\>\</center\>

[cite\_start]下表列出了不同情景下针对不同土地利用类型的适宜性因子，这些因子代表了可在像素区域内用于部署能源设施的面积比例 [cite: 248, 249]。

| ID | 土地利用类型 | 陆上风电适宜性 (%) (C/B/O) | 公用事业光伏适宜性 (%) (C/B/O) |
| :--- | :--- | :--- | :--- |
| 10 | [cite\_start]旱作农田 [cite: 254] | [cite\_start]60 / 80 / 100 [cite: 254] | [cite\_start]3 / 5 / 7 [cite: 254] |
| 40 | [cite\_start]镶嵌式自然植被/农田 [cite: 254] | [cite\_start]5 / 10 / 15 [cite: 254] | [cite\_start]3 / 5 / 7 [cite: 254] |
| 120 | [cite\_start]灌木地 [cite: 254] | [cite\_start]40 / 60 / 80 [cite: 254] | [cite\_start]17.7 / 5 / 3 [cite: 254] |
| 130 | [cite\_start]草地 [cite: 254] | [cite\_start]80 / 70 / 90 [cite: 254] |  [cite\_start]/ 5 / 3 [cite: 254] |
| 200 | [cite\_start]裸地区域 [cite: 254] | [cite\_start]80 / 90 / 100 [cite: 254] | [cite\_start]30 / 40 / 50 [cite: 254] |

[cite\_start]\<center\>\<em\>表格 S4: 用于确定陆上风电和公用事业规模光伏适宜区域的各土地利用类型适宜性因子（部分数据） [cite: 252]\</em\>\</center\>

[cite\_start]以下地图展示了在三种情景下，全球风能和公用事业规模光伏的适宜开发面积分布 [cite: 251]。

**风能适宜开发面积 ($km^2$)**
[cite\_start]\<center\>\<em\>图 S9: 在开放(a)、基础(b)和保守(c)情景下，每个网格单元($0.25^\\circ \\times 0.25^\\circ$)的陆上和海上风电适宜面积($km^2$) [cite: 284]\</em\>\</center\>

**公用事业规模光伏适宜开发面积 ($km^2$)**
[cite\_start]\<center\>\<em\>图 S10: 在开放(a)、基础(b)和保守(c)情景下，每个网格单元($0.25^\\circ \\times 0.25^\\circ$)的公用事业规模光伏适宜面积($km^2$) [cite: 314]\</em\>\</center\>

-----

### **S2.1.4 分布式光伏的适宜开发区域评估**

[cite\_start]分布式光伏（DPV）主要指与建筑集成的光伏系统（BIPV） [cite: 317][cite\_start]。其潜力评估的关键是估算全球每个网格单元的屋顶总面积 [cite: 318][cite\_start]。由于全球范围内直接测量屋顶面积存在挑战，模型采用**XGBoost回归模型**进行预测 [cite: 319, 320]。

#### **屋顶面积预测框架**

[cite\_start]该模型使用建成区面积（BA）、人口（POP）、道路长度（RL）和夜间灯光（NL）作为自变量，来预测屋顶面积（RA） [cite: 321][cite\_start]。下图展示了屋顶面积评估的整体框架 [cite: 322]。

[cite\_start]\<center\>\<em\>图 S11: 屋顶面积评估框架 [cite: 338]\</em\>\</center\>

[cite\_start]模型使用了来自微软AI、WorldPop、NASA等多个来源的全球GIS数据进行训练和评估 [cite: 339, 340, 341][cite\_start]。在测试数据集上，模型的决定系数（$R^2$）达到了**0.885**，平均绝对预测误差仅为$0.157 km^2$ [cite: 358, 364]。

[cite\_start]考虑到并非所有屋顶都适合安装光伏板，模型在开放、基础和保守三种情景下，分别采用了总屋顶面积的 **40%、35%和30%** 作为适宜开发的比例 [cite: 454]。

[cite\_start]下图展示了三种情景下全球分布式光伏的适宜开发面积 [cite: 455]。

[cite\_start]\<center\>\<em\>图 S15: 在开放(a)、基础(b)和保守(c)情景下，每个网格单元($0.25^\\circ \\times 0.25^\\circ$)的分布式光伏适宜面积($km^2$) [cite: 482]\</em\>\</center\>

-----

### **S2.1.5 总装机容量潜力评估**

[cite\_start]风能和太阳能的最终装机容量潜力，是通过将适宜的开发面积与特定技术的安装密度相乘得出的 [cite: 486]。

$$Cap_{g}^{max}=SA\times\mathcal{D}_{g}$$
[cite\_start]\<center\>\<em\>(公式 S2-15) [cite: 487, 488]\</em\>\</center\>

  - [cite\_start]**风电**：考虑到尾流效应，涡轮机间距通常为5-10倍转子直径 [cite: 492][cite\_start]。本研究采用**陆上风电4.0 $MW/km^2$** 和**海上风电5.0 $MW/km^2$** 的参考装机密度 [cite: 497]。
  - [cite\_start]**太阳能**：装机密度取决于光伏板的倾角、朝向和板间距，以避免阴影遮挡 [cite: 507, 512, 513][cite\_start]。模型假设单位面板功率容量为**161.9 $W/m^2$**，并结合一个“填充因子”（Packing Factor）来计算最终的装机密度 [cite: 552]。

下图为光伏板安装的评估示意图。

[cite\_start]\<center\>\<em\>图 S16: 太阳能光伏发电装机容量潜力评估示意图。 [cite: 551]\</em\>\</center\>

[cite\_start]以下地图分别展示了在三种情景下，全球风能、公用事业规模光伏和分布式光伏的装机容量潜力 [cite: 498, 553]。

**风能装机容量潜力 (GW)**
[cite\_start]\<center\>\<em\>图 S17: 在开放(a)、基础(b)和保守(c)情景下，每个网格单元的陆上和海上发电装机容量潜力(GW) [cite: 570]\</em\>\</center\>

**公用事业规模光伏装机容量潜力 (GW)**
[cite\_start]\<center\>\<em\>图 S18: 在开放(a)、基础(b)和保守(c)情景下，每个网格单元的公用事业规模光伏装机容量潜力(GW) [cite: 597]\</em\>\</center\>

**分布式光伏装机容量潜力 (MW)**
[cite\_start]\<center\>\<em\>图 S19: 在开放(a)、基础(b)和保守(c)情景下，每个网格单元的分布式光伏装机容量潜力(GW) [cite: 622]\</em\>\</center\>

-----

## **S2.2 水电与抽水蓄能评估**

### **水电**

[cite\_start]模型通过分析能源平准化成本（LCOE）来量化全球水电潜力 [cite: 626][cite\_start]。评估过程在MERIT河网数据上识别潜在坝址，并考虑了淹没区、环保、人口迁移和电网接入距离等多种约束 [cite: 627, 628][cite\_start]。筛选标准包括不与自然保护区重叠、迁移人口不超过5万人，且LCOE低于0.25美元/千瓦时 [cite: 630, 633][cite\_start]。结果显示，全球未开发的水电潜力超过1,500吉瓦 [cite: 633]。

[cite\_start]\<center\>\<em\>图 S20: 全球水电资源评估框架 [cite: 666]\</em\>\</center\>

[cite\_start]\<center\>\<em\>图 S21: 模型评估的已安装和潜在水电容量 [cite: 675]\</em\>\</center\>

### **抽水蓄能**

[cite\_start]抽水蓄能（PHS）的潜力评估基于一个包含616,000个潜在闭环站点的全球绿地地图集 [cite: 676, 677][cite\_start]。模型通过最小化储能平准化成本（LCOS）来确定每个站点的最佳装机容量 [cite: 680][cite\_start]。同时，评估排除了保护区、城市密集区、热带雨林等环境敏感区域 [cite: 683][cite\_start]。结果表明，全球未开发的抽水蓄能潜力超过10,000吉瓦（LCOS低于0.05美元/千瓦时） [cite: 685]。

[cite\_start]\<center\>\<em\>图 S22: 模型评估的抽水蓄能装机容量潜力 [cite: 695]\</em\>\</center\>

-----

## **S2.3 生物质能评估**

[cite\_start]生物质能源的潜力严格限制在农业、林业和草地残留物，以避免负面影响 [cite: 697]。

  - [cite\_start]**农业残留物**：评估了包括小麦、水稻、玉米在内的14种主要作物 [cite: 699][cite\_start]。使用空间生产分配模型2010（SPAM2010）的数据 [cite: 700][cite\_start]，并根据每种作物的热值（LHV）和残余物与产品比（RPR）计算其能源潜力 [cite: 702, 710]。
  - [cite\_start]**林业和草地残留物**：使用美国国家航空航天局（NASA）的净初级生产力（NPP）数据进行估算 [cite: 728]。

[cite\_start]下图展示了来自不同来源的生物质燃料潜力分布 [cite: 730]。

[cite\_start]\<center\>\<em\>图 S23: 农业(a)、林业(b)和草地(c)残留物的生物质燃料潜力评估结果 [cite: 754]\</em\>\</center\>

-----

## **S2.4 碳封存潜力评估**

[cite\_start]碳捕获与封存（CCS）被视为电力系统脱碳的一项关键技术 [cite: 758][cite\_start]。本研究重点评估了深层咸水层（DSAs）的二氧化碳封存潜力，因其巨大的全球容量 [cite: 761]。

[cite\_start]封存潜力的估算公式为 [cite: 762]：

$$V_{CO_{2}}=A\times\eta_{A}\times h\times\phi\times\rho_{CO_{2}}\times\eta_{E}$$
[cite\_start]\<center\>\<em\>(公式 S2-21) [cite: 763, 764]\</em\>\</center\>

其中，

  - [cite\_start]$A$ 是沉积盆地的地理面积 [cite: 765]。
  - [cite\_start]$\\eta\_A$ 是有效面积比（0.025） [cite: 765]。
  - [cite\_start]$h$ 是咸水层的平均总厚度（250米） [cite: 765]。
  - [cite\_start]$\\phi$ 是总体积孔隙度（0.2） [cite: 765]。
  - [cite\_start]$\\rho\_{CO\_2}$ 是储存条件下的二氧化碳密度（710 $kg/m^3$） [cite: 765]。
  - [cite\_start]$\\eta\_E$ 是有效二氧化碳储存比（0.05） [cite: 765]。

[cite\_start]分析估计，全球深层咸水层的二氧化碳储存潜力约为**3,676吉吨** [cite: 767][cite\_start]。下图展示了其地理分布 [cite: 768]。

[cite\_start]\<center\>\<em\>图 S24: 本研究评估的深层咸水层碳封存潜力 [cite: 775]\</em\>\</center\>