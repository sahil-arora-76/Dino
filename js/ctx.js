const canvas = document.querySelector("canvas");
export let audioPlays = false;
export function init() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 20;
}
export let ctx = canvas.getContext("2d");
export let game = {
    lives: 3,
    score: 0,
    level: 1
};
