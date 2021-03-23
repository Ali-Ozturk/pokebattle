const fighter_data = [
    {
        id: 1,
        label: "Ali",
        imageUrl: process.env.PUBLIC_URL + '/images/sprites/ali-sprite.png',
        health: 1500,
        moves: [1, 2, 3, 4],
        type_defenses: {
            normal: 1,
            fire: 0.5,
            water: 1,
            electric: 2,
        }
    },
    {
        id: 2,
        label: "René",
        imageUrl: process.env.PUBLIC_URL + '/images/sprites/rene-sprite.png',
        health: 350,
        moves: [1, 2, 3, 4],
        type_defenses: {
            normal: 1,
            fire: 2,
            water: 0.5,
            electric: 1,
        }
    },
    {
        id: 3,
        label: "Pickles",
        imageUrl: process.env.PUBLIC_URL + '/images/sprites/pickles-sprite.gif',
        health: 700,
        moves: [1, 2, 3, 4],
        type_defenses: {
            normal: 1,
            fire: 2,
            water: 0.5,
            electric: 1,
        }
    },
    {
        id: 4,
        label: "Malte",
        imageUrl: process.env.PUBLIC_URL + '/images/sprites/malte-sprite.gif',
        health: 570,
        moves: [1, 2, 3, 4],
        type_defenses: {
            normal: 1,
            fire: 2,
            water: 0.5,
            electric: 1,
        }
    },
    {
        id: 5,
        label: "Kenneth",
        imageUrl: process.env.PUBLIC_URL + '/images/sprites/kenneth-sprite.png',
        health: 350,
        moves: [1, 2, 3, 4],
        type_defenses: {
            normal: 1,
            fire: 2,
            water: 0.5,
            electric: 1,
        }
    },
];

export default fighter_data;
