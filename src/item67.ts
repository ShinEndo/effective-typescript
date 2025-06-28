interface SecretName {
    first: string;
    last: string;
}
interface SecretSanta {
    name: SecretName;
    gift: string;
}
export function getGift(name: SecretName, gift: string) : SecretSanta{
    return {name,gift};
}

type MySanta = ReturnType<typeof getGift>;
type MyName = Parameters<typeof getGift>[0];