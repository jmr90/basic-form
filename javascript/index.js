function validateInputs() {
    var submitForm = true;
    var formErrors;
    var fullname = new String(document.myForm.fullname.value);
    var email = new String(document.myForm.email.value);
    var phone = new String(document.myForm.phone.value);
    var emailFilter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    var phoneFilter = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/

    if (fullname.length < 1 || email.length < 1 || phone.length < 1) {
        console.log("inputs not filled in");
        formErrors = "All fields are required. Please complete the form.";
        submitForm = false;
    } else {
        if (!emailFilter.test(email) || !phoneFilter.test(phone)) {
            console.log("input not formatted");
            formErrors = "Your form contains invalid field entries. Please correct your form before submitting";
            submitForm = false;
        }
    }
    if (submitForm == false) {
        console.log("submitForm was false, submit prevented");
        alert(formErrors);
        return false;
    } else {
        console.log("form submitted");
        fullname = fullname.replace(/[^a-z0-9\s\-]/gim,"");
        fullname = fullname.trim();
        email = email.replace(/[^a-z0-9_@.-]/gim,"");
        email = email.trim();
        phone = phone.replace();
        phone = phone.trim();
        document.myForm.submit();
    }
}

