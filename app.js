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


console.timeEnd("Algo")
