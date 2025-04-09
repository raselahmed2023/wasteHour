const wasteHours =[6,4,4,5,5,3.5,5.5,6,3,2]
const totalWasteHours = wasteHours.reduce((sum, hour)=> sum + hour, 0);
const wastedDays = totalWasteHours/24;

console.log(totalWasteHours);
console.log(wastedDays);