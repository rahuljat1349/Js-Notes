




        let marks = [64, 54, 65, 47]
        console.log(marks)

        // indexing
        console.log(marks[1])
        console.log(marks[5]) //undefined

        console.log(marks.length) //4


        marks[0] = 50;
        marks[4] = 50;
        console.log(marks)

        console.log(marks.length) //5

        //Arrays are mutable 
        //Arays are basically objects




        //Array methods

        // converting into a string 
        let b = marks.toString()
        console.log(b)


        //joining all items
        let c = marks.join("-")
        console.log(c)

        // popping out last item 
        // returns last popped item
        let r = marks.pop()
        console.log(marks)
        console.log(r)


        //pushing
        //returns a new array length
        let x = marks.push(20)
        console.log(marks)
        console.log(x)


        // shifting
        // rerturns first popped item
        let y = marks.shift()
        console.log(marks)
        console.log(y)


        //unshift
        // adds an item in the beginning
        // returns new array length 
        let t = marks.unshift(50)
        console.log(marks)
        console.log(t)




















