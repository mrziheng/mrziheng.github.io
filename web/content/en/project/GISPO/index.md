---
title: Global Integrated Sustainable Power-system Optimization Model (GISPO)
summary: A global high-resolution planning model that co-optimizes renewable siting, 8760-hour operations, storage, transmission, firm generation, carbon management, and energy-access targets for net-zero power-system studies.
date: 2026-05-04
math: true
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

GISPO is a global power-system optimization framework for studying inclusive net-zero electricity systems. It connects geospatial renewable-resource assessment with a capacity-expansion and operational dispatch model, so that technology investment, hourly operation, transmission, storage, carbon management, and demand-side decisions can be optimized within one consistent planning framework.

The model supports the Nature Energy study **Integrated planning of net-zero power systems for all**, which examines how global electricity systems can reach net-zero emissions while meeting universal electricity needs for decent living standards.

## Model Structure

GISPO represents the power system through three nested spatial layers: grid regions, technology-specific resource sites, and load or network nodes. Renewable technologies are modeled at cell level for wind and solar PV, while hydropower is represented at dam-site level. The model then aggregates site-level generation into grid-level power balance, storage, transmission, reserve, inertia, and carbon constraints.

The technology portfolio includes onshore and offshore wind, utility-scale and distributed solar PV, run-of-river and reservoir hydropower, coal, natural gas, biomass, nuclear power, lithium-ion batteries, pumped hydro storage, direct air capture, and carbon capture, transport, and storage. Thermal and biomass units can be represented with or without CCS, allowing fossil CCS, BECCS, and negative-emission pathways to be compared within the same optimization problem.

## Optimization Objective

The objective is to minimize annual system-wide cost under engineering, economic, and policy constraints. The cost function includes annualized investment and fixed operation and maintenance costs for generation, storage, transmission, substations, spur lines, DAC, and carbon-management assets, as well as variable operation, fuel use, start-up and shut-down, ramping, carbon capture, CO2 transport, and sequestration costs.

This formulation allows GISPO to compare trade-offs among local renewable development, long-distance transmission, storage duration, dispatchable low-carbon generation, demand response, and carbon removal. Because the model operates at hourly resolution across a full year, it can capture seasonal and diurnal variability rather than relying only on annual energy balances.

## Core Constraints

- Renewable output is bounded by hourly capacity factors and site-level capacity potential for wind, solar PV, and hydropower resources.
- Hydropower operation tracks inflow, reservoir storage, generation flow, spillage, and reservoir-level limits for reservoir plants.
- Intra-grid and inter-grid transmission constraints connect renewable sites, substations, load centers, and neighboring grids while accounting for line capacity and distance-related losses.
- Thermal and nuclear units include installed units, online units, start-up, shut-down, minimum output, ramping, fuel consumption, and unit-commitment-like operating limits.
- Storage operation tracks charge, discharge, state of charge, self-discharge, duration, reserve provision, and cyclic consistency between the beginning and end of the modeled year.
- Hourly power balance requires local generation, storage discharge, and imported electricity to meet demand and carbon-removal electricity consumption.
- Reliability constraints include spinning reserve, capacity reserve when needed, and inertia requirements under high renewable penetration.
- Carbon constraints cover annual emissions limits, DAC electricity demand, carbon source-sink matching, transport routes, and storage-site injection limits.
- Demand-response variables can shift load within a defined temporal window while preserving total energy consumption.

## Inputs and Outputs

GISPO relies on high-resolution renewable-resource potential, hourly capacity-factor profiles, technology cost assumptions, existing infrastructure, demand profiles, storage potential, and carbon sequestration potential. These inputs are designed to be transparent and reproducible, so the model can be used for scenario analysis rather than only for a single deterministic pathway.

Typical outputs include optimal installed capacity by technology and grid, hourly dispatch, storage operation, inter-grid power flows, curtailment, transmission expansion, carbon capture and storage flows, system cost, emissions, and indicators for energy access and land-use pressure.

## Data and Code

- Source code and figure-reproduction scripts: [NetZero2050](https://github.com/mrziheng/NetZero2050)
- Global renewable resource potential data: [GlobalRenewableEnergyResource](https://github.com/mrziheng/GlobalRenewableEnergyResource)
- GISPO base-scenario LP files: [Zenodo 10.5281/zenodo.17618090](https://doi.org/10.5281/zenodo.17618090)

## Research Uses

- Designing global net-zero electricity pathways that include energy-access constraints.
- Quantifying the need for 8760-hour flexibility, storage, transmission, firm generation, and demand response.
- Testing how land-use restrictions, technology trade barriers, CCS availability, and carbon-removal options change system cost and feasibility.
- Linking geospatial renewable-resource data with planning decisions at a scale suitable for global scenario comparison.
