const submit = document.querySelector('#submit')

submit.addEventListener('click', () => {
    event.preventDefault()
})

function sendForm() {
  const newPath = 'thanks.html';

  // Get the input value
  const emailInput = document.getElementById('email').value;

  // Regular expression for basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Test the input against the regular expression
  if (emailRegex.test(emailInput)) {
    document.getElementById('result').textContent = '';
    window.location.href = newPath;
  } else {
    document.getElementById('result').textContent = 'Invalid email. Please enter a valid email address.';
  }
}
document.getElementById("phone").addEventListener("input", function(event) {
  let inputValue = event.target.value;
  // Проверяем, содержит ли введенное значение что-то кроме цифр
  if (!/^\d+$/.test(inputValue)) {
      // Если содержит, выводим сообщение об ошибке
      document.getElementById("phoneResult").textContent = "Geben Sie die richtige Telefonnummer ein";
  } else {
      // Иначе очищаем сообщение об ошибке
      document.getElementById("phoneResult").textContent = "";
  }
});