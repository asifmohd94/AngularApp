import { Router } from 'express';
import { TeacherController } from '../controllers/teacher.controller';

export class TeacherRoute {

    public static initRoutes(router: Router) {
        router.get('/teacher/info', (req, res, next) => {
            const teacher = new TeacherController().getTeacher(req, res);
        })

        router.post('/teacher/create', (req, res, next) => {
            const teacher = new TeacherController().createTeacher(req, res)
        })
    }


}


