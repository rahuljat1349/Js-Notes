
        let z = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve("Resolved");
                }, 2000);
            });
        };


        (async () => {
            let b = await z()
            console.log(b);
            let c = await z()
            console.log(c);
            let d = await z()
            console.log(d);
        })()




