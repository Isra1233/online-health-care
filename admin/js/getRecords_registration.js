var main = document.getElementById("main");

firebase.database().ref('registeration').on('child_added', function (data) {

    var tbody = document.createElement("tbody");
    var tr = document.createElement("tr");

    var tdForKey = document.createElement("td");
    var tdForKeyTextNode = document.createTextNode(data.val().key);
    tdForKey.appendChild(tdForKeyTextNode);

    var tdForFullName = document.createElement("td");
    var tdForFullNameTextNode = document.createTextNode(data.val().name);
    tdForFullName.appendChild(tdForFullNameTextNode);

    var tdForGender = document.createElement("td");
    var tdForGenderTextNode = document.createTextNode(data.val().gender);
    tdForGender.appendChild(tdForGenderTextNode);

    var tdForDateOfBirth = document.createElement("td");
    var tdForDateOfBirthTextNode = document.createTextNode(data.val().dateOfBirth);
    tdForDateOfBirth.appendChild(tdForDateOfBirthTextNode);

    var tdForPhoneNumber = document.createElement("td");
    var tdForPhoneNumberTextNode = document.createTextNode(data.val().phoneNumber);
    tdForPhoneNumber.appendChild(tdForPhoneNumberTextNode);

    var tdForEmailAddress = document.createElement("td");
    var tdForEmailAddressTextNode = document.createTextNode(data.val().emailAddress);
    tdForEmailAddress.appendChild(tdForEmailAddressTextNode);

    tr.appendChild(tdForKey);
    tr.appendChild(tdForFullName);
    tr.appendChild(tdForGender);
    tr.appendChild(tdForDateOfBirth);
    tr.appendChild(tdForPhoneNumber);
    tr.appendChild(tdForEmailAddress);

    tbody.appendChild(tr);
    main.appendChild(tbody);

})