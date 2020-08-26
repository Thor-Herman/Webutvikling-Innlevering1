$(document).ready(() => {
    let infoRevClicked = 0;
    const infoRev = $("#info-button");
    const $info = $(".info");
    infoRev.click(() => {
        infoRevClicked = (infoRevClicked + 1) % 2;
        infoRevClicked ? showDocs() : hideDocs();
    });

    const showDocs = () => {
        infoRev.html("Hide Documentation");
        $info.css({
            display: "grid",
            gridTemplateRows: "repeat(3, auto)"
        })
    }

    const hideDocs = () => {
        infoRev.html("Show Documentation")
        $info.css("display", "none");
    }
});