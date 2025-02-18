const celdas = document.getElementsByClassName("cell")
const tablero = document.getElementById("tablero")
const reiniciar = document.getElementById("reStart")
const resultado = document.getElementById("ganador")         
         
let jugador = true;

for (let  i = 0; i < celdas.length; i++) {
    celdas[i].addEventListener("click", function (){ 
        if(celdas[i].textContent != ""){ 
            alert("No podemos utilizar esta posición")
        }

        else{ 
            console.log(celdas[i]);
            celdas[i].innerHTML = "x";
            selector()
        }
    });
 }

 

 function selector(){
        let celdasVacias = [];
        for( let index = 0; index < celdas.length; index++ ){
            if(celdas[index].textContent == ""){
                celdasVacias.push(index);
            }
        }
        
      

        checkline(0,1,2)
        checkline(3,4,5)
        checkline(6,7,8)
        checkline(0,3,6)
        checkline(1,4,7)
        checkline(2,5,8)
        checkline(0,4,8)
        checkline(2,4,6)

        function selector() {
            
        }
        function checkline(cell1,cell2,cell3){
            if(
                celdas[cell1].innerHTML.length && 
                celdas[cell1].innerHTML == celdas[cell2].innerHTML && 
                celdas[cell2].innerHTML == celdas[cell3].innerHTML){
                
                    mostrarGanador(celdas[cell1].innerHTML);
                    
            }
        }

        function mostrarGanador(ganador){
            resultado.innerHTML = `${ganador} Ganó!`
            for(let i = 0; i < celdas.length; i++){
                celdas[i].removeEventListener("click", selector);

               
            }   
            alert("Has ganado")
        
        // función reiniciar juego
        reiniciar.addEventListener("click", function(){
            
            location.reload();
        });
            }
        }

 
        
