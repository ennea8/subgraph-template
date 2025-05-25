
# Subgraph Template for The Graph

This template allows for the dynamic generation of subgraph.yaml and provides flexible configuration options.

## Features

- Dynamically generates subgraph.yaml
- Highly configurable for various use case


## Usage

```bash

# prepare env
mv .env-cmdrc.example .env-cmdrc

# build
env-cmd -e dev:dexes npm run build

# deploy
env-cmd -e dev:dexes npm run deploy

```
