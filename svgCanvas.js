

$(document).ready(() => {
    let toggled = 0;
    $("#svg-artwork").click( () => {
        const $bckgrd = $("#svg-background");
        toggled = (toggled + 1) % 2
        toggled ? $bckgrd.css("fill", "red") : $bckgrd.css("fill", "royalblue");
        }
    );
});