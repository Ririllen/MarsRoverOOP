// Pentru Mars Rover:
// - definiți o clasă Map pentru a instanția o hartă pe care să se miște roboțelul
// - definiți o clasă Rover pentru a instanția roboțeii;
// Input:
// 5 5
// 1 2 N
// LMLMLMLMM
// 3 3 E
// MMRMMRMRRM
// 1 5 N
// LMMRMLMRM

// Output:
// 1 3 N
// 5 1 E
// 0 5 V RIP

class Map{
    constructor(maxX, maxY) {
        this.maxX = maxX;
        this.maxY = maxY;
    }
}

class Rover{
    constructor(xPos, yPos, orientation, instructions) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.orientation = orientation;
        this.instructions = instructions;
    }

    moveLeft(orientation){
        switch (orientation){            
            case "N": return "V";
            case "S": return "E";
            case "V": return "S";
            case "E": return "N";
        }
    } 

    moveRight(orientation){
        switch (orientation){
            case "N": return "E";
            case "S": return "V";
            case "V": return "N"; 
            case "E": return "S"; 
        }
    }

    movement(xPos, yPos, orientation,maxPosX, maxPosY){
        let rip = "";
        switch (orientation){
            case "N": if ( (yPos + 1) > maxPosY){ 
                        rip = "X";
                      } else { yPos += 1;}
                    break;
            case "S": if ( (yPos - 1) < 0){ 
                        rip = "X";
                       } else { yPos -= 1;}       
                    break;
            case "V": if ( (xPos - 1) < 0){ 
                        rip = "X"; 
                      } else { xPos -= 1; }
                    break;
            case "E": if ( (xPos + 1) > maxPosX){ 
                        rip = "X";
                      } else { xPos += 1;}
                    break;
        }
        return [xPos,yPos,orientation,rip];
    }

    moveRobot(xPos, yPos, orientation, instructions,maxPosX, maxPosY){
        // const [maxPosX, maxPosY] = endPos;
        // let [xPos, yPos, orientation] = position;
    
        for (const ins of instructions){
            switch (ins) {
                case "L":  {
                    orientation = this.moveLeft(orientation);
                    continue;
                }
                case "R":  {
                    orientation = this.moveRight(orientation);
                    continue;
                }
                case "M":  {
                    let rip = "";
                    [xPos,yPos,orientation,rip] = this.movement(xPos,yPos,orientation,maxPosX, maxPosY); 
                    
                    if (rip){ 
                        return `${xPos} ${yPos} ${orientation} RIP`;
                    } 
                    continue;    
                }
                default: 
                console.log("S-a gasit o comanda gresita");
            }
        }
        return `${xPos} ${yPos} ${orientation}`;
    }
}



let xPos = document.querySelector('.xCoord'),
    yPos = document.querySelector('.yCoord'),
    orientation = document.querySelector('.orientation'),
    nume = document.querySelector('.nume'),
    instructions = document.querySelector('.instructiuni'),
    btn = document.querySelector('.verify');


btn.addEventListener('click', function() {
   const mapa = new Map(5,5); 
   const robot1 = new Rover(1, 2, "N", "LMLMLMLMM");
   const robot2 = new Rover(3, 3, "E", "MMRMMRMRRM");
   const robot3 = new Rover(1, 5, "N", "LMMRMLMRM");

   let finalPosition1 = robot1.moveRobot(robot1.xPos, robot1.yPos, robot1.orientation, robot1.instructions, mapa.maxX, mapa.maxY);
   nume = nume.value;
   document.querySelector('.resultat').textContent = `Robotelul ${nume} are coordonatele: ${finalPosition1}`;

   let finalPosition2 = robot2.moveRobot(robot2.xPos, robot2.yPos, robot2.orientation, robot2.instructions, mapa.maxX, mapa.maxY);
//    nume = nume.value;
   document.querySelector('.resultat').textContent += `Robotelul ${nume} are coordonatele: ${finalPosition2}`;

   let finalPosition3 = robot3.moveRobot(robot3.xPos, robot3.yPos, robot3.orientation, robot3.instructions, mapa.maxX, mapa.maxY);
//    nume = nume.value;
   document.querySelector('.resultat').textContent += `Robotelul ${nume} are coordonatele: ${finalPosition3}`;   
//    console.log(); 
}) 




