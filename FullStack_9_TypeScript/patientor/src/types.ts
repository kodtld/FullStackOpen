export interface DiagnosisInfo {
  code: string;
  name: string;
  latin?: string;
}

export enum Gender{
  Male = 'male',
  Female = 'female',
  Other = 'other'
}

export interface PatientInfo {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn?: string;
  gender: Gender;
  occupation: string;
  entries: [];
}

export interface Discharge {
  date: string;
  criteria: string;
}

export interface OccupationalHealthcareEntry {
  id: string;
  date: string;
  type: 'OccupationalHealthcare';
  specialist: string;
  employerName: string;
  sickLeave?: {
    startDate: string;
    endDate: string;
  };
  description?: string;
}

export interface HospitalEntry {
  id: string;
  date: string;
  type: 'Hospital';
  specialist: string;
  diagnoseCodes: string[];
  description: string;
  discharge: Discharge;
}
export interface Diagnosis {
  code: string;
  name: string;
  latin?: string;
}

export type Entry = OccupationalHealthcareEntry | HospitalEntry;
export type NonSensitivePatient = Omit<PatientInfo, 'ssn' | 'entries'>;
export type HidePatientSsn = Omit<PatientInfo, 'ssn'>;
export type toNewPatientPost = Omit<PatientInfo, 'id'>;