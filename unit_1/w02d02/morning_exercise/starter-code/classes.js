class Boat{
    constructor(name, length, crewSize){
        this.name = name;
        this.length = length;
        this.crewSize = crewSize;
        this.floats = true;
    }
    launch(){
        if(this.floats && this.crewSize > 0){
            console.log("ANCHORS AWAY");
        }
    }
}

class Speedboat extends Boat{
    constructor(name, length=50, crewSize, speed){
        super(name, length, crewSize);
        this.speed = speed;
    }
}

const boatyMcBoatFace = new Boat("boatyMcBoatface",500,12);
boatyMcBoatFace.floats = false;
boatyMcBoatFace.launch();