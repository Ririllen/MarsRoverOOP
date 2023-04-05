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

    moveLeft(){
        switch (this.orientation){            
            case "N": this.orientation = "V";break;
            case "S": this.orientation = "E";break;
            case "V": this.orientation = "S";break;
            case "E": this.orientation = "N";break;
        }
    } 

    moveRight(){
        switch (this.orientation){
            case "N": this.orientation = "E";break;
            case "S": this.orientation = "V";break;
            case "V": this.orientation = "N";break;
            case "E": this.orientation = "S";break; 
        }
    }

    movement(maxPosX, maxPosY){
        let rip = "";
        switch (this.orientation){
            case "N": if ( (this.yPos + 1) > maxPosY){ 
                        rip = "X";
                      } else { this.yPos += 1;}
                    break;
            case "S": if ( (this.yPos - 1) < 0){ 
                        rip = "X";
                       } else { this.yPos -= 1;}       
                    break;
            case "V": if ( (this.xPos - 1) < 0){ 
                        rip = "X"; 
                      } else { this.xPos -= 1; }
                    break;
            case "E": if ( (this.xPos + 1) >maxPosX){ 
                        rip = "X";
                      } else { this.xPos += 1;}
                    break;
        }
        return [this.xPos,this.yPos,this.orientation,rip];
    }

    moveRobot(maxPosX, maxPosY){
        // const [maxPosX, maxPosY] = endPos;
        // let [xPos, yPos, orientation] = position;
    
        for (const ins of this.instructions){
            switch (ins) {
                case "L":  {
                    // this.orientation = 
                    this.moveLeft();
                    continue;
                }
                case "R":  {
                    // this.orientation = 
                    this.moveRight();
                    continue;
                }
                case "M":  {
                    let rip = "";
                    [this.xPos,this.yPos,this.orientation,rip] = this.movement(maxPosX, maxPosY); 
                    
                    if (rip){ 
                        return `${this.xPos} ${this.yPos} ${this.orientation} RIP`;
                    } 
                    continue;    
                }
                default: 
                console.log("S-a gasit o comanda gresita");
            }
        }
        return `${this.xPos} ${this.yPos} ${this.orientation}`;
    }
}



let xPos1 = document.querySelector('.xCoord1'),
    yPos1 = document.querySelector('.yCoord1'),
    orientation1 = document.querySelector('.orientation1'),
    nume1 = document.querySelector('.nume1'),
    instructions1 = document.querySelector('.instructiuni1'),
    btn = document.querySelector('.verify');

    let xPos2 = document.querySelector('.xCoord2'),
    yPos2 = document.querySelector('.yCoord2'),
    orientation2 = document.querySelector('.orientation2'),
    nume2 = document.querySelector('.nume2'),
    instructions2 = document.querySelector('.instructiuni2');
    

    let xPos3 = document.querySelector('.xCoord3'),
    yPos3 = document.querySelector('.yCoord3'),
    orientation3 = document.querySelector('.orientation3'),
    nume3 = document.querySelector('.nume3'),
    instructions3 = document.querySelector('.instructiuni3');
    


btn.addEventListener('click', function() {
   const mapa = new Map(5,5); 
   const robot1 = new Rover(Number(xPos1.value), Number(yPos1.value), orientation1.value, instructions1.value);
   const robot2 = new Rover(Number(xPos2.value), Number(yPos2.value), orientation2.value, instructions2.value);
   const robot3 = new Rover(Number(xPos3.value), Number(yPos3.value), orientation3.value, instructions3.value);

   let finalPosition1 = robot1.moveRobot( mapa.maxX, mapa.maxY);
   nume1 = nume1.value;
   document.querySelector('.resultat1').textContent = `Robotelul ${nume1} are coordonatele: ${finalPosition1}`;

   let finalPosition2 = robot2.moveRobot( mapa.maxX, mapa.maxY);
   nume2 = nume2.value;
   document.querySelector('.resultat2').textContent = `Robotelul ${nume2} are coordonatele: ${finalPosition2}`;

   let finalPosition3 = robot3.moveRobot( mapa.maxX, mapa.maxY);
   nume3 = nume3.value;
   document.querySelector('.resultat3').textContent = `Robotelul ${nume3} are coordonatele: ${finalPosition3}`;   
//    console.log(); 
}) 




