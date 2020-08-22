const canvas = document.getElementById("canvas");
const $canvas = $("#canvas");
const context = canvas.getContext("2d");
let dpr = window.devicePixelRatio;

console.log("JAVASCRIPT");

const createGradient = () => {
    const gradient = context.createRadialGradient(75, 50, 5, 90, 60, 100);
    gradient.addColorStop(0, "black");
    gradient.addColorStop(0.5, "blue");
    gradient.addColorStop(1, "red");
    context.fillStyle = gradient;
    context.fillRect(0, 0, 250, 200);
}

const fixDpi = () => {
    const canv = $("canvas");
    dpr = window.devicePixelRatio;
    const height = +canv.css("height").slice(0, -2);
    const width = +canv.css("width").slice(0, -2);
    $canvas.attr("height", height*dpr).attr("width", width*dpr);
}

const renderBackGround = () => {
    const canv = $("canvas");
    const width = canv.width();
    const height = canv.height();
    console.log(`width ${width} height ${height}`)
    context.fillStyle = '#FFFFFF';
    console.log(dpr);
    context.fillRect(0, 0, width*dpr, height*dpr);
}

const renderCircle = () => {
    context.beginPath();
    context.arc(50, 50, 50, 0, Math.PI * 2);
    context.fillStyle = '#000000';
    context.stroke();
}

const renderCanvas = () => {
    fixDpi();
    renderBackGround();
    renderCircle();
}

$(".info-rev").click(() => $(".info").slideToggle("fast"));

renderCanvas();

$canvas.click(()=> $(console.log("I got clicked")));
$canvas.mouseenter(()=>$(console.log("Mouse enter"))).mouseleave(()=>$(console.log("Mouse leave")));
$(window).resize(()=>renderCanvas());