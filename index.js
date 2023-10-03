/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")


const metreToFeet = 3.281
const litresToGallons = 0.264 
const kilogramsToPounds = 2.204

const feetToMetres = 0.3048
const gallonsToLitres = 3.78541
const poundsToKilograms = 0.453592

convertBtn.addEventListener ("click", function() {
    let baseValue = inputEl.value
    
    lengthEl.textContent = `${baseValue} metres = ${baseValue * Math.round(metreToFeet * 100)/ 100} feet | ${baseValue} feet = ${baseValue * feetToMetres.toFixed(3)} metres`
    
    volumeEl.textContent = `${baseValue} litres = ${baseValue * litresToGallons.toFixed(3)} gallons | ${baseValue} gallons = ${baseValue * gallonsToLitres.toFixed(3)} litres`
    
    massEl.textContent = `${baseValue} kilos= ${baseValue * kilogramsToPounds.toFixed(3)} pounds | ${baseValue} pounds = ${baseValue * poundsToKilograms.toFixed(3)} kilos`
})

