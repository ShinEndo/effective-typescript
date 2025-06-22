declare global {
    interface Window {
        user: User | undefined;
    }
}
interface User {
    name: string;
}

document.addEventListener("DOMContentLoaded",async ()=>{
    const response = await fetch(`api/users/current-user`);
    const user = (await response.json()) as User;
    window.user = user;
});

type MyWindow = (typeof window) & {
    user: User | undefined;
}
document.addEventListener("DOMContentLoaded",async ()=>{
    const response = await fetch(`api/users/current-user`);
    const user = (await response.json()) as User;
    (window as MyWindow).user = user;
});

export function greetUser() {
    if(window.user !== undefined) alert(`Hello ${window.user.name}!`);
    // alert(`Hello ${(window as MyWindow).user.name}!`);
}