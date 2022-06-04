export const getDicebear: (seed: string) => string = (seed: string) => {
    const url = `https://avatars.dicebear.com/api/micah/${seed}.svg`;
    return url;
};
