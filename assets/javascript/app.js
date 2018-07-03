$(document).ready(function () {

    // creating a timer 

    var questions = [{
            question: "How many babies did Phoebe carry for her brother?",
            answersKey: [1, 2, 3, 4],
            correctanswer: 2,
            name: "answer1"
        },

        {
            question: "Who marries Chandler and Monica?",
            answersKey: ["Phoebe", "Ross", "Rachel", "Joey"],
            correctanswer: 3,
            name: "answer2"
        },
        {
            question: "What game did Chandler make up to give Joey money?",
            answersKey: ["Cups", "Shots", "Glasses", "Bottles"],
            correctanswer: 0,
            name: "answer3"
        },
        {
            question: "What is 'the giant poking device' made from?",
            answersKey: ["Pvc Pipe", "Rope", "Pencils", "Chopsticks"],
            correctanswer: 3,
            name: "answer4"
        },
        {
            question: "What type of animal is 'Hugsy'?",
            answersKey: ["Elephant", "Penguin", "Cat", "Dog"],
            correctanswer: 1,
            name: "answer5"
        },
        {
            question: "Who was 'The Holiday Armadillo'?",
            answersKey: ["Jack", "Joey", "Chandler", "Ross"],
            correctanswer: 3,
            name: "answer6"
        },

        {
            question: "What is Chandler's middle name?",
            answersKey: ["Muriel", "Muerice", "Bing", "Bong"],
            correctanswer: 0,
            name: "answer7"
        },
        {
            question: "What is the name of Joey's agent?",
            answersKey: ["Estelle", "Bertha", "Esther", "Eunice"],
            correctanswer: 0,
            name: "answer8"
        },
        {
            question: "What do Monica and Rachel do to get their apartment back?",
            answersKey: ["Make Dinner", "Let Joey and Chandler keep the duck", "Give Knicks Tickets", "Kiss"],
            correctanswer: 3,
            name: "answer9"
        },
        {
            question: "What Friend was famously overweight as a child?",
            answersKey: ["Ross", "Chandler", "Monica", "Rachel"],
            correctanswer: 2,
            name: "answer10"
        },

    ];

    var count = 40;

    var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

    function timer() {
        count = count - 1;
        if (count <= 0) {
            clearInterval(counter);
            //counter ended, do something here
            return;
        }

        document.querySelector(".time").innerHTML = count + "s ";

        //   code for showing the number of seconds here

        //  If the count down is over, write some text 
        if (count === 1) {
            clearInterval(timer);
            alert("out of time!")
            // display()
            // console.log($("input[name=answer1]:checked").val(), " working")
        }
    }

    $(document).ready(function () {
        for (var i = 0; i < questions.length; i++) {
            $('.border').append(
                `<div class="question1"> ${questions[i].question}</div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name=${questions[i].name} id="inlineRadio1" value=${questions[i].answersKey[0]}>
            <label class="form-check-label" for="inlineRadio1">${questions[i].answersKey[0]}</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name=${questions[i].name} id="inlineRadio2" value=${questions[i].answersKey[1]}>
            <label class="form-check-label" for="inlineRadio2">${questions[i].answersKey[1]}</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name=${questions[i].name} id="inlineRadio3" value=${questions[i].answersKey[2]}>
            <label class="form-check-label" for="inlineRadio2">${questions[i].answersKey[2]}</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name=${questions[i].name} id="inlineRadio4" value=${questions[i].answersKey[3]}>
            <label class="form-check-label" for="inlineRadio2">${questions[i].answersKey[3]}</label>
        </div>`)
        }

        
        var rightanswer = 0;
        var wronganswer = 0;
        

        $("#submit").on("click", function () {

            for ( var i = 0; i < questions.length; i++){
               var userguess = $("input[name=" + questions[i].name + "]:checked").val();
               console.log(userguess)
            };
            
           
            // var userguess1 = $("input[name=answer1]:checked").val();
            // var Userguess2 = $("input[name=answer2]:checked").val();
            // var Userguess3 = $("input[name=answer3]:checked").val();
            // var Userguess4 = $("input[name=answer4]:checked").val();
            // var Userguess5 = $("input[name=answer5]:checked").val();
            // var Userguess6 = $("input[name=answer6]:checked").val();
            // var Userguess7 = $("input[name=answer7]:checked").val();
            // var Userguess8 = $("input[name=answer8]:checked").val();
            // var Userguess9 = $("input[name=answer9]:checked").val();
            // var Userguess10 = $("input[name=answer10]:checked").val();

           
           function checkAnswer(){
            for (var i = 0; i < questions.length; i++){
                if (userguess == questions[i].correctanswer[i]);
                alert("yay!");
            }
           };
           
        //    checkAnswer()
            

            // if (Userguess1 == 3) {

            //     rightanswer++;
            // }

            // if (Userguess2 == "Joey") {

            //     rightanswer++;
            // }
            // if (Userguess3 == "Cups") {

            //     rightanswer++;
            // }

            // if (Userguess4 == "Chopsticks") {

            //     rightanswer++;
            // }
            // if (Userguess5 == "Penguin") {

            //     rightanswer++;
            // }

            // if (Userguess6 == "Ross") {

            //     rightanswer++;
            // 
            // if (Userguess7 == "Muriel") {

            //     rightanswer++;
            // }

            // if (Userguess8 == "Estelle") {

            //     rightanswer++;
            // }
            // if (Userguess9 == "Kiss") {

            //     rightanswer++;
            // }

            // if (Userguess10 == "Monica") {

            //     rightanswer++;
            // }
            // else {
            //     wronganswer++;
            // }
           function display(){
            document.querySelector(".correct").innerHTML = "Correct Answers: " + rightanswer;

            document.querySelector(".incorrect").innerHTML = "Incorrect Answers: " + wronganswer;
           } 
           display()
        });

    })
});

// old timer fxn I didnt like:
// // Set the date we're counting down to
// var countDownDate = new Date("Sep 5, 2018 15:37:25").getTime();

// // Update the count down every 1 second
// var x = setInterval(function () {

//     // Get todays date and time
//     var now = new Date().getTime();

//     // Find the distance between now an the count down date
//     var distance = countDownDate - now;

//     // Time calculations for seconds

//     var seconds = Math.floor((distance % (1000 * 50)) / 1000);

//     // Output the result in an element with id="demo"
//     document.querySelector(".time").innerHTML = seconds + "s ";

//     // If the count down is over, write some text 
//     if (seconds === 0) {
//         clearInterval(x);
//         // console.log($("input[name=answer1]:checked").val(), " working")


//         ;

//     }
// }, 1000);
// console.log(x)