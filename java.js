var player1 = "Player 1"; 
var player2 = "Player 2";  
 function playdice() { 
        setTimeout(function () { 
            var a = Math.floor(Math.random() * 6) + 1; 
            var b = Math.floor(Math.random() * 6) + 1; 
  
            document.querySelector(".image1").setAttribute("src", 
                "dice" + a + ".png"); 
  
            document.querySelector(".image2").setAttribute("src", 
                "dice" + b + ".png"); 
  
            if (a === b) { 
                document.querySelector("h1").innerHTML = "Draw!"; 
            } 
  
            else if (a < b) { 
                document.querySelector("h1").innerHTML 
                                = (player2 + " WINS!"); 
            } 
  
            else { 
                document.querySelector("h1").innerHTML 
                                = (player1 + " WINS!"); 
            } 
        }, 2500); 
    } 
