//////////////////

document.getElementById('calculate-btn').addEventListener('click', function () {
    const perPlayerCostField = getElementByIdInputField('per-player-cost');

    const list = document.querySelectorAll('#player-list li')
    const totalCost = perPlayerCostField * list.length;

    const totalExpences = document.getElementById('total-expences');
    const totalExpencesString = totalExpences.innerText;
    const totalPlayerCost = parseInt(totalExpences);
    totalExpences.innerText = totalCost;
    return totalCost;
})

////////////////////////////

document.getElementById('calculate-total-btn').addEventListener('click', function () {
    const totalExpences = document.getElementById('total-expences').innerText;
    const totalPlayerCost = parseInt(totalExpences);

    const managerCostField = getElementByIdInputField('manager-cost')
    const coachCostField = getElementByIdInputField('coach-cost')

    const totalTeamCost = managerCostField + coachCostField + totalPlayerCost;

    const TotatCalculate = document.getElementById('total-cost')
    const TotatCalculateString = TotatCalculate.innerText;
    const TotatCalculateCost = parseInt(TotatCalculateString);
    TotatCalculate.innerText = totalTeamCost;
})


