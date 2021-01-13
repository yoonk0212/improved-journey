function nightDayHandler(self){
    var target = document.querySelector('body');
    if(self.value === 'Night'){
        self.value = 'Day';
        self.id = "one";
        target.className = 'night';
    }
    else{
        self.value = 'Night';
        self.id = 'two';
        target.className = 'day';
    }
}

// var countRed = document.getElementById('redbutton').childElementCount;
// var countBlue = document.getElementById('bluebutton').childElementCount;
// var countYellow = document.getElementById('yellowbutton').childElementCount;

function colorchanger(self){
    var target = document.querySelector('body')
    // if(self.id === 'redbutton'){
    //     document.getElementById('redbutton').id='yellowbutton';
    //     target.className = 'red';
    //     document.getElementById('bluebutton').id='redbutton';
    // }
    // else if(self.id === "bluebutton"){
    //     if(target.className === "red"){
    //         document.getElementById('bluebutton').id='yellowbutton';
    //         target.className="blue";
    //         document.getElementById('yellowbutton').id='redbutton';
    //     }
    //     if(target.className === "yellow"){
    //         document.getElementById('bluebutton').id='redbutton';
    //         target.className="blue";
    //         document.getElementById('redbutton').id='yellowbutton';
    //     }
    // }
    // else if(self.id === "yellowbutton"){
    //     document.getElementById("yellowbutton").id='redbutton';
    //     target.className = 'yellow';
    //     document.getElementById('redbutton').id='yellowbutton';

    // }
    if(self.id === "redbutton"){
        for (i = 0; i < 5; i++){
        target.className='red';
        document.getElementById('redbutton').id='yellowbutton';
        }
    }
    else if(self.id === 'bluebutton'){
        for (i = 0; i < 5; i++){
        target.className='blue';
        document.getElementById('bluebutton').id="yellowbutton";
        }
    }
    else{
        location.reload()
    }
}
