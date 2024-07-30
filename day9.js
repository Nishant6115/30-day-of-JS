// Activity 1
// Task 1
let x = document.querySelector("#hello");
x.innerText = "hello world";

// Task 2
let y = document.querySelector(".class");
y.style.backgroundColor = "green";

// Activity 2
// Task 3
let a = document.createElement("div");
a.innerHtml = "open code development society";

// Task 4
let q = document.createElement("li");
q.innerHTML = "Banana";
let b = document .querySelector("ul");
b.append(q);


// Activity 3
// Task 5
y.remove();

// Task 6
b.removeChild(b.firstElementChild);


// Activity 4
// Task 7
let img = document.querySelector("img");
img.setAttribute("src","https://static.javatpoint.com/images/javascript/javascript_logo.png");

// Task 8
let r = document.querySelector("#list");
r.style.backgroundColor = "pink";


// Activity 5
// Task 9
let p = document.querySelector("#para");
let btm = document.querySelector("#btm");

btm.addEventListener('click',function() {
    p.textContent = "Welcomt o open coding development society";
});

// Task 10
let div = document.querySelector("#d");
div.addEventListener('mouseover',function() {
    div.style.border = 'thick solid #0000FF';
});




