$(document).ready(()=> {
    let infoRevClicked = 0;
    const infoRev = $(".info-rev");
    infoRev.off().on("click", () => {
        infoRevClicked = (infoRevClicked + 1) % 2;
        $(".info").stop(true).slideToggle("slow");
        //infoRevClicked ? infoRev.html("Hide Documentation") : infoRev.html("Show Documentation");
        $(".info").attr("display", "grid");
    });
});