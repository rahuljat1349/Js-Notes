

        // we can see all cookies in a webpage by document.cookie
        // every cookie size must be of <= 4 kb
        // every webpage can have more than or equal to 20 cookies

        document.cookie = "name=rahul"



        let key = prompt("Enter  kye")
        let value = prompt("Enter  value")
        // in case if someone enter key or value like "rahul;;=" we can use encodeURIComponent function like

        document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
        //and than we can decode it using decodeURIComponent function




