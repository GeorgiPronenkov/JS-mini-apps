function validateForm() {

    for (let i = 0; i < myform.elements.length; i++) {
      if (myForm.elements[i].className === "req" &&
          myForm.elements[i].value.length === 0) {
          alert('Please fill in all required fields');
          return false;
      }
    }

    let email = document.getElementById('email').value;
    let atpos = email.indexOf('@');
    let dotpos = email.lastIndexOf('.');
    if (atpos < 1 || dotpos < atpos || dotpos >= x.length) {
        alert('Please fill a valid input');
        return false;
    }
}
