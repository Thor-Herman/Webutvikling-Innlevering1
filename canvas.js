$(document).ready(() => {
    const canvas = document.getElementById("canvas");
    const $canvas = $("#canvas");
    const context = canvas.getContext("2d");

    const renderBackGround = (angry) => {
        context.fillStyle = angry ? '#FF0000' : '#4169e1';
        context.fillRect(0, 0, 500, 300);
    };

    const renderEyeball = (x, y) => {
        context.beginPath();
        context.arc(x, y, 20, 0, Math.PI * 2);
        context.fillStyle = '#FFFFFF';
        context.fill();
    };
    const renderEye = (x, y) => {
        context.moveTo(x, y);
        context.ellipse(x, y, 45, 30, 0, 0, Math.PI * 2);
    };
    const renderFace = () => {
        context.beginPath();
        context.fillStyle = "black";
        context.fillRect(250, 100, 10, 50);
        context.moveTo(250, 120);
        context.lineTo(300, 150);
        context.lineTo(250, 150);
        renderEye(200, 70);
        renderEye(300, 70);
        context.fill();
        renderEyeball(190, 63);
        renderEyeball(310, 73);
    };
    const renderEyeBrows = (xOffset, yOffset) => {
        context.beginPath();
        context.lineWidth = 6;
        context.moveTo(240 - xOffset, 50 - yOffset);
        context.lineTo(150 - xOffset, 10 - yOffset);
        context.moveTo(260 + xOffset, 50 - yOffset);
        context.lineTo(350 + xOffset, 10 - yOffset);
        context.stroke();
    };

    const renderAngryFace = () => {
        renderBackGround(true);
        renderFace();
        context.beginPath();
        context.lineWidth = 3;
        context.fillStyle = "white";
        context.moveTo(160, 240);
        context.lineTo(360, 240);
        context.moveTo(160, 240);
        context.bezierCurveTo(180, 140, 340, 140, 360, 240);
        context.fill();
        context.stroke();
        renderEyeBrows();
    };

    let intervalId = 0;
    let lowerBrows = 0;
    let raiseBrows = 0;
    let timeOut = 0;

    const oneIntervalAnimation = (xOffset, yOffset) => {
        clearInterval(lowerBrows);
        raiseBrows = setInterval(() => {
                context.clearRect(0, 0, 500, 300);
                xOffset++;
                yOffset++;
                renderAngryFace();
                renderEyeBrows(xOffset, yOffset);
            }, 50
        );
        timeOut = setTimeout(() => {
            clearInterval(raiseBrows);
            lowerBrows = setInterval(() => {
                context.clearRect(0, 0, 500, 300);
                xOffset--;
                yOffset--;
                renderAngryFace();
                renderEyeBrows(xOffset, yOffset);
            }, 50);
        }, 500);
    };

    const renderAnimatedAngryFace = () => {
        let xOffset = 0;
        let yOffset = 0;
        oneIntervalAnimation(xOffset, yOffset);
        intervalId = setInterval(() => {
            oneIntervalAnimation(xOffset, yOffset)
        }, 1000);
    };

    const renderHappyFace = () => {
        console.log("Happy");
        clearInterval(intervalId);
        clearInterval(lowerBrows);
        clearInterval(raiseBrows);
        clearTimeout(timeOut);
        renderBackGround(false);
        renderFace();
        context.beginPath();
        context.lineWidth = 3;
        context.moveTo(160, 170);
        context.lineTo(360, 170);
        context.moveTo(160, 170);
        context.bezierCurveTo(180, 270, 340, 270, 360, 170);
        context.fillStyle = "white";
        context.fill();
        context.stroke();
    };

    renderHappyFace();
    $canvas.mouseenter(() =>
        renderAnimatedAngryFace()).mouseleave(() =>
        renderHappyFace())
});