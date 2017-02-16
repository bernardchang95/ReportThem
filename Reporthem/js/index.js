function createNew() {
    var newEmailLink = document.createElement('newEmailLink');
    var newEmailText = document.createTextNode("newEmailText");
    newEmailLink.appendChild(newEmailText);
    newEmailLink.title(newEmailText);
    newEmailLink.href('Forums.html');
    document.body.appendChild(newEmailLink);
    document.write(newEmailLink);
}

function storeData() {
    createNew();
}