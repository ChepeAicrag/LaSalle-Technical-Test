import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { PATHS_VIEW } from '../constants/paths.constants';
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  form: FormGroup;

  options: { [key: string]: any } = {};
  academicLevels: string[] = [];

  loading: boolean = false;

  undergraduatePrograms = ['Enfermeria', 'Software', 'Arquitectura'];
  masterPrograms = ['Fiscal', 'Educación'];
  doctoralPrograms = ['Comunicación', 'Gastronomía'];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private student: StudentsService
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      semester: [0, Validators.required],
      matricula: ['', Validators.required],
      level: ['', Validators.required],
      career: ['', Validators.required],
    });

    this.form.get('level')?.valueChanges.subscribe((level: string) => {
      if (Object.keys(this.options).includes(level)) {
        this.form.get('career')?.setValidators(Validators.required);
        this.form.get('career')?.setValue('');
      } else {
        this.form.get('career')?.clearValidators();
        this.form.get('career')?.setValue('');
      }
      this.form.get('career')?.updateValueAndValidity();
    });
  }
  ngOnInit(): void {
    this.student.getAcademicLevels().subscribe({
      error: (err) => console.log(err),
      next: (data) => {
        const response = JSON.parse(JSON.stringify(data));
        this.academicLevels = Object.keys(response);
        this.options = { ...response };
      },
    });
  }

  handleErrorResponse(error: HttpErrorResponse) {
    const response = JSON.parse(JSON.stringify(error.error));
    switch (error.status) {
      case 400:
        window.alert(response?.message ?? 'Error al registrar usuario');
        break;
      case 422:
        console.log(response);
        const total = response['total'] ?? 0;
        if (total == 0) {
          const message = response['message'];
          window.alert(`Error en los datos ${message}`);
        } else {
          const message = response['_embedded']['errors'][0]['message'];
          window.alert(`Error en los datos ${message}`);
        }
        break;
      default:
        window.alert('Error al registrar usuario. Notifique al administrador');
    }
  }

  handleSuccessfullyResponse(resp: Object) {}

  submit() {
    console.log('Submit', this.form.value);

    if (this.form.valid) {
      this.loading = true;
      this.student
        .registerStudent(this.form.value)
        .subscribe({
          next: this.handleSuccessfullyResponse,
          error: this.handleErrorResponse,
          complete: () =>
            window.alert('Se ha registrado con éxito el estudiante'),
        })
        .add(() => {
          this.loading = false;
        });
    } else {
      window.alert('El formulario no está validado');
    }
  }

  clearForm() {
    this.form.reset();
  }

  goToStudents() {
    this.router.navigate([`${PATHS_VIEW.students}`]);
  }
}
