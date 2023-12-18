export const calculateBmi = (height: number, weight: number): string => {
    const res = weight / (height * height) * 10000;
  
    switch (true) {
      case res < 16:
        return 'Underweight (Severe thinness)';
      case res >= 16 && res <= 16.9:
        return 'Underweight (Moderate thinness)';
      case res >= 17 && res <= 18.4:
        return 'Underweight (Mild thinness)';
      case res >= 18.5 && res <= 24.9:
        return 'Normal (healthy weight)';
      case res >= 25 && res <= 29.9:
        return 'Overweight (Pre Obese)';
      case res >= 30 && res <= 34.9:
        return 'Obese (Class I)';
      case res >= 35 && res <= 39.9:
        return 'Obese (Class II)';
      case res >= 40:
        return 'Obese (Class III)';

        default:
        return 'Invalid input';
    }
  };
  