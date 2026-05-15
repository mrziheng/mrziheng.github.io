---
title: China Integrated Sustainable Power-system Optimization Model (CISPO)
summary: China-focused planning model for carbon-neutral power transition, resolving provincial grids, hourly operations, flexibility, and CCS/DAC.
date: 2025-03-25
math: true
authors:
  - admin
tags:
  - CISPO
  - China
  - Power model
  - Carbon neutrality
  - Renewable energy
image:
  caption: ''
---

CISPO is a China-focused power-system planning and operation model for studying carbon-neutral electricity transition pathways. It links site-level renewable-resource assessment with provincial grid-level capacity expansion and 8760-hour operational dispatch, allowing renewable development, storage, hydropower, transmission, firm generation, CCS, DAC, and reliability constraints to be optimized together.

The model has been used to study China's 2060 carbon-neutral power-system transition, the role of pumped storage and hydropower flexibility, renewable-energy spatial deployment, carbon capture and storage, land-use constraints, and market or policy design under high renewable penetration.

## Model Structure

CISPO represents China through provincial power grids, renewable and hydropower sites, substations, load centers, transmission corridors, and carbon-storage locations. Wind, solar PV, concentrating solar power, and hydropower are modeled at spatially resolved resource sites, while thermal, nuclear, storage, DAC, and carbon-management technologies are represented at grid level.

The technology set includes onshore and offshore wind, utility-scale and distributed solar PV, concentrating solar power, run-of-river and reservoir hydropower, coal, natural gas, biomass, nuclear power, lithium-ion batteries, pumped hydro storage, direct air capture, and carbon capture, transport, and storage. Thermal and biomass plants can be modeled with or without CCS, supporting analysis of residual emissions and negative-emission options.

## Optimization Objective

The CISPO objective minimizes annual system cost under China's grid, resource, technology, and policy constraints. Cost terms include annualized capital investment, fixed and variable operation and maintenance, fuel consumption, unit start-up and shut-down, ramping, storage operation, AC and DC transmission, renewable spur lines, trunk lines, substations, DAC, CO2 capture, CO2 transport, and CO2 injection.

Compared with a purely energy-balance model, CISPO explicitly represents hourly operation and reliability requirements. This matters for carbon-neutral planning because high shares of wind and solar change not only annual generation needs, but also ramping needs, reserve requirements, inertia availability, curtailment, storage duration, and cross-provincial transmission value.

## Core Constraints

- Wind and solar PV output is limited by hourly capacity factors, site-level installation potential, and existing installed capacity.
- Concentrating solar power is represented with thermal storage, allowing solar collection, energy storage, and dispatchable output to be coupled.
- Hydropower operation captures reservoir inflow, generation flow, spillage, water storage, installed capacity, and dispatch limits.
- Renewable sites connect to substations and load centers through intra-grid transmission constraints; inter-grid AC and DC lines represent cross-provincial power exchange and losses.
- Thermal and nuclear units include online status, start-up, shut-down, minimum output, ramping limits, fuel use, and unit-level operating constraints.
- Storage constraints track charge, discharge, state of charge, storage duration, self-discharge, and reserve provision.
- Hourly power balance requires local generation, storage discharge, and imported power to meet demand and DAC electricity consumption.
- Upward and downward spinning reserve constraints represent operating flexibility needs from load and variable renewable forecast errors.
- Inertia constraints ensure enough synchronous or fast grid-forming resources remain online under high renewable penetration.
- Emissions constraints limit annual carbon emissions and interact with CCS, BECCS, DAC, carbon transport, and carbon storage capacity.

## Inputs and Outputs

CISPO combines meteorological data, land-use and siting constraints, renewable-resource potential, hydropower and pumped-storage potential, existing capacity, provincial demand profiles, technology costs, transmission assumptions, fuel prices, carbon-storage potential, and policy targets.

Typical outputs include optimal capacity expansion by province and technology, hourly dispatch, storage operation, hydropower generation and reservoir behavior, inter-provincial power flows, renewable curtailment, reserve provision, system cost, emissions, carbon captured and stored, and the spatial distribution of renewable deployment.

## Research Uses

- Long-term transition pathways for China's power sector under carbon-neutrality targets.
- Spatial coordination of wind, solar PV, CSP, hydropower, pumped storage, batteries, and cross-provincial transmission.
- Quantification of flexibility value from hydropower, pumped storage, demand response, and transmission.
- Evaluation of CCS, BECCS, DAC, and carbon-storage constraints in deeply decarbonized power systems.
- Analysis of capacity adequacy, market revenue sufficiency, and policy design under high renewable penetration.

## Related Publications

- **Integrated modeling for the transition pathway of China's power system**, *Energy & Environmental Science*, 2025.
- **Spatially resolved modeling of pumped storage and hydropower for China's carbon neutrality**, *Energy & Environmental Science*, 2026.
