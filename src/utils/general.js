import fighter_data from "../data/fighters";

const effectiveness_chart = {
    "0": "It has no effect.",
    "0.25": "It's not very effective.",
    "0.5": "It's not very effective.",
    "1": "",
    "2": "It's super effective.",
    "4": "It's super effective."
};

export function getRandomFighters(amount, selected) {
    const dataCopy = fighter_data.filter((el) => el.id !== selected.id);

    return [...Array(Math.min(amount, dataCopy.length)).keys()].map(
        () => {
            const randomIndex = Math.floor(Math.random() * dataCopy.length);
            return dataCopy.splice(randomIndex, 1).pop();
        }
    );
}

export function getMoveEffectivenessAndDamage(move, attacked_fighter) {
    const move_type = move.type;
    const effectiveness = attacked_fighter.type_defenses[move_type];
    const damage = Math.floor(move.power * effectiveness);
    return {
        effectiveness: effectiveness_chart[effectiveness],
        damage
    }
}
