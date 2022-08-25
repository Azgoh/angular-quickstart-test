import { Component, OnInit, Input } from '@angular/core';
import { Variable } from 'src/app/Variable';
@Component({
  selector: 'app-variable-item',
  templateUrl: './variable-item.component.html',
  styleUrls: ['./variable-item.component.css']
})
export class VariableItemComponent implements OnInit {

  @Input() variable!: Variable;

  constructor() { }

  ngOnInit(): void {
  }

}
