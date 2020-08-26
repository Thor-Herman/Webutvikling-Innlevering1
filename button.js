$(document).ready(() => {
    let infoRevClicked = 0;
    const infoRev = $(".info-rev");
    const $info = $(".info");
    infoRev.click(() => {
        infoRevClicked = (infoRevClicked + 1) % 2;
        infoRevClicked ? showDocs() : hideDocs();
    });

    const showDocs = () => {
        infoRev.html("Hide Documentation");
        $info.css({
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "repeat(3, 10em)"
        })
    }

    const hideDocs = () => {
        infoRev.html("Show Documentation")
        $info.css("display", "none");
    }
});