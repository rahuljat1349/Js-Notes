






        // let p1 = new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         reject(1);
        //     }, 1000);
        // });

        // let p2 = new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         resolve(2);
        //     }, 2000);
        // });

        // let p3 = new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         resolve(3);
        //     }, 3000);
        // });



        // p1.then((data) => console.log(data));
        // p2.then((data) => console.log(data));
        // p3.then((data) => console.log(data));



        // // Promise.all()
        // // it will throw an error if any of one promise gets error

        // let promise_all = Promise.all([p1, p2, p3]);
        // promise_all.then((data) => console.log(data));




        // // Promise.allSetteled
        // // it will give rejected promises as well if any one promise gets error

        // let promise_allSetteled = Promise.allSettled([p1, p2, p3]);
        // promise_allSetteled.then((data) => console.log(data));






        // // Promise.race()
        // // it will show the first fulfilled promise either that can be rejected or resolved

        // let promise_race = Promise.race([p1, p2, p3]);
        // promise_race.then((data) => console.log(data));





        // // Promise.any()
        // // it will show the first resolved promise only

        // let promise_any = Promise.any([p1, p2, p3]);
        // promise_any.then((data) => console.log(data));









        // // promise.resolve()
        // // it will make a promise with resolved value
        // let promise_resolve = Promise.resolve(1)
        // promise_resolve.then((data) => console.log(data))










        // // promise.reject()
        // // it will make a promise with rejected value
        // let promise_reject = Promise.reject(1)
        // promise_reject.then((data) => console.log(data))




