function startCountdown() {
    let n = document.getElementById("numberInput").value;
    let resultDiv = document.getElementById("result");

    resultDiv.innerHTML = "";

    let i = n;

    let interval = setInterval(function() {
        if (i >= 1) {
            resultDiv.innerHTML = i;
            i--;
        } else {
            clearInterval(interval);
            resultDiv.innerHTML = "Done!";
        }
    }, 1000);
}