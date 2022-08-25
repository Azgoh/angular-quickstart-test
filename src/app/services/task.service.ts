import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Variable } from '../Variable';
import {VARIABLES} from '../MockVariables';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private apiUrl = 'http://localhost:5000/data';

  constructor(private http: HttpClient) { }

  getVariables(): Observable<Variable[]>{
    return this.http.get<Variable[]>(this.apiUrl);
  }
}
