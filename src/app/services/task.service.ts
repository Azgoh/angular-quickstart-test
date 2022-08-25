import { Injectable } from '@angular/core';
import { Variable } from '../Variable';
import {VARIABLES} from '../MockVariables';

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  constructor() { }

  getVariables(): Variable[]{
    return VARIABLES;
  }
}
