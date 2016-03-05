$( document ).ready(function(){

    $("#spinHover").hover(
        function () {
            $("#spinHover").addClass('fa-spin');
        },
        function () {
            $("#spinHover").removeClass('fa-spin');
        }
    );
});
