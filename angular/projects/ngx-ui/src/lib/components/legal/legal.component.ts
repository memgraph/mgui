import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'mg-legal',
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.scss']
})
export class LegalComponent implements OnInit {
  currentYear = (new Date().getFullYear());

  @Input() legalLinkText: string;
  @Output() legalLinkClick = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  onClick(event) { this.legalLinkClick.emit(event); }
}
