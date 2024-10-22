function countPositivesSumNegatives(input) {
  
  let positives = 0;
  let negatives = 0;
  let finalOutput = []
  
    for (let i = 0; i < input.length; i++) {
      input[i] > 0 ? positives++ : negatives += input[i];
    }
  return finalOutput = [positives, negatives];
}
