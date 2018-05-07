const nutrition = require('./nutrition')

const proteinCals = 4
const carbsCals = 4
const fatCals = 9

function getMacros(nutr, qnt){
    const factor = nutr.each ? 1 : 1/100
    return{
        protein: nutr.protein * factor * qnt,
        fat: nutr.fat * factor * qnt,
        carbs: nutr.carbs * factor * qnt,
        fiber: nutr.fiber * factor * qnt,
    }
}

function addMacros(m1, m2){
    return{
        protein: (m1.protein || 0) + (m2.protein || 0),
        fat: (m1.fat || 0) + (m2.fat || 0),
        carbs: (m1.carbs || 0) + (m2.carbs || 0),
        fiber: (m1.fiber || 0) + (m2.fiber || 0),
    }
}

function updateCals(m){
    m.calories = m.protein*4 + m.carbs*4 + m.fat*9
}

function updateComposition(m){
    m.composition = {
        protein: m.protein*4*100/m.calories,
        carbs: m.carbs*4*100/m.calories,
        fat: m.fat*9*100/m.calories,
    }
}

const nutritionMap = nutrition.reduce((out, o)=>{return {...out,...{[o.name]:o}}},{})

module.exports = plan=>{
    plan = plan.map(o=>{
        const splt = o.split(' ');
        return{
            name: splt[0],
            qnt: parseFloat(splt[1])
        }
    })
    const meals = {}
    let totalMacros = {}
    plan.forEach(o=>{
        meals[o.name] = meals[o.name] || {}
        const nutr = nutritionMap[o.name]
        if(nutr==null) throw 'unknown nutrition ' + o.name
        const macros = getMacros(nutr, o.qnt)
        meals[o.name] = addMacros(meals[o.name], macros)
        totalMacros = addMacros(totalMacros, macros)
        updateCals(meals[o.name])
    })
    updateCals(totalMacros)
    updateComposition(totalMacros)
    return {meals, totalMacros}
}