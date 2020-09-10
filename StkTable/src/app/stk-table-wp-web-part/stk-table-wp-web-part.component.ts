import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-stk-table-wp-web-part',
  templateUrl: './stk-table-wp-web-part.component.html',
  styleUrls: ['./stk-table-wp-web-part.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class StkTableWpWebPartComponent implements OnInit {
  @Input() description: string;

  constructor() { }

  ngOnInit() {
  }

}
