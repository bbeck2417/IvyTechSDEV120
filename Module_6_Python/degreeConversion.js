function convertCtoF(degressCelsius) {
   return (degressCelsius * 9 / 5) + 32;
}
function convertFtoC(fahrenheit) {
   return (fahrenheit - 32) * 5 / 9;
}

function domLoaded() {
   const cInput = document.getElementById('cInput');
   const fInput = document.getElementById('fInput');
   const convertButton = document.getElementById('convertButton');
   const errorMessage = document.getElementById('errorMessage');
   const weatherImage = document.getElementById('weatherImage');

   

   

   function updateWeatherImage(fahrenheit) {
      if (fahrenheit > 50) {
         weatherImage.src = 'images/warm.png';
         weatherImage.alt = 'Warm';
      } else if (fahrenheit >= 32) {
         weatherImage.src = 'images/cool.png';
         weatherImage.alt = 'Cool';
      } else {
         weatherImage.src = 'images/cold.png';
         weatherImage.alt = 'Cold';
      }
   }

   convertButton.addEventListener('click', () => {
      const celsiusValue = parseFloat(cInput.value);
      const fahrenheitValue = parseFloat(fInput.value);

      errorMessage.textContent = '';

      if (!isNaN(celsiusValue) && fInput.value === '') {
         const convertedFahrenheit = convertCtoF(celsiusValue);
         fInput.value = convertedFahrenheit.toFixed(0);
         updateWeatherImage(convertedFahrenheit);
      } else if (!isNaN(fahrenheitValue) && cInput.value === '') {
         const convertedCelsius = convertFtoC(fahrenheitValue);
         cInput.value = convertedCelsius.toFixed(0);
         updateWeatherImage(fahrenheitValue);
      } else { // Both have values or invalid input
         if (isNaN(celsiusValue) && cInput.value !== '') {
            errorMessage.textContent = `${cInput.value} is not a number`;
         } else if (isNaN(fahrenheitValue) && fInput.value !== '') {
            errorMessage.textContent = `${fInput.value} is not a number`;
         } else {
            errorMessage.textContent = 'Please enter a value in only one field (Celsius or Fahrenheit).';
         }
         weatherImage.src = 'images/warm.png'; // Default image
         weatherImage.alt = 'Warm';
      }
   });

   cInput.addEventListener('input', () => {
      if (fInput.value !== '' && cInput.value !== '') {
         fInput.value = '';
      }
   });

   fInput.addEventListener('input', () => {
      if (cInput.value !== '' && fInput.value !== '') {
         cInput.value = '';
      }
   });
}

window.addEventListener("DOMContentLoaded", domLoaded);