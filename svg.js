

$(document).ready(() => {
    let toggled = false;
    const $bckgrd = $("#svg-background");
    const $happyFace = $("#svg-happy-face")
    const $angryFace = $("#svg-angry-face");
    $("#svg-artwork").click( () => {
        toggled = ! toggled;
        toggled ? angryFace() : happyFace();
        }
    );

    const angryFace = () => {
        $bckgrd.css("fill", "red")
        $angryFace.css("display", "block");
        $happyFace.css("display", "none");
    }

    const happyFace = () => {
        $bckgrd.css("fill", "royalblue");
        $happyFace.css("display", "block");
        $angryFace.css("display", "none");
    }
});