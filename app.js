import Util from './lib/utils.js'
import RBS from './lib/RBS.js'
import drawChart from './lib/drawChart.js'

const masses = Util.createRangeArray(1000, 10, 50);

let fuelSavedDataVsMass = masses.map(mass => RBS.calculateFuelSaved(mass, 100, 60));
console.log(fuelSavedDataVsMass);

const velocities = Util.createRangeArray(60, 1, 90);

let fuelSavedDataVsVelocity = velocities.map(vel => RBS.calculateFuelSaved(1500, vel, 60));
console.log(fuelSavedDataVsVelocity);

const brakeEfficiencies = Util.createRangeArray(60, 1, 35);

let fuelSavedDataVsBrakeEfficiency = brakeEfficiencies.map(efficiency => RBS.calculateFuelSaved(1500, 100, efficiency));
console.log(fuelSavedDataVsBrakeEfficiency);


drawChart("massVaryingChart",{
    labels: fuelSavedDataVsMass.map(item => item.mass + ''),
    dataSet1: fuelSavedDataVsMass.map(item => item.fuelSavedPetrol),
    dataSet2: fuelSavedDataVsMass.map(item => item.fuelSavedDiesel),
    titleText: "Mass vs Fuel Saved",
    FirstDataSet: "Petrol Fuel",
    SecondDataSet: "Diesel fuel"});

drawChart("velocityVaryingChart",{
      labels: fuelSavedDataVsVelocity.map(item => item.velocity + ''),
      dataSet1: fuelSavedDataVsVelocity.map(item => item.fuelSavedPetrol),
      dataSet2: fuelSavedDataVsVelocity.map(item => item.fuelSavedDiesel),
      titleText: "Velocity vs Fuel Saved",
      FirstDataSet: "Petrol Fuel",
      SecondDataSet: "Diesel fuel"});
  
drawChart("efficeincyVaryingChart",{
      labels: fuelSavedDataVsBrakeEfficiency.map(item => item.rbsEfficiency + ''),
      dataSet1: fuelSavedDataVsBrakeEfficiency.map(item => item.fuelSavedPetrol),
      dataSet2: fuelSavedDataVsBrakeEfficiency.map(item => item.fuelSavedDiesel),
      titleText: "Brake Efficiency vs Fuel Saved",
      FirstDataSet: "Petrol Fuel",
      SecondDataSet: "Diesel fuel"});