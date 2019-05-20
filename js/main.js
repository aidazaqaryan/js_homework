var car ={
    maximumSpeed: 160, 
    currentSpeed: 0,
    isOn: false,
    fuelLevel: 0,
    speedHistory: [],
    usageHistory: [],
    getModel: function (name){
        console.log('Your car name is ' + name)
    },
    speedUp: function(a){
        if (a===60){
            if (this.currentSpeed===0){
                console.log( 'Should raise speed by ' +a)
                this.speedHistory.push(this.currentSpeed)
            }
            else if(this.currentSpeed===40){
                this.currentSpeed =this.currentSpeed+a   
                this.speedHistory.push(a)     
                this.usageHistory.push(' speeded up to ' + a)
            }
            if(this.currentSpeed===100){
                this.speedHistory.push(this.currentSpeed)
                this.usageHistory.push(' speeded up to ' + this.currentSpeed)
            }
        }
        else if(a<60){
            this.currentSpeed = a
            this.speedHistory.push(this.currentSpeed)
        }
        else if(a>this.maximumSpeed){
            console.log('ERROR: not allowed speed, max allowed speed is 160')
        }
    },
    start: function(){
        if(this.fuelLevel===0){
            console.log('Not enough fuel')
            this.usageHistory.push('Turned on: Not enough fuel')

        }
        else if (this.fuelLevel>0){
            console.log('Will turn on')
        }
    },
    addFuel: function (a){
        this.fuelLevel = a
        this.usageHistory.push('Added ' +a +'L fuel')
        this.usageHistory.push('Turned on: success')

    },
    turnOff: function (){
        if(this.currentSpeed>0){
            console.log('Will turn off car')
            this.isOn=true
            this.usageHistory.push('turned off: turn off not allowed when driving')
        }
        else if(this.currentSpeed===0){
            this.usageHistory.push('turned off: success')
        }
    },
    break: function(a){
        if(this.currentSpeed>0){
            console.log('Will make car speed equal to ' + a + ', if break(20) speed will become 20')
        }
    this.currentSpeed = a
    this.speedHistory.push(this.currentSpeed)
    this.usageHistory.push('speed down to ' + a)
    }

}


car.getModel("Mercedes") // print car name
console.log(car.maximumSpeed) // 160
console.log(car.currentSpeed) // 0
console.log(car.isOn) // false
console.log(car.fuelLevel) // 0
car.speedUp(60) // should raise speed by 60
console.log(car.currentSpeed) // 0
car.start() // not enough fuel
car.addFuel(20)
car.start() // will turn on
car.speedUp(40)
console.log(car.currentSpeed) // 40
car.speedUp(60)
console.log(car.currentSpeed) // 100
car.speedUp(200) // ERROR: not allowed speed, max allowed speed is 160
car.turnOff() // will turn off car
console.log(car.isOn) // true
car.break(0) // will make car speed equal to 0, if break(20) speed will become 20
console.log(car. currentSpeed) // 0
car.turnOff()
console.log(car.speedHistory) // [0, 40, 60, 100, 0]

console.log(car.usageHistory)
/*
    turned on: not enough fuel
    added 20L fuel
    turned on: success
    speeded up to 40
    speeded up to 100
    turned off: turn off not allowed when driving
    speed down to 0
    turned off: success
*/
