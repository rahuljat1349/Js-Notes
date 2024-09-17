
        //closure = function along with it's lexical environment

        function init() {
            let name = "Rahul";
            function greet() {
                console.log("Good morning", name);
            }
            return greet;
        }

        let c = init();
        c();



        //arrow function use their parant's "this"

