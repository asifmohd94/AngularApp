import { Request, Response } from 'express';
import { TeacherService } from '../services/teacher.service';

export class TeacherController {

    teacherService: TeacherService;

    constructor() {
        this.teacherService = new TeacherService();
    }

    public async getTeacher(req: Request, res: Response) {
        try {
            if (typeof (req.query.name) != "string") {
                res.status(400)
                    .send("Bad Request");
            } else {
                const name = { FirstName: req.query.name };
                const teacher = await this.teacherService.getTeacher(name);
                res.json({ Teacher: teacher });

            }
        } catch (err) {
            console.log(err);
            res.status(400)
                .send("Error occured");
        }
    }

    public async createTeacher(req: Request, res: Response) {
        try {
            const teacher = await this.teacherService.createTeacher(req.body);
            res.json({ Teacher: teacher });
        } catch (err) {
            console.log(err);
            res.status(400).send("Error Occured");
        }
    }

}