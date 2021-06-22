import { Request, Response } from 'express';
import { StudentService } from '../services/student.service';

export class StudentController {

    studentService: StudentService;
    constructor() {
        this.studentService = new StudentService();
    }

    public async getStudent(req: Request, res: Response) {

        try {
            if (typeof (req.query.name) != "string") {
                res.status(400).send("Bad Request")
            } else {
                const name = { FirstName: req.query.name };
                const students = await this.studentService.getStudent(name);
                console.log(students.length)
                res.json({ Students: students });

            }
        } catch (err) {
            console.log(err);
            res.status(404)
                .send("Not Found");
        }
    }


    public async createStudent(req: Request, res: Response) {
        try {
            const student = await this.studentService.createStudent(req.body);
            res.json({ Student: student });
        } catch (err) {
            console.log(err);
            res.status(400)
                .send("Error Occured")
        }
    }

}