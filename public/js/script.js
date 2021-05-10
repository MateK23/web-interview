function appendFunction() {
    var li = document.createElement("li");
    var emailTag = document.createElement("h5");
    var messageTag = document.createElement("p");

    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var emailNode = document.createTextNode(email);
    var messageNode = document.createTextNode(message);

    emailTag.appendChild(emailNode);
    messageTag.appendChild(messageNode);

    var documentFragment = document.createDocumentFragment();
    documentFragment.appendChild(li);
    li.appendChild(emailTag);
    li.appendChild(messageNode);

    if (email === '' || message === '') {
        alert("ველი ცარიელია!");
    } else {
        document.getElementById("messageBox").appendChild(documentFragment);;
    }

    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}