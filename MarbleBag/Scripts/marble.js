let MarblePicker = () => {
    $();
}

let MarbleCreator = () => {
    let _NewColor = $("#ColorNew").val();
    $("#NewColor").html(_NewColor);
}

let TalkServer = () => {
    $.ajax({
        url: '/api/pick',
        dataType: "json",
        success: (data) => {
            console.log("yes", data);
        },
        error: (data) => {
            console.log("hell no", data);
        },
    });
}