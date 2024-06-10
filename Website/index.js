// const heading = document.querySelector('h1');
// heading.textContent = 'SSPA!';

// const para = document.querySelector('p');
// para.textContent = 'Why hello there!';

// document.querySelector('html').addEventListener('click', () =>{
//      alert('Ouch! Stop poking me!');
// });

// function setUserName(){
//      const name = prompt('Enter Username.');
//      if(!name){
//           setUserName();
//      }else{
//           localStorage.setItem('name', name);
//           myHeading.textContent = `Welcom to the website, ${name}`;
//      }
// }

// setUserName();


const image  = document.querySelector("img")

image.onclick = () => {
     const mySrc = image.getAttribute("src");
     if(mySrc === "images/sspalogo.png"){
          image.setAttribute("src", "images/256x256.png");
     }
     else{
          image.setAttribute("src", "images/sspalogo.png");
     }
};



let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");




function setUserName(){
     const name = prompt('Enter your Username.');
     if(!name){
          setUserName();
     }
     else{
          localStorage.setItem('name', name);
          myHeading.textContent = `Welcome, ${name}`;
     }
}

if(!localStorage.getItem('name')){
     setUserName();
}else{
     const storedName = localStorage.getItem('name');
     myHeading.textContent = `Good morning ${storedName}`;
}
myButton.onclick = () => {
     setUserName();
};