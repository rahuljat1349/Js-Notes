

        let key = prompt("enter a key")
        let value = prompt("enter a value")


        localStorage.setItem(key, value)

        localStorage.getItem(key)

        // localStorage.removeItem(key)

        // localStorage.clear()

        // localStorage.length

        // localStorage.key(index)


        // similarly session storage works







        //*** storage event ***//

        window.onstorage = () => {
            console.log("changed");
        }








