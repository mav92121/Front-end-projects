const celToFer = (cel) => {
    let result = Math.round(((cel * 9) / 5) + 32);
    return result;
}
const ferToCel = (fer) => {
    let result = Math.round(((fer - 32) * 5) / 9);
    return result;
}
const myFun = () => {
    let tempValue = document.getElementById('input').value;
    let tempType = document.getElementById('select').value;

    if (tempType == "Cel") {
        let result = celToFer(tempValue)
        document.getElementById('target').innerHTML = "Temperature in Fahrenheit is " + result;
    }
    else {
        let result = ferToCel(tempValue)
        document.getElementById('target').innerHTML = "Temperature in Celsius is " + result;
    }
}