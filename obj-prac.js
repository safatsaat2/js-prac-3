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