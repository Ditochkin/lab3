import {Cache} from './cache.js'

const cache = new Cache();
cache.setValue("Dog", "Druzhok", 1);
console.log(cache.getStatistic());