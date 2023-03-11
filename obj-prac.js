// const obj = {
//     name : `Mafat`,
//     age : 26,
//     lala :  () => {
//         return console.log(obj.age);
//     },
//     job : [`Roti Maker`, `Floor Cleaner`, `Bathroom cleaner`],
//     address : {
//         city :  `Sylhet`,
//         country : `Bangladesh`,
//     },

// }

// obj.lala()

// const Details = `Hi, My name is ${obj.name}. I live in ${obj.address.city}. I do three kind of job. one of them is ${obj.job[1]}.`;
// console.log(Details);



// const arrowFunction = (num1, num2) =>{
//     let resultNum1 = num1 + 7;
//     const resultNum2 = num2 + 7;
//     const resultFinal = resultNum1 + resultNum2;
//     return console.log(resultFinal)
// }

// arrowFunction(1001, 120);

// const numArray = [80,20,90,30,40,50];
// const newArray= []
// let bab = numArray.map(num => num % 7)


// console.log(bab)

// const obj = {
//     name : "Safat",
//     age : 20,
// }

// const array = [90,12,232,32]

// let ver1 = obj.name;
// let balance = array[1];

// console.log(ver1, balance)

// fetch(`https://jsonplaceholder.typicode.com/photos`)
// .then(res => res.json())
// .then(data => loading(data))

// function loading(data){
//     let img = data[0].url;
//     let div = document.getElementById('loader');
//     let div2 = document.createElement('div');
//     div2.innerHTML = `<div class="card card-compact w-96 bg-base-100 shadow-xl">
//                             <figure><img src="${img}" alt="Shoes" /></figure>
//                                 <div class="card-body">
//                                 <h2 class="card-title">Shoes!</h2>
//                                 <p>If a dog chews shoes whose shoes does he choose?</p>
//                         <div class="card-actions justify-end">
//                             <button id= "btn" class="btn btn-primary">Buy Now</button>
//                         </div>
//                         </div>
//                       </div>`
//     div.appendChild(div2)
//     document.getElementById('btn').addEventListener('click', function(){
//         console.log("hi")
//     })
// }
const alertBtn = () => {
    alert('hi')
    const lala = prompt("enter");
    console.log(lala)
    return lala


} 




