import { pool } from '../config/pool';
import { ITeacher } from '../models/teacher.model';
import { ITeacherSearchFilter } from '../models/api.interface/teacher.interface';

export class TeacherService {

    public async getTeacher(filter: ITeacherSearchFilter): Promise<ITeacher[]> {
        const query = "SELECT * FROM teacher WHERE first_name = $1";
        const values = [filter.FirstName];
        const teacher = await pool.query(query, values);

        return teacher.rows;
    }

    public async createTeacher(body: any[]): Promise<ITeacher[]> {
        let query = "INSERT INTO public.teacher(emp_id, first_name, last_name, gender, phone, email, address, primary_subject) VALUES ";
        let values = [];
        let x = 1;
        let temp = "";
        for (let i = 0; i < body.length; i++) {
            temp += "(";
            for (let j = 0; j < 8; j++) {
                temp += "$" + x + ",";
                x++;
            }
            temp = temp.substring(0, temp.length - 1);
            temp += "),";
            query += temp;
            values.push(body[i].emp_id);
            values.push(body[i].first_name);
            values.push(body[i].last_name);
            values.push(body[i].gender);
            values.push(body[i].phone);
            values.push(body[i].email);
            values.push(body[i].address);
            values.push(body[i].primary_subject);
            temp = "";

        }
        query = query.substring(0, query.length - 1);
        query += ";"
        console.log(query);
        console.log(values);

        const teacher = await pool.query(query, values);
        return teacher.rows

    }

}