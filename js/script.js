console.log('Its working')

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = '/css/style.css'
	}

	if(mode == 'blue'){
		document.getElementById('theme-style').href = '/css/blue.css'
	}

	if(mode == 'green'){
		document.getElementById('theme-style').href = '/css/green.css'
	}

	if(mode == 'orange'){
		document.getElementById('theme-style').href = '/css/purple.css'
	}

	localStorage.setItem('theme', mode)
}

var typed = new Typed("#demo", {
    strings: [
        "Learner",
        "Software Developer",
        "Programmer"
    ],
    fadeOut: true,
    typeSpeed: 70,
    backSpeed: 70,
    loop: true
})
// var typed1 = new Typed("#name", {
//     strings: [
//         "Hello, World!",
//         "",
//     ],
//     fadeOut: true,
//     typeSpeed: 50,
//     backSpeed: 50,
//     loop: true
// })