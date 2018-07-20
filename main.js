let spawnGeneral = require('spawn-general');
let roleGeneral = require('role-general');
let buildingGeneral = require('building-general');

module.exports.loop = function () {
    spawnGeneral.handleSpawning();
    roleGeneral.handleRoles();
    buildingGeneral.handleConstruction();

    // Repair road creep
    // Less idle creeps
    // Better creep to source binding
    // Dann Extennsions -> Room COntroller muss auf lvl 2 sein.
    // Bigger Creeps
    // Denken an Controller 3
};