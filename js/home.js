const myInfo = ["Python Development","Word Press Development","Web Development"];

// myExpertise Animation

function callAnimation(x,i) {
  setTimeout(function() { animate(x,i) }, i*300);
}

function infoName (x,length) {
	for (i = 1; i <= length; i++) {
		callAnimation(x,i);
	}
	callAnimation(x,0);
}

let time = String(myInfo).length;

setInterval(repeat, time*300);

function repeat() {
let length = myInfo.length;
let time = 0;

for (let x = 0;x < length;x++) {
	if(x > 0){
		time += myInfo[x-1].length*300;
    setTimeout(function() { infoName(myInfo[x],myInfo[x].length) }, time);
	}
	else{
		setTimeout(function() { infoName(myInfo[x],myInfo[x].length) }, 300);
	}
}
}

function animate(info,index) {
	if (index > 0) {
		document.getElementById('myExpertise').innerHTML = info.slice(0,index);
	}
	else {
		document.getElementById('myExpertise').innerHTML = "";
	}
}

repeat();

// myField Details

const myField = [
  {'Python':'Python is a high-level, interpreted, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically-typed and garbage-collected. I have developed window applications in python language.'},
  {'Word Press':'WordPress is a free and open-source content management system written in PHP and paired with a MySQL or MariaDB database with supported HTTPS. Features include a plugin architecture and a template system, referred to within WordPress as Themes. I have learned to create different kinds of word press websites which includes Blogs, Portfolio, Membership and Buisness websites.'},
  {'Web Development':'Front-end web development is the development of the graphical user interface of a website, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that website.'}
];

let i = 1;

for (x in myField) {
	for (y in myField[x]) {
		document.getElementById('field' + i).innerHTML = "<h1>" + y + "</h1>" +
		                                                 "<p>" + myField[x][y] + "</p>";
		i = i + 1;                                                 
	}
}


// myServices Details

let services_list = ['I will do python programming with tkinter',
                     'I will do c and cpp programing',
                     'I will do python programming projects',
                     'I will do HTML5 css3 and javascript web development'];

let images_list = ['python tkinter Gig.png',
                   'C++ and C Gig.png',
                   'Python Gig.png',
                   'Web Developer Gig.png'];

let gig_links = ['https://www.fiverr.com/shayan_akram/do-python-programming-with-tkinter',
                 'https://www.fiverr.com/shayan_akram/do-programming-in-c-and-cpp-language',
                 'https://www.fiverr.com/shayan_akram/do-programming-in-python-language',
                 'https://www.fiverr.com/shayan_akram/do-html5-css3-and-javascript-web-development'];
let card_align = ['left','right'];
let mydiv = [];
let gig_link = [];
let card_id = [];
let image_id = [];
let image_title = [];

document.getElementById('myService').innerHTML = "My Services";

services = document.getElementById('Services');

for (let x in services_list) {
	div = document.createElement("div");
	
	mydiv[x] = document.createElement("div");
	mydiv[x].setAttribute("class",card_align[x%2]);

	card_id[x] = document.createElement("div");
	card_id[x].setAttribute("class","card");

	gig_link[x] = document.createElement("a");
	gig_link[x].href = gig_links[x];
	
	image_id[x] = document.createElement("img");
	image_id[x].src += "gigs/" + images_list[x];

	image_title[x] = document.createElement("div");
	image_title[x].setAttribute("class","desc");
	image_title[x].innerHTML = services_list[x];

  gig_link[x].appendChild(image_id[x]);
  gig_link[x].appendChild(image_title[x]);

  card_id[x].appendChild(gig_link[x]);

  mydiv[x].appendChild(card_id[x]);

  div.appendChild(mydiv[x]);

  services.innerHTML += div.innerHTML;
}
