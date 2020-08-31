let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/Firefox_logo.png'){
        myImage.setAttribute('src', 'images/firefox_logo2.png');
    } else {
        myImage.setAttribute('src', 'images/Firefox_logo.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
}

myButton.onclick = function(){
    setUserName();
}