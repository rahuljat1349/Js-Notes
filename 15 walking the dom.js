





        document.documentElement //returns object

        document.head // returns head tag

        document.title // returns string

        document.body //retuns null if scirpt tag is written before body











        document.body.firstChild
        document.body.lastChild
        document.body.childNodes //it is read only


        let arr = Array.from(document.body.childNodes)
        //now this is an array

















        document.documentElement.parentElement //null
        document.documentElement.parentNode //document







        document.body.firstChild.nextSibling







        //Element only navigation

        document.body.firstElementChild
        document.body.lastElementChild

        document.body.firstElementChild.nextElementSibling



        let txtcolor = () => document.body.firstElementChild.style.color = "red";

        txtcolor()





        // body.childElementNodes == body.children





        let t = document.body.firstElementChild
        t.rows
        // it will show all table rows in a form of html collection if first element child is a table
        //or
        t.caption
        //  or 
        // t.thead, t.tfoot, t.tBodies, t.rows[0].rowindex







































        document.getElementById

        document.getElementsByClassName

        document.querySelector("#container")

        document.querySelectorAll(".para")





        // getElementBytagname
        // getElementByName










        box.matches(".box1") // true

        box.closest(".container") // true

        box.containes(".sp1") // true







