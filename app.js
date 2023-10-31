function showme(){


    var inp =document.getElementById("t1")

    var arr=[]

    var ob={
    n1:inp.value,
    // n2:inp.value


    }


arr.push(ob)





var arrP=[]

var obP={
n1:123,
// n2:inp.value


}


arrP.push(obP)

localStorage.setItem("nam",JSON.stringify(arr))

localStorage.setItem("nam2",JSON.stringify(arrP))


// localStorage.setItem("nam",JSON.stringify(ob))

// localStorage.setItem("nam",inp.value)


var res= localStorage.getItem("nam")

alert(res)




}