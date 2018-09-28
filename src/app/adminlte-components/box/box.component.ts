import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {

  @Input() type:string = "";
  @Input() title:string = "";

  constructor() { }

  ngOnInit() {
  }

}
