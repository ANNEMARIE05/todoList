function addPerson(person) {
    const existingPersons = getPersons();
    person.id = existingPersons.length + 1;
    existingPersons.push(person);
    localStorage.setItem('persons', JSON.stringify(existingPersons));
}

function getPersons() {
    const storedPersons = localStorage.getItem('persons');
    return storedPersons ? JSON.parse(storedPersons) : [];
}

function registerPerson(username, email, contact, password) {
    const newPerson = {
        username: username,
        email: email,
        contact: contact,
        password: password,
        id: 0, // This will be updated in addPerson function
        statut: 1 // Assuming this is a default status for a new user
    };

    addPerson(newPerson);
}

document.getElementById("submit").addEventListener('click', function (event) {
    event.preventDefault(); // Prevents the form from submitting and reloading the page

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const contact = document.getElementById('contact').value;
    const password = document.getElementById('password').value;

    registerPerson(username, email, contact, password);
    
    // Optionally, you can redirect to another page or perform other actions after registration.
    window.location.pathname = "/pages/connex.html";
});