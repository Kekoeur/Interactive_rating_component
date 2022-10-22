function getValue() {
    let checked = document.querySelector('input[name="rating"]:checked')
    if(checked){
        let val = checked.value;
        
        let ratingElt = document.getElementById('rating');
        let thankElt = document.getElementById('thank-you');

        ratingElt.style.display = "none";
        thankElt.style.display = "flex";

        let displayVal = document.getElementById("your-value");
        displayVal.innerHTML = val;
    }
}
