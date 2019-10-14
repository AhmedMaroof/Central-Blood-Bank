

// display borrwer radio button
function disableField(){
    if(document.getElementById('Borrower').checked) {
        document.getElementById('borrowerRadio').style.display = "block";
        document.getElementById('donnerRadio').style.display = "none";
        document.getElementById('medicineRadio').style.display = "none";
    }else if(document.getElementById('Donner').checked){
        document.getElementById('donnerRadio').style.display = "block";
        document.getElementById('borrowerRadio').style.display = "none";
        document.getElementById('medicineRadio').style.display = "none";
    } else if(document.getElementById('Medicine').checked){
        document.getElementById('medicineRadio').style.display = "block";
        document.getElementById('borrowerRadio').style.display = "none";
        document.getElementById('donnerRadio').style.display = "none";
    }
}

