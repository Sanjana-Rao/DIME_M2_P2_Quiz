// Change 10 to the total number of questions
var total = 10;
var question = new Array();
for (i = 1; i <= total + 1; i++) {
    temp = "choice" + i + "=new Array()";
    eval(temp);
}
var solution = new Array();

/* Fun phrases for correct answers */
var compliments = new Array();
compliments[0] = "Purrfect! 🐾";
compliments[1] = "You must be a cat whisperer! 😸";
compliments[2] = "Feline-tastic! Keep going! 🐈";
compliments[3] = "You nailed it, just like a cat landing on its feet! 🐾";
compliments[4] = "You’re as sharp as a cat’s claws! 🐱";
compliments[5] = "Right on, meow! 🐈‍⬛";

/* Fun responses for incorrect answers */
var wrongAnswers = new Array();
wrongAnswers[0] = "Oops, not quite. Try again! 🙀";
wrongAnswers[1] = "Almost there! Cats make mistakes too, you know. 🐾";
wrongAnswers[2] = "A whisker away from the right answer! 😿";
wrongAnswers[3] = "The cat's got your tongue? 🐱 Keep trying!";
wrongAnswers[4] = "Not quite right, but you'll pounce on the next one! 🐾";

/* Cat Quiz Questions */
question[1] = "What is the average lifespan of a domestic cat?";
choice1[1] = "5-8 years";
choice1[2] = "10-15 years";
choice1[3] = "15-20 years";
choice1[4] = "20-25 years";

question[2] = "Which breed of cat is known for having no tail?";
choice2[1] = "Maine Coon";
choice2[2] = "Siamese";
choice2[3] = "Manx";
choice2[4] = "Ragdoll";

question[3] = "What is a group of cats called?";
choice3[1] = "Clowder";
choice3[2] = "Pack";
choice3[3] = "Herd";
choice3[4] = "Litter";

question[4] = "Which sense is the most developed in cats?";
choice4[1] = "Sight";
choice4[2] = "Smell";
choice4[3] = "Hearing";
choice4[4] = "Touch";

question[5] = "Why do cats purr?";
choice5[1] = "To communicate with other animals";
choice5[2] = "As a sign of pain";
choice5[3] = "To express contentment or soothe themselves";
choice5[4] = "To warn other animals";

question[6] = "What does it mean when a cat slowly blinks at you?";
choice6[1] = "The cat is annoyed";
choice6[2] = "The cat is challenging you";
choice6[3] = "The cat is showing trust and affection";
choice6[4] = "The cat is preparing to sleep";

question[7] = "Which breed of cat is hairless?";
choice7[1] = "Persian";
choice7[2] = "Sphynx";
choice7[3] = "Bengal";
choice7[4] = "Abyssinian";

question[8] = "What is the primary reason cats knead?";
choice8[1] = "To mark their territory";
choice8[2] = "To stretch their muscles";
choice8[3] = "To express affection and comfort";
choice8[4] = "To sharpen their claws";

question[9] = "Which famous cat breed has a distinctive folded ear?";
choice9[1] = "Scottish Fold";
choice9[2] = "Siamese";
choice9[3] = "Norwegian Forest Cat";
choice9[4] = "Burmese";

question[10] = "What does it mean when a cat’s tail is straight up?";
choice10[1] = "The cat is aggressive";
choice10[2] = "The cat is scared";
choice10[3] = "The cat is friendly and confident";
choice10[4] = "The cat is hunting prey";

/* Solutions */
solution[1] = "b";
solution[2] = "c";
solution[3] = "a";
solution[4] = "c";
solution[5] = "c";
solution[6] = "c";
solution[7] = "b";
solution[8] = "c";
solution[9] = "a";
solution[10] = "c";

function generatequestions() {
    document.instantquiz.theresponse.selectedIndex = 0;
    if (!document.instantquiz.cmode.checked || whichone >= total + 1 || whichone <= 0)
        document.instantquiz.thesolution.value = '';
    if (whichone >= total + 1)
        tempmn.value = "End of quiz";
    else {
        tempmn.value = whichone + ")" + question[whichone] + "\n\n" +
            "a)" + eval('choice' + whichone + '[1]') + "\n" +
            "b)" + eval('choice' + whichone + '[2]') + "\n" +
            "c)" + eval('choice' + whichone + '[3]') + "\n" +
            "d)" + eval('choice' + whichone + '[4]');
        if (document.instantquiz.cmode.checked)
            document.instantquiz.thesolution.value = solution[whichone];
    }
}

function responses() {
    var temp2 = document.instantquiz.theresponse;
    var temp3 = temp2.options[temp2.selectedIndex].text;
    if (temp3 != solution[whichone] && temp2.selectedIndex != 0) {
        document.instantquiz.thesolution.value = wrongAnswers[Math.floor(Math.random() * wrongAnswers.length)];
    } else if (temp2.selectedIndex != 0) {
        document.instantquiz.thesolution.value = compliments[Math.floor(Math.random() * compliments.length)];
    }
}

generatequestions();
