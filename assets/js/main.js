function openModal(){
    const modal = document.querySelector(".window");
    modal.classList.remove("d-none");
    modal.classList.remove("gorsenmesin");
}

function closeModal(){
    const modal = document.querySelector(".window");
    modal.classList.add("d-none");
    modal.classList.add("gorsenmesin");
}
function addTr() {
    let nameInp = document.querySelector("input[name='ad']");
    let surnameInp = document.querySelector("input[name='soyad']");

    let person = {
        name: nameInp.value,
        surname: surnameInp.value
    }
    let array = [];
    array.push(person);
    const tbody = document.querySelector("table tbody");
    const sira = tbody.getElementsByTagName("tr").length;
    for (let i = 0; i < array.length; i++) {
         tbody.innerHTML += `<tr class= "pff"><th>${sira}</th><td>${array[i].name}</td><td>${array[i].surname}</td><td><button onclick="deleted()">Delete</button></td></tr>`
    }
    
   
    nameInp.value = "";
    surnameInp.value = "";
    closeModal();
}
function deleted() {
    const setr = document.getElementsByClassName("pff")
    for (let i = 0; i < setr.length; i++) {
        setr -= setr[i].remove()  
    }
}