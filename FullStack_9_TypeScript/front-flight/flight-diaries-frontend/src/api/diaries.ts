import axios from 'axios';
import { DiaryEntry, NewDiaryEntry } from '../types';


const apiBaseUrl = 'http://localhost:3000';

axios.get(`${apiBaseUrl}/api/diaries`).then((response) => {
}).catch((error) => {
});

const addDiary = async (newDiary: NewDiaryEntry): Promise<DiaryEntry> => {
    try {
      const response = await axios.post<DiaryEntry>(baseUrl, newDiary);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(error.response.data);
      }
      throw new Error('Failed to add diary entry.');
    }
  };
  

const baseUrl = '/api/diaries';

const getAllDiaries = async (): Promise<DiaryEntry[]> => {
  const response = await axios.get<DiaryEntry[]>(baseUrl);
  return response.data;
};

const diaryService = {
  getAllDiaries,
  addDiary,
};

export default diaryService;
