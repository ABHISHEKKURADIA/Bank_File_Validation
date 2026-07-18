console.time("Algo")

const fs = require("fs")
const Module = require("module")

let data = fs.readFileSync("./Mock_Data.csv", { encoding: 'utf-8' })

data = data.split(/\r?\n/)

let dict = {}

for (let i = 1; i < data.length; i++) {
    let tmp = data[i].split(",")
    if (tmp.length == 7) {
        let text = tmp[5].concat(tmp[6].replaceAll("-", ""))
        if (dict[text]) {
            dict[text] += 1
        }
        else {
            dict[text] = 1
        }
    }
}

Object.keys(dict).forEach(transaction => {
    let count = dict[transaction]
    if (count > 1) {
        console.log(`Account number ${transaction.slice(0,8)} having sort code ${transaction.slice(9,17)} has appeared ${count} times.`)
    }

});


console.timeEnd("Algo")
