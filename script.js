

const person ={
    name:"Tamiz",
    age :25,
    job:"SQA"

};
//console.log(person);

function handleContact(event){
    event.preventDefault();
   // console.log("Contact");
   // console.log(event);
   //console.log(event.target);
   //console.log(event.target.name);
  // console.log(event.target.email);
  // console.log(event.target.message);
  const name= event.target.name.value
  const email=event.target.email.value
  const message=event.target.message.value
  console.log(name);
  console.log(email);
  console.log(message);



    const successContainer = document.getElementById("success-container");
   console.log(successContainer);


   const nameParagraph = document.createElement("p");
   nameParagraph.innerText =`you name is : ${name}`;
  

   const emailParagraph = document.createElement("p");
   emailParagraph.innerText =`your email is : ${email}`;



   const messageParagraph = document.createElement("p");
   messageParagraph.innerText =`your message is : ${message}`;

     console.log(nameParagraph);
     console.log(emailParagraph);
     console.log(messageParagraph);

successContainer.appendChild(nameParagraph);
successContainer.appendChild(emailParagraph);
successContainer.appendChild(messageParagraph);
}