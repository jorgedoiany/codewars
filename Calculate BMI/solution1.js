function bmi(weight, height) {
  totalBmi = weight / Math.pow(height, 2)
  
  if (totalBmi <= 18.5) {
    return "Underweight"
  }
  else if (totalBmi >= 18.6 && totalBmi <= 25) {
    return "Normal"
  }
  else if (totalBmi >= 25.1 && totalBmi <= 30) {
    return "Overweight"
  } else {
    return "Obese"
  }
}
