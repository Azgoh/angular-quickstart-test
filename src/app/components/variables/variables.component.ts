import { Component, OnInit } from '@angular/core';
import { VARIABLES } from 'src/app/MockVariables';
import { Variable } from 'src/app/Variable';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.css']
})
export class VariablesComponent implements OnInit {
  variables: Variable[] = VARIABLES;

  constructor() { }

  ngOnInit(): void {
  }

}
