import patient from '../../data/patients';
import { PatientInfo, HidePatientSsn, toNewPatientPost } from '../types';

const getPatients = (): Array<PatientInfo> => {
    return patient;
};

const getPatientsWithoutSsn = (): HidePatientSsn[] => {
    return patient.map((n) => {
        return {
            id: n.id,
            name: n.name,
            dateOfBirth: n.dateOfBirth,
            gender: n.gender,
            occupation: n.occupation,
            entries: n.entries
        };
    });
};
const addPatient = (entry: toNewPatientPost): PatientInfo => {
    const newDiaryEntry = {
        id: id,
        ...entry,
    };

    patient.push(newDiaryEntry);
    return newDiaryEntry;
};

export default {
    getPatients,
    getPatientsWithoutSsn,
    addPatient
};
