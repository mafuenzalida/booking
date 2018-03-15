import { Department } from './department.model';
import { Space } from './space.model';

export class Building {
    departments: Department[];
    spaces: Space[];
    name: string;

    constructor(departments,spaces,name) {
        this.departments = departments;
        this.spaces = spaces;
        this.name = name;
    }
}