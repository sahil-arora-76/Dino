import { ctx, init, game } from "./ctx.js";
import { drawFood, food as foods, foodList, brickList } from "./food.js";
import { drawBack, food_player_collsion, food_tile_collision, catcher_tile_collision, fruit_player_collision } from "./gameStr.js";
import { movePlayer, player, drawPlayer } from "./player.js";
const audio = new Audio("sound/backvoice2.mp3");
import { drawList, updateList } from "./tile.js";
let popup = document.getElementById("popup");
let color;
const jumpAudio = new Audio("sound/jump.mp3");
let gamePaused = false;
let brickTime = 0;
let audioPlay = false;
document.body.style.backgroundColor = "light blue";
let foodTimer = 0;
let gameOvers = false;
const c = ctx;
var catcherOne = new Image();
var lava = new Image();
var catcherTwo = new Image();
var catcherThree = new Image();
var catcherFour = new Image();
var background = new Image();
var blood = new Image();
var tile = new Image();
var food = new Image();
var fruit = new Image();
var catcherFive = new Image();
var lava2 = new Image();
let lava3 = new Image();
let back2 = new Image();
const Overaudio = new Audio("sound/w.wav");
background.onload = function () {
    catcherOne.onload = function () {
        catcherTwo.onload = function () {
            catcherThree.onload = function () {
                catcherFour.onload = function () {
                    food.onload = function () {
                        lava.onload = function () {
                            tile.onload = function () {
                                lava2.onload = function () {
                                    catcherFive.onload = function () {
                                        fruit.onload = function () {
                                            lava3.onload = function () {
                                                back2.onload = function () {
                                                    var width = $(window).width();
                                                    $(window).on('resize', function () {
                                                        location.reload();
                                                    });
                                                    let thor = function () {
                                                        let check = false;
                                                        (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
                                                            check = true; })(navigator.userAgent || navigator.vendor || window.opera);
                                                        return check;
                                                    };
                                                    if (thor() === true) {
                                                        alert("This Game Is Only Available On Windows !");
                                                    }
                                                    else {
                                                        let popups = document.getElementById("popups");
                                                        popups.style.display = "block";
                                                        let yes = document.getElementById("yes");
                                                        let no = document.getElementById("no");
                                                        yes.addEventListener("click", () => {
                                                            popups.style.display = "none";
                                                            audio.play();
                                                            audio.volume = 0.2;
                                                            audio.muted = false;
                                                            audio.loop = true;
                                                            audioPlay = true;
                                                            loop();
                                                        });
                                                        no.addEventListener("click", () => {
                                                            popups.style.display = "none";
                                                            audioPlay = false;
                                                            loop();
                                                        });
                                                    }
                                                    updateList();
                                                    function loop() {
                                                        if (gameOvers === false && gamePaused == false) {
                                                            if (game.lives === 0) {
                                                                var cv = localStorage.getItem("highestScore");
                                                                if (!cv) {
                                                                    localStorage.setItem("highestScore", game.score.toString());
                                                                }
                                                                else {
                                                                    if (parseInt(cv) > game.score) {
                                                                    }
                                                                    else if (parseInt(cv) < game.score) {
                                                                        localStorage.removeItem("highestScore");
                                                                        localStorage.setItem("highestScore", game.score.toString());
                                                                    }
                                                                }
                                                                gameOvers = true;
                                                            }
                                                            if (player.x < 0) {
                                                                player.x = window.innerWidth - 60;
                                                            }
                                                            else if (player.x > window.innerWidth - 60) {
                                                                player.x = 0;
                                                            }
                                                            if (game.score === 10) {
                                                                game.level = 2;
                                                                foods.speed = 4;
                                                            }
                                                            else if (game.score === 20) {
                                                                game.level = 3;
                                                                foods.speed = 5;
                                                            }
                                                            window.requestAnimationFrame(loop);
                                                            foodTimer++;
                                                            brickTime++;
                                                            c.clearRect(0, 0, window.innerWidth, window.innerHeight);
                                                            if (foodTimer > 200) {
                                                                foodList.push({
                                                                    x: Math.floor(Math.random() * window.innerWidth - 35),
                                                                    y: 0,
                                                                    width: foods.width,
                                                                    height: foods.height,
                                                                });
                                                                foodTimer = 0;
                                                            }
                                                            if (brickTime > 600) {
                                                                brickList.push({
                                                                    x: Math.floor(Math.random() * window.innerWidth - 35),
                                                                    y: 0,
                                                                    width: 50,
                                                                    height: foods.height,
                                                                });
                                                                brickTime = 0;
                                                            }
                                                            if (game.score <= 10) {
                                                                drawBack(background, lava3);
                                                                color = "black";
                                                            }
                                                            else if (game.score > 10) {
                                                                drawBack(back2, lava);
                                                                color = "white";
                                                            }
                                                            drawList(tile, lava, lava2);
                                                            if (player.onair) {
                                                                drawPlayer(catcherTwo, catcherOne, catcherThree, catcherFive, catcherFour);
                                                            }
                                                            else {
                                                                drawPlayer(catcherTwo, catcherOne, catcherThree);
                                                            }
                                                            drawFood(food, fruit);
                                                            food_tile_collision();
                                                            if (!catcher_tile_collision()) {
                                                                player.y += 60;
                                                                game.lives = 0;
                                                            }
                                                            else if (fruit_player_collision()) {
                                                                return game.lives -= 1;
                                                            }
                                                            food_player_collsion(audioPlay);
                                                            movePlayer(catcherTwo, catcherOne, catcherFour, audioPlay);
                                                        }
                                                        else if (gameOvers === true) {
                                                            audio.pause();
                                                            if (audioPlay === true) {
                                                                Overaudio.play();
                                                                Overaudio.muted = false;
                                                            }
                                                            let highestScore = localStorage.getItem("highestScore");
                                                            let btn = document.getElementById("resume");
                                                            let currentScore = document.getElementById("score");
                                                            let highestScores = document.getElementById("score2");
                                                            if (!highestScore) {
                                                                highestScore = "0";
                                                            }
                                                            player.y += 60;
                                                            if (color === "white") {
                                                                currentScore.style.color = "white";
                                                                highestScores.style.color = "white";
                                                            }
                                                            else {
                                                                currentScore.style.color = "black";
                                                                currentScore.style.color = "black";
                                                            }
                                                            currentScore.textContent = "CURRENT SCORE : " + game.score;
                                                            highestScores.textContent = "HIGHEST SCORE : " + highestScore;
                                                            popup.style.display = "block";
                                                            btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => {
                                                                location.reload();
                                                            });
                                                        }
                                                    }
                                                    let keysPressed = {};
                                                    document.addEventListener('keydown', (event) => {
                                                        console.log(event.key);
                                                        keysPressed[event.key.toUpperCase()] = true;
                                                        event.preventDefault();
                                                        to();
                                                    });
                                                    document.addEventListener('keyup', (event) => {
                                                        delete keysPressed[event.key.toUpperCase()];
                                                    });
                                                    function to() {
                                                        if ((keysPressed["A"] && player.x > 0) || (keysPressed["ARROWLEFT"] && player.x > 0)) {
                                                            player.leftPress = true;
                                                            player.rightPress = false;
                                                        }
                                                        if ((keysPressed["D"] &&
                                                            player.x < window.innerWidth - player.width) || (keysPressed["ARROWRIGHT"] && player.x > 0)) {
                                                            // player.spd = 5;
                                                            player.rightPress = true;
                                                        }
                                                        if ((keysPressed[" "] &&
                                                            !player.onair &&
                                                            player.y == window.innerHeight - 100 - 80) || (keysPressed["ARROWUP"] &&
                                                            !player.onair &&
                                                            player.y == window.innerHeight - 100 - 80)) {
                                                            if (!player.onair) {
                                                                if (audioPlay === true) {
                                                                    jumpAudio.play();
                                                                    jumpAudio.volume = 0.2;
                                                                    jumpAudio.muted = false;
                                                                }
                                                                player.jumps = 120;
                                                                player.onair = true;
                                                                player.jump = true;
                                                            }
                                                        }
                                                    }
                                                    ;
                                                };
                                                back2.src = "images/background1.png";
                                            };
                                            lava3.src = "images/lava3.jpg";
                                        };
                                        fruit.src = "images/fruit.png";
                                    };
                                    catcherFive.src = "images/Dino_jumpl.png";
                                };
                                lava2.src = "images/lava1.png";
                            };
                            tile.src = "images/tile1.png";
                        };
                        lava.src = "images/lava.png";
                    };
                    food.src = "images/chicken1.png";
                };
                catcherFour.src = "images/dino_jumpr.png";
            };
            catcherThree.src = "images/Dino_right.png";
        };
        catcherTwo.src = "images/Dino_init2.png";
    };
    catcherOne.src = "images/Dino_left.png";
};
background.src = "images/background4crop.jpg";
init();
