---
title: Energy Resource Assessment Model (E-RAM)
summary: Geospatial data engine that turns climate, land, hydro, biomass, and geology data into model-ready energy resource potentials.
date: 2025-02-25
math: true
authors:
  - admin
tags:
  - E-RAM
  - Renewable energy
  - Resource assessment
  - Geospatial data
image:
  caption: ''
---

E-RAM is a high-resolution geospatial resource-assessment workflow for power-system planning. It converts meteorological reanalysis, land-cover maps, terrain data, hydrological records, biomass datasets, and geological information into model-ready resource potential datasets for GISPO, CISPO, RESPO, and related planning models.

The workflow is designed to answer a practical planning question: where can low-carbon energy and storage resources be developed, how much capacity is technically available, and how does their hourly or annual availability vary across space?

## Scope

E-RAM evaluates five resource groups:

- Wind power, including onshore and offshore wind.
- Solar PV, including utility-scale PV and distributed rooftop PV.
- Hydropower and pumped hydro storage.
- Biomass energy from agricultural, forestry, and grass residues.
- Carbon sequestration potential in deep saline aquifers for CCS and BECCS analysis.

The standard global workflow is aligned with ERA5 meteorological data at 0.25° x 0.25° spatial resolution and hourly temporal resolution. Where needed, finer inputs are aggregated upward, including 300 m land-cover pixels, building and population datasets, river networks, digital elevation models, and geological basin maps.

## Wind Resource Module

The wind module estimates hourly capacity factors and installable capacity for onshore and offshore wind. ERA5 wind fields at 10 m and 100 m are extrapolated to turbine hub height using a vertical wind profile. Air-density corrections are applied so observed wind speed can be converted to an equivalent standard-density wind speed.

Hourly generation is then calculated from normalized turbine power curves. The current workflow uses representative modern turbines for onshore and offshore applications and applies corrections for wake and electrical losses, low-temperature shutdown, cut-out wind speed, and restart hysteresis after extreme wind events.

Suitable development area is derived from land-cover and marine spatial filters. The screening removes protected areas and applies restrictions related to slope, elevation, land-use class, biodiversity protection, shipping lanes, and water depth. Open, base, and conservative scenarios can be used to reflect different assumptions about land availability.

## Solar PV Module

The solar module estimates hourly capacity factors for both utility-scale and distributed PV using ERA5 shortwave radiation, air temperature, and near-surface wind speed. The workflow calculates module temperature, DC output, inverter conversion, and AC output using a fixed-tilt PV representation and PVWatts-style inverter behavior.

Utility-scale PV potential is determined from suitable land area and installation-density assumptions, with spacing and tilt constraints used to avoid panel shading. Distributed rooftop PV is assessed separately by estimating usable rooftop area from building footprint, population, nightlight, and road-network indicators. The model supports multiple rooftop-availability assumptions so urban PV potential can be tested under different adoption scenarios.

## Hydropower and Pumped Storage

The hydropower module combines existing and under-construction plant inventories with a global search for new potential dam sites. Candidate sites are placed along river networks, multiple dam heights are tested, reservoir inundation is simulated from digital elevation data, and environmental flow requirements are preserved before generation and cost are calculated.

Candidate hydropower projects are screened by levelized cost, protected-area overlap, population displacement, and spatial conflicts among reservoirs. In the current global setup, the workflow identifies more than 1,500 GW of untapped hydropower potential, bringing total assessed installed and potential capacity to approximately 2,811 GW when existing capacity is included.

The pumped hydro storage module builds from a global greenfield PHS atlas and existing or planned project databases. Potential sites are optimized over power capacity and storage duration, then filtered for protected areas, high-density urban areas, primary tropical rainforests, large lakes, built-up land, disputed territories, and conflicts with existing hydropower reservoirs. Under the current screening assumptions, undeveloped PHS potential exceeds 10,000 GW for sites below the selected LCOS threshold.

## Biomass Resource Module

The biomass module estimates technical fuel potential from agricultural, forestry, and grass residues while avoiding direct competition with food production or ecological return needs. Agricultural residues are calculated for 14 major crops using gridded production data, lower heating values, residue-to-product ratios, and collectible fractions. The current global assessment estimates about 72.8 EJ per year from agricultural residues.

Forestry and grass residues are assessed from net primary production and land-cover data, with collectible fractions, ecological return ratios, and physical losses included. The current workflow estimates approximately 132 EJ per year from forestry residues and 9 EJ per year from grass residues.

## Carbon Sequestration Module

The carbon-storage module estimates deep saline aquifer storage potential for CCS and BECCS modeling. It combines sedimentary basin area, effective area ratios, aquifer thickness, porosity, CO2 density, and storage-efficiency assumptions to estimate geological storage capacity.

In the current global configuration, assessed deep saline aquifer storage potential is approximately 3,676 Gt CO2. The resulting dataset can be connected to power-system models through carbon source-sink matching, transport-distance calculation, injection-rate assumptions, and annual carbon-storage constraints.

## Outputs

E-RAM produces model-ready datasets including:

- Hourly capacity-factor profiles for wind and solar PV.
- Gridded installable capacity potential for renewable resources.
- Site-level hydropower and pumped-storage potential with cost screening.
- Biomass fuel potential by residue type.
- Carbon sequestration potential and storage-site attributes.
- Scenario-specific resource datasets for open, base, and conservative siting assumptions.

Outputs can be stored as NetCDF, GeoTIFF, CSV, or model-specific tables, allowing them to feed directly into GISPO, CISPO, RESPO, or other energy-system optimization workflows.
