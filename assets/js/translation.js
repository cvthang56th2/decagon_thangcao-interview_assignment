const translations = {
  en: {
    formTitle: 'Telephone Form with Validation',
    validationPhoneMessage: 'Please enter a valid telephone number.',
    telephoneLabel: 'Telephone',
    telephonePlaceholder: 'Enter telephone...',
    submitButton: 'Submit'
  },
  vi: {
    formTitle: 'Biểu mẫu điện thoại có xác thực',
    validationPhoneMessage: 'Vui lòng nhập số điện thoại hợp lệ.',
    telephoneLabel: 'Số điện thoại',
    telephonePlaceholder: 'Nhập số điện thoại...',
    submitButton: 'Gửi'
  }
};

const languageSelect = document.getElementById('languageSelect');

languageSelect.addEventListener('change', function () {
  const selectedLanguage = languageSelect.value;
  translateByLanguage(selectedLanguage)
});

const telephoneForm = document.getElementById('telephoneForm');
const translateElements = {
  validationPhoneMessage: document.querySelector('.invalid-feedback'),
  formTitle: telephoneForm.querySelector('h4'),
  telephoneLabel: telephoneForm.querySelector('[for="telephone"]'),
  telephoneInput: telephoneForm.querySelector('#telephone'),
  submitButton: telephoneForm.querySelector('button[type="submit"]'),
}

const translateByLanguage = (language) => {
  const { validationPhoneMessage, formTitle, telephoneLabel, telephoneInput, submitButton } = translateElements
  validationPhoneMessage.textContent = translations[language].validationPhoneMessage;
  formTitle.textContent = translations[language].formTitle;
  telephoneLabel.textContent = translations[language].telephoneLabel;
  telephoneInput.placeholder = translations[language].telephonePlaceholder;
  submitButton.textContent = translations[language].submitButton;
}