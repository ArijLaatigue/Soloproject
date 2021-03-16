var questions = [
    {
        question: "which most closely describes the look of your pores ?",
        oily: "Large and visible all over.",
        sensitive: "medium sized all over.",
        dry: "small,not easily noticed all over",
        combination: "larger or medium and only visible in the T-zone",
    },
    {
        question: "when does your skin look red?",
        oily: "whenever or wherever i use new product?",
        sensitive: "more often than i care to admit",
        dry: "sometimes but only around my cheecks",
        combination: "anytime,i have blemishes",
    },
    {
        question: "i would describle the shine of my skin like this:",
        oily: "Bright like a diamond",
        sensitive: "I get more stinging than shine ",
        dry: "Dull everywhere",
        combination: "shiny in my T-zone but dull on my cheeks ",
    },
    {
        question: "how does it feel when you touch your face?",
        oily: "stick and greasy",
        sensitive: "irritated and angry",
        dry: "Rough and scaly",
        combination: "oily in places ,dry in others",
    },
    {
        question: "in the afternoon my skin needs:",
        oily: "blotting or powder all over",
        sensitive: "a refreshing spritz of facial spray",
        dry: "MOISTURIZING,MOISTURIZING,MOISTURIZING",
        combination: "powdering on the forhead,nose,and/or chin",
    },
    {
        question: "how does your skin feel after your wash your face?",
        oily: "clean for now but the oil is coming",
        sensitive: "itchy and a little dry",
        dry: "stripped of moisture",
        combination: "clean and great in my T-zone but my cheeks are dry ",
    },
    {
        question: "pick the one that best describes your skin's relionship with pimples and blackheads:",
        oily: "I hate them but they love me ",
        sensitive: "my blemishes are mosre likely to be broken cappillaries rashes ",
        dry: "I'd trade my skin 's flakiness and tightness for few blackheads",
        combination: "the have their territory around my T-zone and i have claimed the cheeks for my own",
    }
]
function makeCounter() {
    var counter = 0;
    return function count() {
        counter++;
        return counter;
    }
}

var oilySkin = {
    makeCounter: function () {
        var counter = 0;
        return function count() {
            counter++;
            return counter;
        }
    },
}
var drySkin = function makeCounter() {
    var counter = 0;
    return function count() {
        counter++;
        return counter;
    }
}
var sensitiveSkin = function makeCounter() {
    var counter = 0;
    return function count() {
        counter++;
        return counter;
    }
};
var combinationSkin = function makeCounter() {
    var counter = 0;
    return function count() {
        counter++;
        return counter;
    }
};




function type(sensitiveSkin, oilySkin, drySkin, combinationSkin) {

    if (oilySkin > drySkin && oilySkin > sensitiveSkin && oilySkin > combinationSkin) {
        return "your skin is oily";
    }
    else if (drySkin > oilySkin && drySkin > sensitiveSkin && drySkin > combinationSkin) {
        return "your skin is dry";
    }
    else if (sensitiveSkin > oilySkin && sensitiveSkin > drySkin && sensitiveSkin > combinationSkin) {
        return "your skin is sensitive "
    }
    else { return "your skin is combination" }
}




function display() {
    
    for (var i = 0; i < questions.length; i++) {
        var html = "<div class='card'><div class='question'>" + questions[i].question + "</div>"
        html += "<div class='answers'>"
        for (var key in questions[i]) {
            if (key !== "question") {
                var answer = questions[i][key];
                html += "<button class=" + key + answer + "</button>";
            }
        }
        html += "</div></div>"
        $("#countainer").append(html)
    }
    

}
display()

