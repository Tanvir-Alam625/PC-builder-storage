// calling function
getEvent('eightGB','memory-cost', 0);
getEvent('sixteenGB','memory-cost', 200);
const ssd1 = getEvent('ssd1','storage-cost',0);
const ssd2 = getEvent('ssd2','storage-cost',100);
const ssd3 = getEvent('ssd3','storage-cost',200);
getEvent('paid-delivery','delivery-cost',20);
getEvent('free-delivery','delivery-cost',0);
// click event handler

function getEvent(eventId, costId, price){
    document.getElementById(eventId).addEventListener('click',function(){
        const cost = document.getElementById(costId);
        cost.innerText = price;
        getTotal()
    });
}

// total function 
function getTotal(){
    const mainPrice = document.getElementById('best-price').innerText;
    const memoryCost = document.getElementById('memory-cost').innerText;
    const storageCost = document.getElementById('storage-cost').innerText;
    const deliveryCost = document.getElementById('delivery-cost').innerText;
    const total = parseFloat(mainPrice) +parseFloat(memoryCost)+
    parseFloat(storageCost)+parseFloat(deliveryCost);
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = total;
}





// memorySpace2.addEventListener('click',function(){
//     const memoryCost2 = document.getElementById('memory-cost');
//     memoryCost2.innerText = 200
// });
// // memorySpace1
// memorySpace1.addEventListener('click',function(){
//     const memoryCost1 = document.getElementById('memory-cost');
//     memoryCost1.innerText = 0;
// });
// ssd2
// ssd2. addEventListener('click',function(){
//     const storage = document.getElementById('storage-cost');
//     storage.innerText = 100;
// });
// // ssd2
// ssd3. addEventListener('click',function(){
//     const storage1 = document.getElementById('storage-cost');
//     storage1.innerText = 200;
// });
// // ssd2
// ssd1. addEventListener('click',function(){
//     const storage = document.getElementById('storage-cost');
//     storage.innerText = 0;
// });
// // quick delivery
// earlyDelivery. addEventListener('click',function(){
//     const deliveryCost = document.getElementById('delivery-cost');
//     deliveryCost.innerText = 20;
// });