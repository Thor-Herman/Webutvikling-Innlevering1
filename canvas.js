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
        context.ellipse(x, y, 45, 30, 0, 0, Math.PI*2);
    }
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
    }

    const renderHappyFace = () => {
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
    }

    const renderEyeBrows = () => {
        context.beginPath();
        context.lineWidth = 6;
        context.moveTo(240, 50);
        context.lineTo(150, 10);
        context.moveTo(260, 50);
        context.lineTo(350, 10);
        context.stroke();
    }

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
    }

    renderAngryFace();

    $canvas.mouseenter(() =>
        $(renderHappyFace())).mouseleave(() =>
            renderAngryFace()
    )
});