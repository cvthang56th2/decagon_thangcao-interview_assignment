const form = document.getElementById('telephoneForm');
const telephoneInput = document.getElementById('telephone');

telephoneInput.addEventListener('input', function () {
  validateTelephone(telephoneInput.value)
})

form.addEventListener('submit', function (event) {
  event.preventDefault();
  if (!validateTelephone(telephoneInput.value)) {
    return
  }
  submitForm()
});

const submitForm = () => {
  alert('Submitted')
}

function checkIsValidTelephone(value) {
  if (!value) {
    return false
  }
  const intlPhonePattern = /^(\+|0)([1-9]\d{0,2})?(\d{6,14})$/;
  return intlPhonePattern.test(value)
}

function validateTelephone(value) {
  const isValid = checkIsValidTelephone(value)
  if (isValid) {
    telephoneInput.classList.remove('is-invalid');
  } else {
    telephoneInput.classList.add('is-invalid');
  }
  return isValid
}
