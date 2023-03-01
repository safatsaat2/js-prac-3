const obj = {
    name : `Mafat`,
    age : 26,
    lala :  () => {
        return console.log(obj.age);
    },
    job : [`Roti Maker`, `Floor Cleaner`, `Bathroom cleaner`],
    address : {
        city :  `Sylhet`,
        country : `Bangladesh`,
    },

}

obj.lala()

const Details = `Hi, My name is ${obj.name}. I live in ${obj.address.city}. I do three kind of job. one of them is ${obj.job[1]}.`;
console.log(Details);

const numm = 89;

const arrowFunction = (num1, num2) =>{
    let resultNum1 = num1 + 7;
    const resultNum2 = num2 + 7;
    const resultFinal = resultNum1 + resultNum2;
    return console.log(resultFinal)
}

arrowFunction(1001, 120);