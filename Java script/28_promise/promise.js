let process = {
    stock : ['Stock is Availble'],
    production : ['Production was Started'],
    Fruits : ['cherry' , 'kiwi' ,'grapes'],
    AddIngrediant : ['Milk Powder' , 'Water'],
    Toppings : ['Chocolate' , 'Nuts' ,`dutifuti`],
    Packing : ['Cone' , 'Cup' , 'box(1 KG)'],
    AfterPack : ['Serve IceCream'],
}

let promise = new  Promise(function ( resolve , reject){
    setTimeout(() => {
        console.log(`${process.stock[0]}`);
        console.log(`${process.Fruits[0]} Flavour in ice-cream`);
        resolve()

    } , 5000)
})

promise.then(() =>{
    console.log(`${process.production[0]}`);
} , 3000)

promise.then(() =>{
    console.log(`Add some ${process.AddIngrediant[0]} and ${process.AddIngrediant[1]}`);
} , 4000)

promise.then(() =>{
    console.log(`Add some toppings ${process.Toppings[0]} and ${process.Toppings[1]} and ${process.Toppings[2]}`);
} , 4000)

promise.then(() =>{
    console.log(`Packig in ${process.Packing[0]} and ${process.Packing[1]} and ${process.Packing[2]}`);
} , 4000)

promise.then(() =>{
    console.log(`${process.AfterPack[0]}`);
} , 4000)