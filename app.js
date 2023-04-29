
class transport{
    constructor(option){
        this.name=option.name
        this.age=option.age
    }
}
class earthTransport extends transport{
    constructor(option){
        super(option)
        this.color=option.color
        this.marka=option.marka

    }
}

class FlyTransport extends transport{
    constructor(option){
        super(option)
        this.height=option.height
    }
}

class WaterTransport extends transport{
    constructor(option){
        super(option)
        this.square=option.square
    }
}

class car extends earthTransport{
    constructor(option){
        super(option)
        this.easy=option.easy
    }
    voice(){
        console.log('this is car');
    }
}

class truck extends earthTransport{
    constructor(option){
        super(option)
        this.heavy=option.heavy
    }
    voice(){
        console.log('this is truck');
    }
}

class bike extends earthTransport{
    constructor(option){
        super(option)
        this.speed=option.speed
    }
    voice(){
        console.log('this is bike');
    }
}

const cars = new car({
    name:"supra",
    age:32,
    color:"black",
    marka:"a80",
    easy:true
})
console.log(cars);

const trucks = new truck({
    name:"Betty",
    age:24,
    color:'white',
    marka:"b32",
    heavy:true
})

console.log(trucks);

const bikes = new bike({
    name:"rider",
    age:5,
    color:"red",
    marka:"Burnett",
    speed:true
})

console.log(bikes);

class Plane extends FlyTransport{
    constructor(option){
        super(option)
       this.safety=option.safety
    }
    voice(){
        console.log('this is plane');
    }
}
class Helicopter extends FlyTransport{
    constructor(option){
        super(option)
        this.oilTank=option.oilTank
    }
    voice(){
        console.log('this is Helicopter ');
    }
}

const planes = new Plane({
    name:"virgin",
    age:10,
    height:'11300 mtr',
    safety:"the highest level of security"
})

console.log(planes);

const Helicopters = new Helicopter({
    name:"Lakota",
    age:6,
    height:'6 km',
    oilTank:72

})

console.log(Helicopters);

class yacht extends WaterTransport{
    constructor(option){
        super(option)
        this.size=option.size
    }
    voice(){
        console.log('this is yacht');
    }
}

const yachts = new yacht({
    name:"parus",
    age:23,
    square:18,
    size:10

})
console.log(yachts);

class boat extends WaterTransport{
    constructor(option){
    super(option)
    this.engine=option.engine
}
  voice(){
    console.log('this is boat');
  }
}

const boats=new boat({
    name:"Aboat Time",
    age:1,
    square:4,
    engine:"marine"
})

console.log(boats);

