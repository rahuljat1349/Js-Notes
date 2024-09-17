

        class student {
            constructor(name, age) {
                this.studentName = name;
                this.studentAge = age;
                console.log("Contructor function");
            };


            hello() {
                console.log(`Hello ${this.studentName} your age is ${this.studentAge}.`);
            };

            static staticMethod() {
                console.log("static function");
            };

        };

        //prototype method
        // let a = new student("Rahul", 20)
        // a.hello()

        //static method
        student.staticMethod()


        //getter & setter methods



        class student {
            constructor(name, age) {
                this.studentName = name;
                this.studentAge = age;
                console.log("Contructor function");
            };


            hello() {
                console.log(`Hello ${this.studentName} your age is ${this.studentAge}.`);
            };

            set name(newname) {
                this.studentName = newname
            }

            get name() {
                return this.studentName
            }
        };

        let a = new student("Rahul", 20)

        a.name = "Vishnu" //setting

        console.log(a.name); //getting

        a.hello()//checking





        // intanceof

        console.log(a instanceof student); //True

