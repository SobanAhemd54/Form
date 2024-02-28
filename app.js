const firebaseConfig = {
    apiKey: "AIzaSyA_fdwZH-H5YgZLxplybrEKqvqwa2pPuXE",
    authDomain: "form-64e38.firebaseapp.com",
    databaseURL: "https://form-64e38-default-rtdb.firebaseio.com",
    projectId: "form-64e38",
    storageBucket: "form-64e38.appspot.com",
    messagingSenderId: "233011571236",
    appId: "1:233011571236:web:2b3a96a7631f0255c206b1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.database().ref('informations').on('child_added', (data) => {
    let data1 = data.val(); // Retrieve the value of the child
    console.log(data1);
    
    // Create a new paragraph element
    let p = document.createElement('p');
    
    // Loop through the key-value pairs in data1
    for (let key in data1) {
        // Create a text node for the key-value pair
        let keyValueText = document.createTextNode(`${key}: ${data1[key]}`);
        // Append the text node to the paragraph element
        p.appendChild(keyValueText);
        // Add a line break after each key-value pair
        p.appendChild(document.createElement('br'));
    }
    
    // Append the paragraph element to the main2 container
    main2.appendChild(p);
});




let main = document.getElementById('main');
let main2 = document.getElementById('main2');
function sub() {
    main.style.display = 'none';
    main2.style.display = 'block';
    let sel1 = document.getElementById('sel1').value;
    let sel2 = document.getElementById('sel2').value;
    let name = document.getElementById('name').value;
    let father = document.getElementById('fathername').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('Phone').value;
    let cnic = document.getElementById('cnic').value;
    let fathercnic = document.getElementById('fathercnic').value;
    let birth = document.getElementById('birth').value;
    let gender = document.getElementById('gender').value;
    let address = document.getElementById('address').value;
    let laptop1 = document.getElementById('laptop1').value;
    let qualification = document.getElementById('qualification').value;
    firebase.database().ref('informations').push({
        city: sel1,
        course: sel2,
        name: name,
        fathername: father,
        email: email,
        phone: phone,
        cnic: cnic,
        fathercnic: fathercnic,
        birthday: birth,
        gender: gender,
        address: address,
        laptop1: laptop1,
        qualification:qualification,
    }).then(() => {
        alert('Form submitted successfully!');
    }).catch(error => {
        console.error('Error submitting form:', error);
    });

}
