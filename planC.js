const calculator = require('./calculator')

const smouthie = ['oats 100', 'cocoa 20', 'almond-milk 100', 
                    'fruits 1', 'almonds 10', 'cashews 10']
const afternoon = ['muesli 120', 'almond-milk 100', 'eggs 2', 'scoups 1', 'fruits 1']

const plan = [
    ...smouthie, 'scoups 1',
    'chicken-breast 550',
    'pasta 180',
    ...smouthie, 'cheese 50',
    ...afternoon
]

const macros = calculator(plan)
console.log(macros)