let spawnGeneral = require('spawn-general');
let roleGeneral = require('role-general');

module.exports.loop = function () {
    spawnGeneral.handleSpawning();
    roleGeneral.handleRoles();

    // Building findPathTo vom Spawn zu den sourcen, dann straße bauen.
};