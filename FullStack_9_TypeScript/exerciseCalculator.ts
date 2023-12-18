export interface Result {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
  }
  
  export const calculateExercises = (exerciseHours: number[], target: number): Result => {
    const periodLength = exerciseHours.length;
    const trainingDays = exerciseHours.filter(hours => hours > 0).length;
    const totalHours = exerciseHours.reduce((sum, hours) => sum + hours, 0);
    const average = totalHours / periodLength;
  
    const success = average >= target;
    let rating = 1;
    let ratingDescription = 'Needs improvement';
  
    if (success) {
      rating = 3;
      ratingDescription = 'Excellent';
    } else if (average >= target * 0.8) {
      rating = 2;
      ratingDescription = 'Not too shabby, but could be better';
    }
  
    const result: Result = {
      periodLength,
      trainingDays,
      success,
      rating,
      ratingDescription,
      target,
      average,
    };
  
    return result;
  };
  