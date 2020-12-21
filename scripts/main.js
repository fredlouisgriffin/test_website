let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox.webp') {
      myImage.setAttribute ('src','images/p1.jpg');
    } else {
      myImage.setAttribute ('src','images/firefox.webp');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

myButton.onclick = function() {
  setUserName();
}