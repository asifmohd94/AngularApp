import { Router } from 'express';
import { StudentController } from '../controllers/student.controller';

export class StudentRoute {

    public static initRoutes(router: Router) {

        router.get('/student/info', (req, res, next) => {
            const student = new StudentController().getStudent(req, res);
        })

        router.post('/addmission', (req, res, next) => {
            const student = new StudentController().createStudent(req, res);
        })

    }

}