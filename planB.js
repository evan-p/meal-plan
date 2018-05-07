const calculator = require('./calculator')

const smouthie1 = ['oats 130', 'cocoa 10', 'almond-milk 200', 
                    'bananas 1', 'almonds 15', 'cashews 15']
const smouthie2 = ['oats 120', 'cocoa 10', 'almond-milk 200', 'bananas 1', 'cashews 15']
const smouthie3 = ['oats 100', 'cocoa 10', 'almond-milk 200', 'bananas 1', 'cashews 10']

let carbs = 'sweet-potato 700'
// carbs = 'basmati 180'

const eggs = ['eggs 3', 'bananas 1']

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