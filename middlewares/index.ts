import { Router, Express } from 'express'
import cors from 'cors';
import { init } from '../routes/index'

export class Middlewares {

    public static init(app: Express) {
        app.use(cors());
        const router = Router();
        app.use('/api', router);
        init(router);
    }

}