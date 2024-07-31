// Activity 1
// Task 1
let p = document.querySelector("#para");
let btn = document.querySelector("#btn");
btn.addEventListener('click', (event) => {
    p.textContent = "This is new text";
});

// Task 2
let x = document.querySelector("#img");
x.addEventListener('dblclick', function() {
    if(x.style.visibility=="hidden")
        {
            x.style.visibility="visible";
        }
        else
        {
            x.style.visibility="hidden";
        }   
});


// Activity 2
// Task 3,4
let d = document.querySelector("#div");
d.addEventListener("mouseover",() => {
    d.textContent = "Open code development society";
    d.style.backgroundColor = "green";
});


// Activity 3
// Task 5
let h = document.querySelector("#header");
h.addEventListener("keydown",(event)=>{
    console.log(event.key); 
})

// Task 6
h.addEventListener("keyup",(event)=>{
    console.log(event.key); 
})


// Activity 4
// Task 7
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    console.log('Form data:', Object.fromEntries(formData.entries()));
});

// Task 8
document.getElementById('dropdown').addEventListener('change', function() {
    document.getElementById('para2').textContent = `Selected: ${this.value}`;
});


// Activity 5
// Task 9
document.getElementById('task9List').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        console.log(`Clicked item: ${event.target.textContent}`);
    }
});

// Task 10
document.getElementById('task10Parent').addEventListener('click', function(event) {
    if (event.target.classList.contains('dynamic-child')) {
        console.log(`Clicked dynamic child: ${event.target.textContent}`);
    }
});

