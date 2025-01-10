// Получаем ссылки на кнопки по их ID для возраста
const modal = document.querySelector('.modal');
const yesButton = document.getElementById('yesBtn');
const noButton = document.getElementById('noBtn');


// Проверяем, был ли уже сделан выбор 
const userChoice = localStorage.getItem('ageVerified');

// Если выбор уже был сделан, то не показываем модальное окно
if (userChoice) {
  modal.classList.remove('modal--active');
} else {
  document.addEventListener('DOMContentLoaded', () => {
    modal.classList.add('modal--active');
  });
}

yesButton.addEventListener('click', () => {
  modal.classList.remove('modal--active'); // Закрываем окно
  localStorage.setItem('ageVerified', 'yes'); // Сохраняем выбор в localStorage
});

noButton.addEventListener('click', () => {
  localStorage.setItem('ageVerified', 'no'); // Сохраняем выбор в localStorage
  window.location.href = 'https://www.google.com';  
});


// Получаем ссылки на кнопки по их ID для куки
const cookieModal = document.getElementById('cookieModal');
const cookieSettingsButton = document.getElementById('cookieSettingsBtn');
const cookieAcceptButton = document.getElementById('cookieAcceptBtn');
const cookieDeclineButton = document.getElementById('cookieDeclineBtn');

// Проверяем, было ли уже подтверждено использование куков
const cookieConsent = localStorage.getItem('cookieConsent');

// Если пользователь уже принял куки, не показываем окно
if (!cookieConsent) {
  document.addEventListener('DOMContentLoaded', () => {
    cookieModal.classList.add('cookie-modal--active');
  });
}

// Обработчик кнопки Настройки
cookieSettingsButton.addEventListener('click', () => {
  alert('Настройки куков: тут можно настроить их использование.');
  // Окно можно будет закрыть или дать возможность изменить настройки
  
});

// Обработчик кнопки Принять
cookieAcceptButton.addEventListener('click', () => {
  cookieModal.classList.remove('cookie-modal--active'); 
  localStorage.setItem('cookieConsent', 'accepted'); 
});

// Обработчик кнопки Отклонить
cookieDeclineButton.addEventListener('click', () => {
  cookieModal.classList.remove('cookie-modal--active');
  localStorage.setItem('cookieConsent', 'declined'); 
  alert('Вы отклонили использование куки.');
});