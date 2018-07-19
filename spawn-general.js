module.exports = {
    handleSpawning: function () {
        for (let spawn in Game.spawns.entries()) {
            console.log(spawn);
        }
    }
};