import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  courses = ["html","css","js"];
  viewMode = 'map';

  constructor() { }

  ngOnInit(): void {
  }

}
