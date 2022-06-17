// Delivery companies usually charge by delivery distance, for example:
// first 10km flat 40 dollars
// next 10km, 5 dollars per 1km
// next 5km, 3 dollars per 1km
// remaining km, 2 dollars per 1km

// the task is to write a function that calculate the delivery fee from 2 inputs, the pricing model and distance for this delivery

// const pricingModel =[{price:5,km:[1,10], type:"second"}, {price:3,km:[1,5],type:"three"}, {price:2,km:[1,100000], type:"finial"}]
// const pricingModel =[{price:2,km:25, type:"second"}, {price:3,km:5,type:"three"}, {price:5,km:10, type:"finial"},{price:40,km:10, type:"finial"}]



const pricingModel =[
  {price:40, unit:1,km:10, isRate:true},
  {price:5, unit:10,km:10, isRate:false}, 
  {price:3, unit:5,km:5, isRate:false}, 
  {price:2, km:Number.MAX_SAFE_INTEGER}
]
function calcDeliveryFee(pricingModel, distance) {
  let price=0;
  if (distance ==0) return price
  let remaining = distance;
  for(let i =0 ;i<pricingModel.length; i++){
    if(remaining >=1 && remaining <=pricingModel[i].km){
      if(pricingModel[i].isRate){
        return pricingModel[i].price
      }else{
        return price+=remaining*pricingModel[i].price
      }
    }
    price += pricingModel[i].price* pricingModel[i].unit
    remaining -= pricingModel[i].km
  }
  return 0
}
console.log(calcDeliveryFee(pricingModel, 23)) // 40
// console.log(calcDeliveryFee(pricingModel, 15)) // 65
// console.log(calcDeliveryFee(pricingModel, 50)) // 155




