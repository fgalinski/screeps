module.exports = {
    handleSpawning: function () {
        for (let spawnName in Game.spawns) {
            console.log(Game.spawns[spawnName]);
        }
    }
};