$(document).ready(function () {

    $(".js-addNews").click(() => {
        $("body").addClass("popup--active");
        $(".popup-add__container").show();
    })

    $(".js-popup-close").click(() => {
        $("body").removeClass("popup--active");
        $(".popup-add__container").hide();
        $(".js-popup-alert").addClass("popup--hide");

        if ($(".js-popup-add").hasClass("update")) {
            window.location.href = "/"
        }
    })

    $(".js-sucess-close").click(() => {
        $(".js-popup-message").hide()
    })

    // Function Search - Filter

    $(".js-button-search").keyup((e) => {
       
        searchFunction(e)

    });

    function searchFunction(e){

        const searchValue = e.target.value.toLowerCase()

        $(".box-item").each(function(i, $el){
            $(this).find(".box-item__title").text().toLowerCase().startsWith(searchValue) ? $(this).show() : $(this).hide()
        })   
    }
})