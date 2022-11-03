const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
pass1=document.getElementById("res1")
pass2=document.getElementById("res2")

function generate(){
    let out1=""
    let out2=""
    for (let i=0;i<15;i+=1){
        index1=Math.floor(Math.random()*characters.length)
        index2=Math.floor(Math.random()*characters.length)
        out1+=characters[index1]
        out2+=characters[index2]
    }
    pass1.textContent=out1
    pass2.textContent=out2
    
}





