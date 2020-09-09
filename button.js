$(document).ready(() => {
    let infoRevClicked = false;
    const infoRev = $("#info-button");
    const $info = $(".info");
    infoRev.click(() => {
        infoRevClicked = !infoRevClicked;
        infoRevClicked ? showDocs() : hideDocs();
    });

    const showDocs = () => {
        infoRev.html("Hide Documentation");
        $info.css({
            display: "grid",
            gridTemplateRows: "repeat(3, auto)"
        });
        $("#sources").css({gridColumn: "1 / -1;"})
    };

    const hideDocs = () => {
        infoRev.html("Show Documentation");
        $info.css("display", "none");
    };
});