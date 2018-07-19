module.exports = {
    ROLE_HARVESTER: 'Harvester',
    ROLE_UPGRADER: 'Upgrader',

    MAX_AMOUNT_HARVESTERS: 10,
    MAX_AMOUNT_UPGRADER: 3,

    PARTS_SMALL_HARVESTER: [
        WORK, CARRY, MOVE, MOVE
    ],
    PARTS_SMALL_UPGRADER: [
        WORK, CARRY, MOVE, MOVE
    ],

    MEMORY_HARVESTER: {
        role: 'Harvester',
        working: false
    },
    MEMORY_UPGRADER: {
        role: 'Upgrader',
        upgrading: false
    }
};