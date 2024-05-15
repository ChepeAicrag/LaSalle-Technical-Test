import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentsService } from '../services/students.service';
import { PATHS_VIEW } from '../constants/paths.constants';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  form: FormGroup;
  academicLevels = ['Bachillerato', 'Licenciatura', 'Maestría', 'Doctorado'];
  undergraduatePrograms = ['Enfermeria', 'Software', 'Arquitectura'];
  masterPrograms = ['Fiscal', 'Educación'];
  doctoralPrograms = ['Comunicación', 'Gastronomía'];
  loading: boolean = false;

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
      if (level === 'Licenciatura') {
        this.form.get('career')?.setValidators(Validators.required);
        this.form.get('career')?.setValue('');
      } else if (level === 'Maestría') {
        this.form.get('career')?.setValidators(Validators.required);
        this.form.get('career')?.setValue('');
      } else if (level === 'Doctorado') {
        this.form.get('career')?.setValidators(Validators.required);
        this.form.get('career')?.setValue('');
      } else {
        this.form.get('career')?.clearValidators();
        this.form.get('career')?.setValue('');
      }
      this.form.get('career')?.updateValueAndValidity();
    });
  }

  handleErrorResponse(error: HttpErrorResponse) {
    const response = JSON.parse(JSON.stringify(error.error));
    switch (error.status) {
      case 400:
        window.alert(response?.message ?? 'Error al registrar usuario');
        break;
      case 422:
        window.alert('Error al enviar datos');
        console.log(response);
        break;
      default:
        window.alert('Error al registrar usuario. Notifique al administrador');
    }
  }

  handleSuccessfullyResponse(resp: Object) {
    console.log('esta es la respuesta ', resp);
  }

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
          console.log('Loading in false');
          this.loading = false;
        });
    } else {
      window.alert('El formulario no está validado');
    }
  }

  goToStudents() {
    this.router.navigate([`${PATHS_VIEW.students}`]);
  }
}
