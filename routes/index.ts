import { Router } from 'express';
import { StudentRoute } from './student.route'
import { TeacherRoute } from './teacher.route'

export function init(router: Router) {
    StudentRoute.initRoutes(router)
    TeacherRoute.initRoutes(router);
}