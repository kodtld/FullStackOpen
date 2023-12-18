import { toNewPatientPost, Gender } from './types';

const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const parseName = (name: unknown): string => {
  if (!name || !isString(name)) {
    throw new Error('Incorrect or missing name');
  }
  return name;
};

const parseOccupation = (occupation: unknown): string => {
  if (!occupation || !isString(occupation)) {
    throw new Error('Incorrect or missing occupation');
  }
  return occupation;
};

const parseSsn = (ssn: unknown): string => {
  if (!ssn || !isString(ssn)) {
    throw new Error('Incorrect or missing ssn');
  }
  return ssn;
};

const isDate = (date: unknown): date is string => {
  return typeof date === 'string' && Boolean(Date.parse(date));
};

const parseBirthYear = (date: unknown): string => {
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error('Incorrect or missing date');
  }
  return date;
};

const isGender = (param: any): param is Gender => {
  return Object.values(Gender).includes(param);
};

const parseGender = (gender: unknown): Gender => {
  if (!gender || !isString(gender) || !isGender(gender)) {
    throw new Error('Incorrect or missing gender');
  }
  return gender as Gender;
};

const toNewPatientPost = (object: any): toNewPatientPost => {
  const newPost: toNewPatientPost = {
    name: parseName(object.name),
    occupation: parseOccupation(object.occupation),
    ssn: parseSsn(object.ssn),
    gender: parseGender(object.gender),
    dateOfBirth: parseBirthYear(object.dateOfBirth),
  };
  return newPost;
};

export default toNewPatientPost;
