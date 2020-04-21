import { Component, Input } from '@angular/core';
import { Todo } from '../../assignment.component';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css'],
})
export class Assignment2Component {
  @Input()
  todoData: Todo;

  todoIsActive: number;
  //todoIsActive: number = [];

  activateRow(i: number): void {
    // if (this.todoIsActive.indexOf(i) == -1) {
    //   this.todoIsActive.push(i);
    // } else {
    //   this.todoIsActive = this.todoIsActive.filter((elem) => elem != i);
    // }
    this.todoIsActive = i;
  }
}
