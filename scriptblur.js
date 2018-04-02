$("li").hover(
    function () {
        $('#description').addClass('blur');
    },
    function () {
        $('#description').removeClass('blur');
    }
)

$("li").hover(
    function () {
        $('#images').addClass('imgblur');
    },
    function () {
        $('#images').removeClass('imgblur');
    }
)

$("li").hover(
    function () {
        $('#title').addClass('titlehover');
    },
    function () {
        $('#title').removeClass('titlehover');
    }
    
)