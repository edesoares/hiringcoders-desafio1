
const forms = document.querySelectorAll('form');

forms.forEach( (form, element) => {
    const name = document.querySelectorAll('.name');
    const email = document.querySelectorAll('.email');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (name[element].value != ''){
            localStorage.setItem("name", name[element].value)
            console.log(localStorage.getItem("name"));
            name[element].value = "Cadastrado!";
            setTimeout(() =>{
                name[element].value = '';
            }, 2000);
        }
        else{
            name[element].value = "Inválido.";
            setTimeout(() =>{
                name[element].value = '';
            }, 2000);
        }
        if (email[element].value != ''){
            localStorage.setItem("email", email[element].value)
            console.log(localStorage.getItem("email"));
            email[element].value = "Cadastrado!";
            setTimeout(() =>{
                email[element].value = '';
            }, 2000);
        }
        else{
            email[element].value = "Inválido.";
            setTimeout(() =>{
                email[element].value = '';
            }, 2000);
        }  
    });
});