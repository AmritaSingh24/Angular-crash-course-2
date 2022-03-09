import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  title = "Data Binding";
  course = "Angular";
  courseName:string = "";
  image = 'https://picsum.photos/seed/picsum/200/300'
  constructor() { }

  ngOnInit(): void {
  }

  titleChange(){
    this.title = "Angular Data Binding"
  }
}
