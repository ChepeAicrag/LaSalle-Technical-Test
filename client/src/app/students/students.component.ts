import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../services/students.service';
import { Router } from '@angular/router';

import { PATHS_VIEW } from '../constants/paths.constants';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  constructor(
    private studentsService: StudentsService,
    private router: Router
  ) {}

  students: any[] = [];

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents() {
    this.studentsService.getStudents().subscribe({
      error: (err) => console.log(err),
      next: (data) => {
        const response = JSON.parse(JSON.stringify(data));
        this.students = response?.students ?? [];
      },
    });
  }

  goToRegister() {
    this.router.navigate([`${PATHS_VIEW.form}`]);
  }
}
