import { Router } from 'express';
import medService from '../services/diagnosisService';

const router = Router();

router.get('/', (_req, res) => {
    res.send(medService.getDiagnosis());
});

export default router;
