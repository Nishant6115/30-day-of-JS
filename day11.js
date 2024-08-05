//Activity 1 
//Task1 
function asyncFunc1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("success");
        },2000);
    });
};

asyncFunc1().then((message)=>{
    console.log(message);
})

//Task2 
function asyncFunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("failed");
        },2000);
    });
};

asyncFunc2().catch((message)=>{
    console.log(message);
})


//Activity 2 
//Task3 

console.log('Fetching from 1...');
asyncFunc1().then((message)=>{
    console.log(message);
    console.log('Fetching from 2...');
    return asyncFunc2().catch((message)=>{
        console.log(message);
    })
})

//Activity 3 
//Task4 

asyncFunc1().then((message)=>{
    return message
})

async function function1()
{
    const m=await asyncFunc1();
    console.log(m);
}

function1();

//Task5 
async function function2()
{
    try 
    {
        await asyncFunc2();
    } 
    catch (error) 
    {
        console.log(error);
    }
}

function2();

//Activity 4 
//Task6 
const URL='https://cat-fact.herokuapp.com/facts';

const fetchData = () => {
    return new Promise((resolve, reject) => {
        fetch(URL)
            .then(response => {
                if (!response.ok) {
                    reject(new Error(`HTTP error! status: ${response.status}`));
                } else {
                    response.json().then(data => resolve(data));
                }
            })
            .catch(error => {
                reject(error);
            });
    });
};

fetchData()
    .then(data => console.log(data))
    .catch(error => console.log(error));

//Task7  
const getFacts=async()=>
{
    try
    {
        console.log('getting data...');
        let response=await fetch(URL);
        if (!response.ok) {
            throw new Error('HTTP error! status: ${response.status}');
        }
        let data = await response.json();
        console.log(data);
    }
    catch(error)
    {
        console.log(error);
    }
    
};
getFacts();


//Activity 5 
//Task8

function asyncFunc3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("success3");
        },4000);
    });
};

const a=asyncFunc1();
const b=asyncFunc3();
Promise.all([a,b]).then((values)=>{
    console.log(values);
});

//Task9 
Promise.race([a,b]).then((values)=>{
    console.log(values);
});