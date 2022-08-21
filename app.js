// to get the inout value
function getInputFieldValue(incomeFieldId) {
    const incomeField = document.getElementById(incomeFieldId);
    const incomeValue = parseFloat(incomeField.value);
    return incomeValue;
}

// to set a total amount in a element
function setElementValue(elementId, totalAmount) {
    const element = document.getElementById(elementId);
    element.innerText = totalAmount;

}

// this event is happen to the calculate btn
document.getElementById('btn-calculator').addEventListener('click', function() {
        // get income
        const incomeValue = getInputFieldValue('income-field');

        // get expenses
        const foodValue = getInputFieldValue('food-field');
        const rentValue = getInputFieldValue('rent-field');
        const clothValue = getInputFieldValue('cloth-field');

        // calculate total expenses
        const totalAmount = foodValue + rentValue + clothValue;

        // validation will work if the input value isn't number 
        if (isNaN(incomeValue) || isNaN(foodValue) || isNaN(rentValue) || isNaN(clothValue)) {
            alert('Please input all the field with a valid number');
            return;
        }
        // validation will work if the expenses input value bigger than income value number 
        if (incomeValue < foodValue || incomeValue < rentValue || incomeValue < clothValue || incomeValue < totalAmount) {
            alert(' Income must bigger than expenses');
            return;
        }
        // validation will work if the input value is negative
        if (incomeValue < 0 || foodValue < 0 || rentValue < 0 || clothValue < 0) {
            alert('numbers are required positive and valid');
            return;
        }

        // set total expenses
        setElementValue('total-expenses', totalAmount);

        // calculate remaining from income 
        const remainingBalance = incomeValue - totalAmount;

        // set remaining balance
        setElementValue('balance', remainingBalance);

    })
    // this event is happen to the save btn
document.getElementById('btn-save').addEventListener('click', function() {

    // get income
    const incomeValue = getInputFieldValue('income-field');

    // get expenses
    const foodValue = getInputFieldValue('food-field');
    const rentValue = getInputFieldValue('rent-field');
    const clothValue = getInputFieldValue('cloth-field');

    // get saving 
    const saveValue = getInputFieldValue('save-field');

    // validation will work if the input value isn't number 
    if (isNaN(saveValue) || isNaN(incomeValue) || isNaN(foodValue) || isNaN(rentValue) || isNaN(clothValue)) {
        alert('Please input all the field with a valid number')
        return;
    }

    // validation will work if the input value is negative
    if (saveValue < 0 || incomeValue < 0 || foodValue < 0 || rentValue < 0 || clothValue < 0) {
        alert('Number is required positive')
        return;
    }
    // validation will work if the input of saving value is bigger than 100%
    if (saveValue > 100) {
        alert('Saving value should be less than income')
        return;
    }

    //calculating saving
    const SavingPersand = saveValue / 100;
    const savingAmount = incomeValue * SavingPersand;

    //calculating total expeneses included saving
    const totalExpene = savingAmount + foodValue + rentValue + clothValue;

    // validation will work if expenses is bigger than income value included saving and all expenses
    if (totalExpene > incomeValue) {
        alert('Saving value should be less and fit with all expenses')
        return;
    }
    // set saving 
    setElementValue("saving-amount", savingAmount);

    //calculating remaining Balance
    const remainingBalance = incomeValue - totalExpene;

    // set remaining Balance 
    setElementValue('remaining-balance-amount', remainingBalance);


})
