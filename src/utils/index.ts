export type getDicebearInput = string;

export const getDicebear: (seed: getDicebearInput) => string = (seed) => {
    const url = `https://avatars.dicebear.com/api/micah/${seed}.svg`;
    return url;
};
