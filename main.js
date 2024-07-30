const names = ["non", "asal", "olma", "banan", "mashina", "aziza", "Gul"]
console.log(names)

const harfBor = []
const harfYoq = []

for (let index = 0; index < names.length; index++) {
    if (names[index].includes('n')) {
        harfBor.push(names[index])
    } else {
        harfYoq.push(names[index])
    }
}

console.log(harfBor);
console.log(harfYoq);