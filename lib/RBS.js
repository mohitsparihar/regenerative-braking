const RBS = {
    calculateFuelSaved: function (mass, velocity, rbsEfficiency) {
        const kineticEnergy = this.calculateKineticEnergy(mass, velocity);
        const energySaved = this.calculateEnergySaved(kineticEnergy, rbsEfficiency);
        const fuelSavedPetrol = energySaved / (45000 * 0.30);
        const fuelSavedDiesel = energySaved / (43000 * 0.35);
        return {
            mass: mass,
            velocity: velocity,
            rbsEfficiency: rbsEfficiency,
            kineticEnergy: kineticEnergy.toFixed(2),
            energySaved: energySaved.toFixed(2),
            fuelSavedPetrol: fuelSavedPetrol.toFixed(2),
            fuelSavedDiesel: fuelSavedDiesel.toFixed(2)
        };
    },

    calculateKineticEnergy: function (mass, velocity) {
        return 0.5 * mass * velocity * velocity;
    },

    calculateEnergySaved: function (energy, rbsEfficiciency) {
        return energy * (rbsEfficiciency/100);
    }
}

export default RBS