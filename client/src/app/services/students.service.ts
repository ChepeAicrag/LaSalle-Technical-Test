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
    return this.http.get(`${environment.baseURL}${PATH_API.STUDENT}`, {
      headers: this.headers,
    });
  }
}
