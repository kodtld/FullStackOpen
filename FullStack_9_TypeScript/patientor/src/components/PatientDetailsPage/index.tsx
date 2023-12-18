import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { PatientInfo, Entry, Diagnosis } from "../../types";
import { apiBaseUrl } from "../../constants";
import diagnosesService from "../../services/diagnoses";
import EntryDetails from "../EntryDetails";

const PatientDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [patient, setPatient] = useState<PatientInfo | null>(null);
  const [diagnoses, setDiagnoses] = useState<Diagnosis[]>([]);

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const { data } = await axios.get<PatientInfo>(`${apiBaseUrl}/api/patients/${id}`);
        setPatient(data);
      } catch (error) {
        console.error("Error fetching patient details:", error);
      }
    };

    const fetchDiagnoses = async () => {
      const diagnoses = await diagnosesService.getAllDiagnoses();
      setDiagnoses(diagnoses);
    };

    void fetchPatient();
    void fetchDiagnoses();
  }, [id]);

  if (!patient) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{patient.name}</h2>
      <p>Gender: {patient.gender}</p>
      <p>Date of Birth: {patient.dateOfBirth}</p>
      <p>Occupation: {patient.occupation}</p>
      {patient.entries.map((entry: Entry) => (
        <div key={entry.id}>
          <p>Date: {entry.date}</p>
          <p>Type: {entry.type}</p>
          <EntryDetails entry={entry} />
        </div>
      ))}
    </div>
  );
};

export default PatientDetailsPage;
