const { readFileSync, writeFileSync } = require('fs')
const config = require(`../config/${process.env.CONFIG || 'mainnet'}.json`)
const Mustache = require('mustache')

console.log('subgraph.template.yaml', readFileSync('./subgraphs/subgraph.template.yaml', "utf-8"))
const subgraph = Mustache.render(readFileSync('./subgraphs/subgraph.template.yaml', 'utf-8'), config)
writeFileSync('subgraph.yaml', subgraph)
