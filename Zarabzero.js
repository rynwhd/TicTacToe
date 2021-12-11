var box=document.querySelectorAll(".box");
var info=document.querySelector(".info");
var but=document.querySelector("button");
var length=box.length;
function rel()
{
    window.location.reload();
}
function reset(){
    // for(var i=0;i<length;i++)
    // {
    //     document.querySelectorAll(".box")[i].setAttribute("val","0");
    //     document.querySelectorAll("i")[i].setAttribute("class","fas");
    //     document.querySelectorAll(".box")[i].setAttribute("status","unlocked");
    // }
    //will take more time to execute. Induce overhead on loading time
    setTimeout(rel,1000);//inbuilt function to reset all data
    for (let i = 0; i < length; i++) {
        document.querySelectorAll(".box")[i].removeEventListener("click",game());
    }
}
// setTimeout(window.location.reload(),10000);
but.addEventListener("click",reset
);
    for(var i=0;i<length;i++){
        document.querySelectorAll(".box")[i].addEventListener("click",
        function game(){
            
            if(info.attributes[1].value=='on'&&this.attributes[1].value=='unlocked')
            {
                this.setAttribute("status","lock");
                this.setAttribute("val","1");
                this.querySelector("i.fas").classList.toggle("fa-times");
                info.innerHTML="Turn for Y";
                info.setAttribute("name","off");
               
                
            }
            else if(info.attributes[1].value=='off'&&this.attributes[1].value=='unlocked')
            {
                this.setAttribute("status","lock");
                this.setAttribute("val","2");
                this.querySelector("i.fas").classList.toggle("fa-circle");
                info.innerHTML="Turn for X";
                info.setAttribute("name","on");
            }
            
            var k=0;
            
            for(var i=0;i<3;i++){
                var x=Number(document.querySelectorAll(".box")[k].getAttribute("val"));
                var y=Number(document.querySelectorAll(".box")[k+1].getAttribute("val"));
                var z=Number(document.querySelectorAll(".box")[k+2].getAttribute("val"));
                
                if(x+y+z==3&&x==y&&x==z){
                    document.querySelector("h1").innerHTML="X wins!";
                    // setTimeout(window.location.reload(),10000);
                    reset();
                    
                }
                else if(x+y+z==6&&x==y&&x==z)
                {
                    document.querySelector("h1").innerHTML="O wins!";
                    // setTimeout(window.location.reload(),10000);
                    reset();
                    
                }
                k+=3;
            }
            
            for(var p=0;p<3;p++){
                var x=Number(document.querySelectorAll(".box")[p].getAttribute("val"));
                var y=Number(document.querySelectorAll(".box")[p+3].getAttribute("val"));
                var z=Number(document.querySelectorAll(".box")[p+6].getAttribute("val"));
                
                if(x+y+z==3&&x==y&&x==z){
                    document.querySelector("h1").innerHTML="X wins!";
                    // setTimeout(window.location.reload(),10000);
                    reset();
                }
                else if(x+y+z==6&&x==y&&x==z)
                {
                    document.querySelector("h1").innerHTML="O wins!";
                    // setTimeout(window.location.reload(),10000);
                    reset();
                }
            }
            var p=0;
            for(var s=0;s<1;s++){
                var x=Number(document.querySelectorAll(".box")[p].getAttribute("val"));
                var y=Number(document.querySelectorAll(".box")[p+4].getAttribute("val"));
                var z=Number(document.querySelectorAll(".box")[p+8].getAttribute("val"));
                
                if(x+y+z==3&&x==y&&x==z){
                    document.querySelector("h1").innerHTML="X wins!";
                    // setTimeout(window.location.reload(),10000);
                    reset();
                }
                else if(x+y+z==6&&x==y&&x==z)
                {
                    document.querySelector("h1").innerHTML="O wins!";
                    // setTimeout(window.location.reload(),10000);
                    reset();
                }
            }
            p=2;
            for(var s=0;s<1;s++){
                var x=Number(document.querySelectorAll(".box")[p].getAttribute("val"));
                var y=Number(document.querySelectorAll(".box")[p+2].getAttribute("val"));
                var z=Number(document.querySelectorAll(".box")[p+4].getAttribute("val"));
                
                if(x+y+z==3&&x==y&&x==z){
                    document.querySelector("h1").innerHTML="X wins!";
                    // setTimeout(window.location.reload(),10000);
                    reset();
                }
                else if(x+y+z==6&&x==y&&x==z)
                {
                    document.querySelector("h1").innerHTML="O wins!";
                    // setTimeout(window.location.reload(),10000);
                    reset();
                }
            }
        });
    }
    // var row=this.attributes[2].value;
    // if(row=='a')
    // {
        //     var sumx=0;
//     var sumy=0;
//     while (j < height) 
//     {
//         console.log(j);
//         if(x==1)
//         {
//             sumx++;
//         }
//         else if(x==2)
//         {
//             sumy+=2;
//         }
//         j++;
//     }
//     if(sumx==3)
//     {
//     }
//     else if(sumy==6)
//     {
//     }
// }
//instead of taking general case for the whole board, made cases for separate win cases.