module.exports = {
    ROLE_HARVESTER: 'Harvester',
    ROLE_UPGRADER: 'Upgrader',
    ROLE_BUILDER: 'Builder',

    MAX_AMOUNT_HARVESTERS: 10,
    MAX_AMOUNT_UPGRADER: 2,
    MAX_AMOUNT_BUILDERS: 2,

    PARTS_SMALL_HARVESTER: [
        WORK, CARRY, MOVE, MOVE
    ],
    PARTS_SMALL_UPGRADER: [
        WORK, CARRY, MOVE, MOVE
    ],
    PARTS_SMALL_BUILDER: [
        WORK, CARRY, MOVE, MOVE
    ],

    MEMORY_HARVESTER: {
        role: 'Harvester',
        working: false
    },
    MEMORY_UPGRADER: {
        role: 'Upgrader',
        upgrading: false
    },
    MEMORY_BUILDER: {
        role: 'Builder',
        building: false
    },

    CONTROLLER_LEVEL_FOR_ROADS: 2
};