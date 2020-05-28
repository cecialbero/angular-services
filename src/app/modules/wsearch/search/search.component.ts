import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  @Output() submitted = new EventEmitter<string>();
  term = '';

  constructor() { }

  ngOnInit(): void {
  }

  onEnterValue(value: any) {
    this.term = value.target.value;
  }

  onFormSubmit(event: any) {
    event.preventDefault();
    this.submitted.emit(this.term);
  }

}
