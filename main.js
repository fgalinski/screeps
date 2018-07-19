let spawnGeneral = require('spawn-general');
let roleGeneral = require('role-general');

module.exports.loop = function () {
    spawnGeneral.handleSpawning();
    roleGeneral.handleRoles();

    // Constructor und Wartung
    // Building findPathTo vom Spawn zu den sourcen, dann straße bauen.
    // Dann Extennsions
    // Room COntroller muss auf lvl 2 sein.
};