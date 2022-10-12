import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-textinput',
  templateUrl: './textinput.component.html',
  styleUrls: ['./textinput.component.scss']
})
export class TextinputComponent implements OnInit {

  text: any;

  @Input() model: any;
  @Output() onChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  setToText(event: any){
    this.onChange.emit(event.target.value);
  }

}
