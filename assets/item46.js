"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greetUser = greetUser;
document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch(`api/users/current-user`);
    const user = (await response.json());
    window.user = user;
});
document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch(`api/users/current-user`);
    const user = (await response.json());
    window.user = user;
});
function greetUser() {
    if (window.user !== undefined)
        alert(`Hello ${window.user.name}!`);
    // alert(`Hello ${(window as MyWindow).user.name}!`);
}
