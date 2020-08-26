$(document).ready(() => {
    let infoRevClicked = 0;
    const infoRev = $(".info-rev");
    infoRev.click(() => {
        infoRevClicked = (infoRevClicked + 1) % 2;
        $(".info").stop(true).slideToggle("slow").attr("display", "grid");
        infoRevClicked ? infoRev.html("Hide Documentation") : infoRev.html("Show Documentation");
    });
});