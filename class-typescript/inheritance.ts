class Engineer {
    // properties, constructor, methods
    engName : string;
    engId:number;

    constructor(engName:string, engId:number){
        this.engName = engName;
        this.engId = engId;
    }

     display():void{
        console.log(`Engineer name: ${this.engName} \nEngineer id: ${this.engId}`)
    }
}

class SWE extends Engineer{
    engType:string;

    constructor(engName:string, engId:number, engType:string){
       super( engName, engId)
       this.engType = engType;
    }

    display():void{
        console.log(`Engineer name: ${this.engName} \nEngineer id: ${this.engId} \nEngineer type: ${this.engType}`)
    }
}

// class object 
let engineer = new SWE('Mr. Cold', 687, 'Development')
engineer.display()
