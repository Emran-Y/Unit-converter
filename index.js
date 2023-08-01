// rendering DOM
const btnEl = document.getElementById("btn-el")
const pL = document.getElementById("g-1")
const pV = document.getElementById("g-2")
const pM = document.getElementById("g-3")

// function to get the value of text filed

function getTextValue(){
    const textF = document.getElementById("Text")
    const valueEntered = parseFloat(textF.value)
    return valueEntered
}


btnEl.addEventListener('click', function(){
    lengthConverter(getTextValue())
    volumeConverter(getTextValue())
    massConverter(getTextValue())

})

function lengthConverter(val){
    let meter =   (val * 3.281).toFixed(3)
    let feet = (val * 0.304785126485).toFixed(3)
    pL.textContent = `${val} meters = ${meter} feet | ${val} feet = ${feet} meters`
}

function volumeConverter(val){
    let liters =   (val * 0.264).toFixed(3)
    let gallons = (val * 3.7878787).toFixed(3)
    pV.textContent = `${val} liters = ${liters} gallons | ${val} gallons = ${gallons} liters`
}

function massConverter(val){
    let kilos =   (val * 2.204).toFixed(3)
    let pounds = (val * 0.4537205).toFixed(3)
    pM.textContent = `${val} kilos = ${kilos} pounds | ${val} pounds = ${pounds} kilos`
}

