
const numberofdrumbutton=document.querySelectorAll(".drum").length;
for(var i =0 ; i>numberofdrumbutton ; i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var kay=this.textContent
        makesound(kay)

        function makesound(kay){

            switch(kay){
                case "w":
                    var tom1=new Audio("sounds/tom-1.mp3");
                    tom1.play();
                    break;

                case "a":
                    var tom2=new Audio("sounds/tom-2.mp3");
                    tom2.play();
                    break;

                case "s":
                    var tom3=new Audio("sounds/tom-3.mp3");
                    tom3.play();
                    break;

                case "d":
                var tom4=new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
                

                
            }
        }
    })
}