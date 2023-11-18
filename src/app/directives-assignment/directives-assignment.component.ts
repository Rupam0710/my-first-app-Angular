import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-assignment',
  templateUrl: './directives-assignment.component.html',
  styleUrl: './directives-assignment.component.css'
})
export class DirectivesAssignmentComponent {

  detailsEntered = [];
  showSecret = false;



  Displaydetails() {
    this.showSecret = !this.showSecret;
    this.detailsEntered.push(this.detailsEntered.length + 1);
  }
}
