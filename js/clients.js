async function getData(start, end) {
    let users = [];
    for (let user_id = start; user_id < end; user_id++) {
        let response;
        try {
            response = await fetch(`https://jsonplaceholder.typicode.com/users/${user_id}`);
        } catch(err) {
            throw err;
        }
        if (response.ok) {
            let ans = await response.json();
            users.push(ans);
        } else {
            throw Error(response.statusText);
        }
    }
    return users;
}

function renderUsers(users) {
    const clients = document.getElementsByClassName("clients")[0];
    users.forEach((user) => {
        let client = document.createElement("section");
        client.classList.add("client");

        let client_name = document.createElement("h2");
        client_name.classList.add("client__name");
        client_name.textContent = user.name;

        let client_company = document.createElement("i");
        client_company.classList.add("client__company");
        client_company.textContent = user.company.name;

        let client_email = document.createElement("p");
        client_email.classList.add("client__email");
        client_email.textContent = user.email;

        clients.appendChild(client);
        client.appendChild(client_name);
        client.appendChild(client_company);
        client.appendChild(client_email);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const preloader = document.getElementsByClassName("preloader")[0];
    const error = document.getElementsByClassName("error-message")[0];
    error.style.display = "none";

    let loadedUsers = 0;
    const usersPerPage = 5;
    let alreadyLoaded = false;

    function loadUsers() {
        preloader.style.display = "block";
        getData(loadedUsers + 1, loadedUsers + 1 + usersPerPage)
            .then((users) => {
                renderUsers(users);
                loadedUsers += users.length;
                preloader.style.display = "none";
            })
            .catch((err) => {
                preloader.style.display = "none";
                error.style.display = "flex";
                error.textContent = "⚠ Что-то пошло не так.";
            });
    }

    loadUsers();

    window.addEventListener("scroll", () => {
        if (!alreadyLoaded && window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
            preloader.style.display = "flex";
            alreadyLoaded = true;
            loadUsers();
        }
    });
})