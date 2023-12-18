import React, { useState, useEffect } from 'react';
import diaryService from './api/diaries';
import NewDiaryForm from './components/DiaryForm';
import DiaryEntry from './components/DiaryEntry';
import { DiaryEntry as DiaryEntryType } from './types';


const App: React.FC = () => {
  const [diaries, setDiaries] = useState<DiaryEntryType[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    diaryService.getAllDiaries().then((entries) => setDiaries(entries));
  }, []);

  const handleAddDiary = (newEntry: DiaryEntryType) => {
    diaryService
      .addDiary(newEntry)
      .then((addedEntry) => {
        setDiaries([...diaries, addedEntry]);
      })
      .catch((error) => {
        setError('Failed to add diary entry: ' + error.message);
      });
  };

  return (
    <div className="App">
      <h1>Flight Diaries</h1>
      {error && <div className="error-message">{error}</div>}
      <NewDiaryForm onSubmit={handleAddDiary} />
      {diaries.map((diary) => (
        <DiaryEntry key={diary.id} diary={diary} />
      ))}
    </div>
  );
};

export default App;
