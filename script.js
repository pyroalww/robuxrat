function redeemRobux() {
    var redeemCode = document.getElementById('redeemCode').value;
    var resultElement = document.getElementById('result');
    var loadingElement = document.getElementById('loading');
  
    loadingElement.style.display = 'block';
    resultElement.classList.add('hidden');
  
    setTimeout(function() {
      loadingElement.style.display = 'none';
      resultElement.classList.remove('hidden');
  
      // Simulate checking redeem code
      if (redeemCode === "PROMO2024ROBUX1000") {
        // If redeem code is valid, redirect to success page after 3 seconds
        setTimeout(function() {
          window.location.href = "success.html";
        }, 3000);
      } else {
        // If redeem code is invalid, display error message
        resultElement.innerHTML = "Error: Invalid redeem code. Please enter the correct code.";
      }
    }, 3000); // Simulate loading for 3 seconds
  }
  