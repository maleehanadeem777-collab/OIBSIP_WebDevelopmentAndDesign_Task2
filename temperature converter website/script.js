// Selecting input fields
const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const kelvinInput = document.getElementById('kelvin');
const clearBtn = document.getElementById('clear-btn');

// Function to handle real-time conversion
function convertTemperature(e) {
    const currentValue = parseFloat(e.target.value);
    const inputId = e.target.id;

    // Check if input is empty or NaN (Not a Number)
    if (isNaN(currentValue)) {
        if(e.target.value === "") {
            clearAllFields();
        }
        return;
    }

    // Logic based on which input is active
    if (inputId === 'celsius') {
        // Celsius to Fahrenheit & Kelvin
        fahrenheitInput.value = ((currentValue * 9/5) + 32).toFixed(2);
        kelvinInput.value = (currentValue + 273.15).toFixed(2);
    } 
    else if (inputId === 'fahrenheit') {
        // Fahrenheit to Celsius & Kelvin
        celsiusInput.value = ((currentValue - 32) * 5/9).toFixed(2);
        kelvinInput.value = (((currentValue - 32) * 5/9) + 273.15).toFixed(2);
    } 
    else if (inputId === 'kelvin') {
        // Kelvin to Celsius & Fahrenheit
        celsiusInput.value = (currentValue - 273.15).toFixed(2);
        fahrenheitInput.value = (((currentValue - 273.15) * 9/5) + 32).toFixed(2);
    }
}

// Function to clear all fields
function clearAllFields() {
    celsiusInput.value = '';
    fahrenheitInput.value = '';
    kelvinInput.value = '';
}

// Adding event listeners to inputs for real-time response
celsiusInput.addEventListener('input', convertTemperature);
fahrenheitInput.addEventListener('input', convertTemperature);
kelvinInput.addEventListener('input', convertTemperature);
clearBtn.addEventListener('click', clearAllFields);