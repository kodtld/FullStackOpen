import React, { useState } from 'react';
import { NewDiaryEntry, Weather, Visibility } from '../types';

const DiaryForm: React.FC<{
  onSubmit: (entry: NewDiaryEntry) => void;
}> = ({ onSubmit }) => {
  const [date, setDate] = useState('');
  const [weather, setWeather] = useState<Weather>(Weather.Sunny);
  const [visibility, setVisibility] = useState<Visibility>(Visibility.Great);

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const newEntry: NewDiaryEntry = {
      date,
      weather,
      visibility,
      comment: '',
    };

    onSubmit(newEntry);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Date:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Weather:
        <select value={weather} onChange={(e) => setWeather(e.target.value as Weather)}>
          {Object.values(Weather).map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Visibility:
        <select value={visibility} onChange={(e) => setVisibility(e.target.value as Visibility)}>
          {Object.values(Visibility).map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </label>
      <br />
      <button type="submit">Add Entry</button>
    </form>
  );
};

export default DiaryForm;
