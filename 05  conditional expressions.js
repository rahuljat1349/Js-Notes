
        // prompt 
        // const createPrompt = require('prompt-sync');

        // const prompt = createPrompt();

        let result = prompt('What is your age: ');



        // Typecasting

        result = Number.parseInt(result)
        console.log(typeof result);


        // if statement
        // if (result > 0 && result < 18) {
        //     console.log("you are under 18")
        // }
        // else if (result >= 18) {
        //     console.log("you are an adult now")
        // }
        // else {
        //     console.log("Invalid age!")
        // }




        // switch case

        // switch (result) {
        //     case 5:
        //         console.log("you are under eighteen");
        //         break;
        //     case 18:
        //         console.log("you are an adult now");
        //         break;


        //     default:
        //         console.log("Invalid age!");

        //         break;
        // }



        // turnry operator

        console.log("You can", result >= 18 ? "drink" : "drink water")
