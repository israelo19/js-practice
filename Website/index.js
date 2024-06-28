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

//t newpage = 

let myButton = document.querySelector("#changeUser");
let employeeButton = document.querySelector("#employeeLogin")

let page = undefined;

function redirect(page){
     location.href = page;

   //  <a href="newpage.html"></a>
}

employeeButton.onclick = () => {
     employeeButton.onclick = () => {
          window.location.href = '/login.php';
      };
};





