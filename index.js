$(document).ready(() => {

    $(".card__question-arrow").on("click", function () {

        // Display the answer and flip the arrow
        const arrow = $(this);
        const answer = arrow.parent().next(".card__answer");
        const displayNone = "card__answer--undisplayed";
        const rotated = "card__question-arrow--rotated"
        
        if (answer.hasClass(displayNone)) {
            answer.removeClass(displayNone);
            arrow.addClass(rotated);
        } else {
            answer.addClass(displayNone);
            arrow.removeClass(rotated);
        }

    });

});