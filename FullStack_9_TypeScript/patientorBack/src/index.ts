import express from 'express';
const app = express();
import routeDiagnosis from './routes/diagnosis';
import routePatients from './routes/patients';
import cors from 'cors';

app.use(cors());
app.use(express.json());

app.get('/ping', (_req, res) => {
    console.log('Ping!');
    res.send('Ping!');
});

app.use('/api/diagnosis/', routeDiagnosis);
app.use('/api/patients/', routePatients);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});