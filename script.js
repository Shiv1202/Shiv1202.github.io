var place = document.getElementById('demo')
var arr = ["Learner", 'Programmer', "Software Developer"]


sleep(1000).then(() => {
    //// code
    
    const random = Math.floor(Math.random() * arr.length);
    place.innerHTML = arr[random]
        
})