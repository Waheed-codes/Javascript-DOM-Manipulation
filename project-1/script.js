var stat = document.querySelector("h3")
var btn = document.querySelector("#add")
// var removeFriend = document.querySelector("#remove")
var check = 0
    btn.addEventListener("click", function(){
        if(check==0){
        stat.innerHTML = "Friends"
        stat.style.color= "red"
        btn.innerHTML= " Following"
        check=1
        }else{
            stat.innerHTML="Stranger"
            stat.style.color="blue"
            btn.innerHTML= "Follow"
            check=0
        }
    })

// removeFriend.addEventListener("click", function(){
//     stat.innerHTML = "Stranger"
//     stat.style.color= "blue"
    
// })
