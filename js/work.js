const skill_list = ["C", "C&#43&#43", "R", "Python", "MySQL", "SQL", "Mongo DB", "HTML", "CSS", "JavaScript", "PHP", "Bootstrap", "Word Press"];
const project_dict = [
	{title:"Space Invaders", description:"Write a Program in C++ Language by using two-dimensional board having features implemented to kill an enemy using a shooting character just like space invaders game."},
	{title:"FIFA-19 Companion-Your Ultimate FIFA Guide", description:"Fifa-19 companion application is build using shiny application to give better insights of player's performance and analytics using Data Science."},
	{title:"Communication System for Paralyzed People", description:"This application is built for people with locked-in syndrome disease for communication using an eye blink."},
	{title:"Mp3 Player", description:"This application is built to play mp3 files."},
	{title:"Digital Clock", description:"This application is built to use prayer scheduling data sets and play azan on prayer time."},
	{title: "Resume Templates", description:"I have designed my Resume Templates in html and css."},
	{title:"portfolio website", description: "I have built my portfolio front-end using html, css and JavaScript."}
];
let mySkills = "";
let myProjects = "";

// my skills

for (x of skill_list) {	
	mySkills += "<li>" + x + "</li>";
}

document.getElementById('skills').innerHTML = mySkills;

// my projects

for (x in project_dict) {	
	myProjects += "<dt><h3>" + project_dict[x].title + "</h3></dt>" +
	"<dd><p>" + project_dict[x].description + "</p></dd>";
}

document.getElementById('projects').innerHTML = myProjects;