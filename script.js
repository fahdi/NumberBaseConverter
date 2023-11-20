
function convertNumber() {
    let number = document.getElementById("numberInput").value;
    let format = document.querySelector('input[name="format"]:checked').value;
    let result;

    switch(format) {
        case "hex":
            result = parseInt(number).toString(16).toUpperCase();
            break;
        case "dec":
            result = parseInt(number).toString(10);
            break;
        case "oct":
            result = parseInt(number).toString(8);
            break;
        case "bin":
            result = parseInt(number).toString(2);
            break;
        default:
            result = "Invalid Format";
    }

    document.getElementById("numberInput").value = result;
}
