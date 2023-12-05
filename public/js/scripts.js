const clickMe = () => {
    alert("Thanks for clicking me. I hope you have a great day!")
}

$(document).ready(function () {
    //$('.materialboxed').materialbox();
    $('#clickMeButton').click(() => {
        clickMe();
    })
})