function getElementByIdInputField(inputId) {
    const inpitField = document.getElementById(inputId);
    const inpitFieldString = inpitField.value;
    inpitField.value = '';
    const inpitFieldNumber = parseInt(inpitFieldString);
    return inpitFieldNumber;
}