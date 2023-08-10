const form = document.querySelector('.form1');
const input = document.querySelector('.initial');
const container = document.querySelector('.container');
const main = document.querySelector('main');
form.addEventListener("submit", (e) => {
    e.preventDefault();
    addtextcontent();
})
function addtextcontent(){
    let val= input.value; 
    if(val =="")
    {
        alert("First fill the message");
    }
    else{
        input.value =" ";
    const container = document.createElement("div");
    container.classList.add("container");
    main.append(container);  
    const box = document.createElement("div");
    box.classList.add("box");
    container.append(box);
    const input1 = document.createElement("input");
    input1.classList.add("taskinput");
    input1.type= "text";
    input1.value= val;
    input1.setAttribute("readonly", "readonly");
    box.append(input1);
   
    // const delete = document.querySelector('.delete');
}
}

   