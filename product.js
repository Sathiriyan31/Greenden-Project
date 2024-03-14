// selecting side navbar

var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click",function(){
     sidenav.style.right=0
})

closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})

// product search function

var productcontainer =document.getElementById("product-container")
var search =document.getElementById("search")
var containerlist =productcontainer.querySelectorAll("div")

 search.addEventListener("keyup",function(){
    var enteredValue = event.target.value.toUpperCase()

    for (count =0; count<containerlist.length; count=count+1)
    {
        var productname = containerlist[count].querySelector("h1").textContent

        if(productname.toUpperCase().indexOf(enteredValue)<0)
        {
            containerlist[count].style.display="none"
        }
        else
        {
            containerlist[count].style.display="block"
        } 
    }
 })