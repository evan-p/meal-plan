const calculator = require('./calculator')

const smouthie1 = ['oats 130', 'cocoa 10', 'milk 200', 
                    'bananas 2', 'almonds 10', 'cashews 10']
const smouthie2 = ['oats 120', 'cocoa 10', 'milk 150', 'bananas 1', 'cashews 10']
const smouthie3 = ['oats 80', 'cocoa 10', 'milk 100', 'bananas 1']

let carbs = 'sweet-potato 700'
// carbs = 'basmati 180'

const eggs = ['eggs 3']

const plan = [
    ...smouthie1,
    'chicken-breast 200',
    carbs,
    ...smouthie2,
    ...smouthie3, // or eggs on rest days
    // ...eggs,
    'chicken-breast 200'
]

const macros = calculator(plan)
console.log(macros)