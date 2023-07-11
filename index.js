$(document).ready(() => {

    $(".card__arrow").on("click", function () {
    // Display the answer and flip the arrow
    
        const arrow = $(this)
        const question = arrow.prev(".card__question")
        const answer = arrow.parent().next(".card__answer")

        const arrowSelected = "card__arrow--selected"
        const questionSelected = "card__question--selected"
        const answerSelected = "card__answer--selected"
        
        if (arrow.hasClass(arrowSelected)) {
            arrow.removeClass(arrowSelected)
            question.removeClass(questionSelected)
            answer.removeClass(answerSelected)
        } else {
            arrow.addClass(arrowSelected)
            question.addClass(questionSelected)
            answer.addClass(answerSelected)
        }

    });

});