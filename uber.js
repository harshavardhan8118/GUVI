const baseFare = 25;
const costPerMin = 3;
const costPerkm = 5;
const bookFee = 12;
const surgeBoost = 3;
class UberPrice{
   constructor(rideDistance,rideTime){        
        this.rideDistance = rideDistance;
        this.rideTime = rideTime;
   }

   setRideDistance(rideDistance){
    this.rideDistance = rideDistance;
   }

   getRideDistance(){
    return this.rideDistance;
   }

   setRideTime(rideTime){
    this.rideTime = rideTime;
   }

   getRideTime(){
       return rideTime;
   }

   getPrice(){
        let result = baseFare+( (costPerMin * this.rideTime)+(costPerkm * this.rideDistance) * surgeBoost) + bookFee;
        return result;
   }
}

let priceObj = new UberPrice(10,30);
console.log(priceObj.getPrice());