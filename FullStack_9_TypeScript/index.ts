import express from 'express';
import { calculateBmi } from './bmiCalculator';
import { calculateExercises, Result } from './exerciseCalculator';
const app = express();

app.get('/hello', (_req, res) => {
    res.send("Hello Full Stack! :*");
});

app.get('/bmi', (req, res) => {
    const height = Number(req.query.height);
    const weight = Number(req.query.weight);
  
    if (isNaN(height) || isNaN(weight)) {
      return res.status(400).json({ error: 'malformatted parameters' });
    }
  
    const bmiResult = calculateBmi(height, weight);
    return res.json({ weight, height, bmi: bmiResult });
  });
    
app.post('/exercises', (req, res) => {
    const { daily_exercises, target } = req.body;
  
    if (!daily_exercises || !target) {
      return res.status(400).json({ error: 'parameters missing' });
    }
  
    if (!Array.isArray(daily_exercises) || daily_exercises.some((hours: number) => isNaN(Number(hours))) || isNaN(Number(target))) {
      return res.status(400).json({ error: 'malformatted parameters' });
    }
  
    const exerciseHours: number[] = daily_exercises.map((hours: number) => Number(hours));
    const result: Result = calculateExercises(exerciseHours, Number(target));
    return res.json(result);
  });
const PORT = 3002;

app.listen(PORT, () => {
    console.log('running on 3002');
});