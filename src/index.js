'use strict'

const arr1 = [2,7,5,1,9,-10];
const arr2 = [4,2,7,10];

const set1 = new Set(arr1.concat(arr2))
const res = [...new Set([...arr1, ...arr2])]

