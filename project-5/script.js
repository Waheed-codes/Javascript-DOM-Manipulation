var arr = [
    {dp: "https://plus.unsplash.com/premium_photo-1727967189498-fb2c7d0a1e30?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {dp: "https://images.unsplash.com/photo-1530777780045-c11965d8f4c7?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1515907467242-93cd67ebc7d6?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1680120666633-203356e281f1?q=80&w=415&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {dp:"https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1601896258776-e5675f9ef3c3?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
]


var clutter = ""
var stori = document.querySelector("#stories")
arr.forEach(function(elem,idx){ 
    clutter+= `<div class="story"> 
    <img id="${idx}"src="${elem.dp}" alt="">
</div>`  
})
stori.innerHTML=clutter;
stori.addEventListener("click",function(dets){
   document.querySelector("#full-screen").style.display="block"
   document.querySelector("#full-screen").style.backgroundImage=`url(${arr[dets.target.id].story})`     
   setTimeout(function(){
    document.querySelector("#full-screen").style.display="none"
   },3000)

});

