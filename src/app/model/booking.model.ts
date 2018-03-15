import { Department } from './department.model';
import { Space } from './space.model';

export class Booking {
    department: Department;
    space: Space;
    date: String;

    constructor(department, space, date) {
        this.department = department;
        this.space = space;
        this.date = date;
    }
}