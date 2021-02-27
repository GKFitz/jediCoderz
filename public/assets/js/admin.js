document.addEventListener('DOMContentLoader', (e) => {
    console.info('DOM loaded');
    // const username = document.getElementById('username');
    // const age = document.getElementById('age');
    // const breed = document.getElementById('breed');
    // const foodRequirements = document.getElementById('foodRequirements');
    // const sectionD = document.getElementsByClassName('section_d');
    const dogInData = document.getElementsByClassName('dog_in');
    const info = document.getElementById('info');

    // CREATE - use POST request to create a new dog to system / or foodreqs ... TBD
    const insertClientData = (clientData) => {
        fetch('api/client', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(clientData),
        }).then(getClients).catch((err) => console.log(error));
    };

    //handle when client info is submitted 
    const handlesClientSubmit = (e) => {
        e.preventDefault();
        if(!info.nodeValue.trim()) {
            alert('Please provide required information.');
            return;
        }
        insertClientData({
            name: info.value.trim(),
        });
    };
    // is this a submit?
    document.addEventListener('submit', handleAuthorFormSubmit);


    // create list for clients to view inside admin 
    const createClientRows = (clientData) => {
        const tr = document.createElement('tr');
        tr.setAttribute('data-client', JSON.stringify(clientData));
        // set cleitn ID on the element 
        tr.id = clientData.id;

        const td = document.createElement('td');
        td.textContent = clientData.name;
        tr.appendChild(td);

        // element to show the posts
        return tr;
    };

    // DELETING THE DOG ACCOUNT ENTIRELY - dogInData


    // grab all clients 
    const getClients = () => {
        console.log('getting called - clients');
        fetch('api/accounts', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => response.json()).then((data) => {
            // console.log('Success in getting client accounts:', accounts);
            const rowsAdd = [];
            for(let i = 0; i < data.length; i++) {
                rowsAdd.push(createClientRow(data[i]));
            }
            // need to create the function for renderClientList for rows 
            renderClientList(rowsAdd);
            dogInData.value = '';
        }).catch((error) => console.error('Error: ', error));
    };
    // get list of clients
    getClients();
});

/**
 *
<div class="flex"><span>Pet ID:</span> <b>{{ petId }}</b> </div> [NO MORE PETID]
<div class="flex"><span>Username:</span> <b>{{ username }}</b> </div>
<div class="flex"><span>Age:</span> <b>{{ age }} years old</b> </div>
<div class="flex"><span>Breed: </span> <b>{{ breed }}</b> </div>
<div class="flex"><span>Food Requirements:  </span> <b>{{food_requirements}}</b> </div>
 */