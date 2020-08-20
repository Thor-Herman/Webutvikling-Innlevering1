const canvas = document.getElementById("canvas");
const idk = canvas.getContext("2d");
const gradient = idk.createRadialGradient(75, 50, 5, 90, 60, 100);
gradient.addColorStop(0, "black");
gradient.addColorStop(0.5, "blue");
gradient.addColorStop(1, "white");
idk.fillStyle = gradient;
idk.fillRect(10, 10, 350, 150);
