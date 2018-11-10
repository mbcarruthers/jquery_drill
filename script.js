$(document).ready(function() {

    $("#btnsubmit").attr("disabled","disabled");

    const $div = $("<div id='container'></div>");

    $("body").append($div);

    $("#input_text").keyup(function() {

        if($("#input_text").val() !== "") {
            $("#btnsubmit").removeAttr("disabled");

        } else {
            $("#btnsubmit").attr("disabled","disabled");
        }
    });

    $("#btnsubmit").click(function( event ) {
        event.preventDefault();
        const $value = $("#input_text");
        const $ul  = $("<ul></ul>");

        const $li = $("<li></li>");
        $li.append($value.val());
        $li.click(function() {
            $(this).css({
                "color":`rgb(${Math.floor( Math.random() * 256)} , ${Math.floor( Math.random() * 256)} , ${Math.floor( Math.random() * 256)} )`
            })
        });
        $li.dblclick(function() {
            $li.remove();
        });
        $ul.append($li);
        $("#container").append($ul);
        $value.textContent = "";
    });


});