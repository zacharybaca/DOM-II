// Your code goes here
//Click Event

allH2 = document.querySelectorAll('h2');
	// 1
	let h2Click = allH2.forEach(event => {
	    event.addEventListener('click', (event) => {
	        event.target.style.backgroundColor = 'green';
	    })
    });
    
allP = document.querySelectorAll('p');
    //2
    let allPClick = allP.forEach(event => {
        event.addEventListener('mouseenter', (event) => {
            event.target.style.backgroundColor = 'yellow';
        })
    })

let navLinks = document.querySelectorAll('.nav a');
    //3
let allNavLinks = navLinks.forEach(event => {
    event.addEventListener('click', (event) => {
        event.target.textContent = "You Clicked Me!";
        event.target.style.backgroundColor = 'blue';
        event.target.style.color = 'white';
    })
})

let img = document.querySelector('img');
	//4
	img.addEventListener('mousedown', (event) => {
	    event.target.style.border = '50px solid lightblue';
    })
    
    img.addEventListener('mouseup', (event) => {
	    event.target.style.border = '0px';
    })
    //5
    let h2DblClick = allH2.forEach(event => {
	    event.addEventListener('dblclick', (event) => {
	        event.target.style.backgroundColor = 'green';
	    })
	});
    //6
    let logo = document.querySelector('.logo-heading');
	
	logo.addEventListener('click', (event) => {
	    event.target.style.color = 'yellow';
    });
    //7
    logo.addEventListener('dblclick', (event) => {
        event.target.style.color = 'white';
        event.target.style.backgroundColor = 'black';
    })
    //8
    img.addEventListener('keydown', (event) => {
        event.target.style.border = '100px solid black';
    })
    //9
    logo.addEventListener('click', (event) => {
        event.target.style.border = '20px solid yellow';
    })
    //10