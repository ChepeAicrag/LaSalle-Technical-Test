import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../environments/environment';
import { PATH_API } from '../constants/paths.constants';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  constructor(private http: HttpClient) {}

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  private get(path: string) {
    return this.http.get(`${environment.baseURL}${path}`, {
      headers: this.headers,
    });
  }

  registerStudent(data: any) {
    return this.http.post(
      `${environment.baseURL}${PATH_API.STUDENT}`,
      JSON.stringify(data),
      {
        headers: this.headers,
      }
    );
  }

  getStudents() {
    return this.get(PATH_API.STUDENT);
  }

  getAcademicLevels() {
    return this.get(PATH_API.ACADEMIC_LEVELS);
  }
}
