function sendEmail() {
    let yourName = document.getElementById("yourName").value;
    let yourEmail = document.getElementById("yourEmail").value;
    let yourMessage = document.getElementById("yourMessage").value;

    let link = "mailto:kian.shirvani@outlook.com" +
               "?subject=" + encodeURIComponent("Message from " + yourName) +
               "&body=" + encodeURIComponent(yourMessage + "\n\n" + "From: " + yourEmail);

    window.location.href = link;
}
