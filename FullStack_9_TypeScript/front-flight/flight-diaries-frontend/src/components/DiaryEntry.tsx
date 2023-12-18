import React from 'react';
import { DiaryEntry, Weather, Visibility } from '../types';

const DiaryEntry: React.FC<{ diary: DiaryEntry }> = ({ diary }) => {
  return (
    <div className="diary-entry">
      <p>Date: {diary.date}</p>
      <p>Weather: {diary.weather}</p>
      <p>Visibility: {diary.visibility}</p> 
    </div>
  );
};

export default DiaryEntry;