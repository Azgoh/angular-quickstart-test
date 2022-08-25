import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Variable } from 'src/app/Variable';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.css']
})
export class VariablesComponent implements OnInit {
  variables: Variable[] = [];

  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
    this.taskService.getVariables().subscribe((variables) => (this.variables = variables));
  }

}
