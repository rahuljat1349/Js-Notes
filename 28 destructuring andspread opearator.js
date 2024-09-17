



        let arr = [3, 5];
        let [x, y] = arr;

        // let x = arr[0];
        // let y = arr[1]; //no need to do this




        let arr2 = [5, 6, 8, 12, 14, 15];
        let [a, , , ...rest] = arr2;

        console.log(a, rest);





        let { m, n } = { m: 4, n: 6 }
        console.log(m, n);



        const arr3 = [5, 6, 7];
        const obj = { ...arr3 };
        console.log(obj);


        //similarly
        let sum = (v1, v2, v3) => v1 + v2 + v3;
        console.log(sum(...arr3));



        let obj1 = {
            name: "rahul",
            company: "xyz",
            add: "jaipur"
        }

        console.log({ ...obj1, name: "vishnu" }); //changed the name

