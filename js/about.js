const about = {
	Intro: {'Who I Am':'I am a computer scientist, having expertise in the domain of software development. I have developed windows applications, mobile applications and data Science projects in python language, I have also work in web development both frontend and backend. Furthermore, I have keen desire to work in the growing environment in the field of modern technologies and always explore and learn new things. Moreover, I have the ability to work as an individual and as well as a team player.'},
	Education: {'Unique High School, Lahore, Punjab':'2011 &#45 2013','Punjab Group of Colleges, Lahore, Punjab':'2013 &#45 2015','University of Central Punjab, Lahore, Punjab':'2016 &#45 2020'}
}

let myEducation = "";

for (x in about) {
	if (x === 'Intro') {
		for (y in about[x]) {
			document.getElementById('aboutMeHeading').innerHTML = y;
			document.getElementById('aboutMe').innerHTML = about[x][y];
		}
	}
	else {
        document.getElementById('educationHeading').innerHTML = x;
		myEducation += '<dl>';
		for (y in about[x]) {
			myEducation += '<dt><h3>' + y + '</dt></h3>' +
			             '<dd><p>' + about[x][y] + '</p><dd>';
		}
		myEducation += '</dl>';
        document.getElementById('education').innerHTML = myEducation;
	}
}