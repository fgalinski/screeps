module.exports = {
    ROLE_HARVESTER: 'Harvester',

    MAX_AMOUNT_HARVESTERS: 5,

    SMALL_HARVESTER_PARTS: [
        WORK, CARRY, MOVE, MOVE
    ],

    SMALL_HARVESTER_MEMORY: {
        role: this.ROLE_HARVESTER,
        working: false
    }
};