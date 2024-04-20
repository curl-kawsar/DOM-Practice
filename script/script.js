function depositeHandler() {
    const inputValue = getElement("depo-input").value;
    const convertedValue = convertedNumber(inputValue);

    const initialdepo = getElement("initialdepo").innerText;
    const initialConvert = convertedNumber(initialdepo);

    getElement("initialdepo").innerText = sum(initialConvert, convertedValue);

    const initialTotal = getElement("initial-total").innerText;
    const convertedTotal = convertedNumber(initialTotal);

    getElement('initial-total').innerText = sum(convertedValue, convertedTotal);
}


function withdrawHandler() {
    const withValue = getElement('withdraw-input').value;
    const convertWithdraw = convertedNumber(withValue);

    const initialwith = getElement('initialwith').innerText;
    const convertInitialWith = convertedNumber(initialwith);

    getElement('initialwith').innerText = sum(convertWithdraw, convertInitialWith)

    const initialTotal = getElement("initial-total").innerText;
    const convertedTotal = convertedNumber(initialTotal);
    getElement('initial-total').innerText = sub(convertedTotal, convertWithdraw);

}

function sub(a, b) {
    return a - b;
}

function sum(a, b) {
    return a + b;
}

function getElement(string) {
    return document.getElementById(string)
}

function convertedNumber(value) {
    return parseFloat(value)
}
