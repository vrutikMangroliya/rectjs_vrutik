/* javascript object and it's method */
{
// const obj = {id:1,firstname:"john",lastname:"doe",gender:"male",age:25}
// const obj = new Object()

// console.log(obj);
// console.log(obj);

// let data=obj.firstname

// let data1=obj["id"]
// console.log(data);
// console.log(data1);

// obj.address="u.s"

// console.log(obj);

// obj.id=2

// console.log(obj);
}

/* object method:- object.assign() method */

{
//  const obj={id:1,firstname:"John",lastname:"Doe",gender:"Male",age:30};
 
//  const num={key1:5,key2:7,key3:9};
 
//  let assign=Object.assign(obj,num) 

//  console.log(assign);

//  console.log(obj);

//  let assign1=object.assign({},obj,num) 

// console.log(assign1);
}

/* object method :- object. freeze() method */
{
    // const obj={id:1,firstname:"John",lastname:"Doe",gender:"Male",age:30};

    // obj.id=10;

    // console.log(obj);

    // obj.id=30

    // console.log(obj);

    // obj.key1=100

    // console.log(Obj);  
}

/* object method: object.create()method */
{
// const obj={
//     id :1 ,
//     firstName : "John" ,
//     lastName : "Doe" ,
//     gender : "male" ,
//     age:25,
//     newobj:function(){
//         console.log(`my frist name is  ${this.firstName} and i am ${this.occupation}`);
//     }
// }

// let newobject=object.create(obj);

// newobject.occupation="devloprer"

// console.log(newobject.occupation);

// console.log(newobject.newobj());

// console.log(obj);
}



// lec 19-------------------------------------------------------------------

/* javascript object method */

/* isforzen method */

{
    // let  obj = {key1:56,key2:65,key3:98,key4:99};

    // obj.key1=25

    // delete obj.key1

    // Object.freeze(obj) // freezing the object

    // obj.key1=45

    // delete obj.key2

    // let data=object.isfrozen(obj);

    // console.log(obj);
}

/* Object.seal() Method */

{

// let obj = {key1:56, key2:65, key3:98, key4:100}

// Object.seal(obj)

// delete obj.key1

// console.log(obj);

// let Data Object.isSealed(obj)

// console.log(Data);
}

/* hasOwn() Method */

{

// let obj = {key1:"javascript", key2:"html", key3: "bootstrap5", key4: "nodejs"}

// let Data = Object.hasOwn(obj, "html")

// console.log(Data);

// console.log(obj.hasOwnProperty("key1"));

}
/* Object.entries() Method */
{
// let obj = {key1:"javascript", key2:"html", key3: "bootstrap5", key4: "nodejs"}

// for (const [key, value] of Object.entries(obj)){

// console.log('This Object Key are ${key} and It's Value is ${value}`);
// }

// let array = [12,24,15,68,69]

// for (const value of array){
    
    // console.log('${value}`);
    
    // }
}
    /* Object.keys() */


    {

        // let obj = {key1:"javascript", key2: "html", key3: "bootstrap5", key4:"nodejs"}
        
        // let Data = Object.keys(obj)
        
        // console.log(Data);
        
    }
        
        /* Object.values() Method */

        {

        // let obj = {key1:"javascript", key2:"html", key3: "bootstrap5", key4:"nodejs"}

        // let Data Object.values (obj)

        // console.log(Data):
        }

    /* Object.groupBy() */

{
// let Grosserys = [
// name:"potato", type: "vegetable", price: 40, quntity:25},
// {name:"ladyfingures", type: "vegetable", price:20, quntity:30},
// {name:"mango", type:"fruit", price: 1200, quntity:5},
// {name:"orange", type:"fruit", price: 200, quntity:0},
// {name:"fish", type: "meat", price: 2000, quntity:100}
// ]

// console.log(Grosserys);
// let Data Object.groupBy(Grosserys, ({name}) => name)

// console.log(Data);

// let Data1 = Object.groupBy(Grosserys, ({type}) => type)

// console.log(Data1);

// function Stock({quntity}){
// return quntity > 10 ? "enough Stock": "Restock" 
//}

// let data3=object.groupBy(grosserys,stock)
// console.log(data3);

 }