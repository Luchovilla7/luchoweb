document.addEventListener('DOMContentLoaded', () => {
  // Set the countdown date (7 days from now)
  const countdownDate = new Date();
  countdownDate.setDate(countdownDate.getDate() + 7);
  
  // Update countdown every second
  const countdown = setInterval(() => {
    // Get current date and time
    const now = new Date().getTime();
    
    // Calculate the time remaining
    const distance = countdownDate - now;
    
    // Calculate days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Add leading zeros
    const formatNumber = (number) => {
      return number < 10 ? `0${number}` : number;
    };
    
    // Display the countdown
    document.getElementById('days').innerText = formatNumber(days);
    document.getElementById('hours').innerText = formatNumber(hours);
    document.getElementById('minutes').innerText = formatNumber(minutes);
    document.getElementById('seconds').innerText = formatNumber(seconds);
    
    // If countdown is finished
    if (distance < 0) {
      clearInterval(countdown);
      document.getElementById('days').innerText = '00';
      document.getElementById('hours').innerText = '00';
      document.getElementById('minutes').innerText = '00';
      document.getElementById('seconds').innerText = '00';
    }
  }, 1000);
});