import fighter_data from "../data/fighters";

export function getRandomFighters(amount, selected) {
    const dataCopy = fighter_data.filter((el) => el.id !== selected.id);

    return [...Array(Math.min(amount, dataCopy.length)).keys()].map(
        () => {
            const randomIndex = Math.floor(Math.random() * dataCopy.length);
            return dataCopy.splice(randomIndex, 1).pop();
        }
    );
}
