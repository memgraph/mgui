import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mg-view-title',
  template: `<h5>{{title}}</h5>`,
  styles: []
})
export class ViewTitleComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
