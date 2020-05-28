import { Component } from '@angular/core';
import { WikipediaService } from '../../shared/services/wikipedia.service';

@Component({
  selector: 'app-wsearch',
  templateUrl: './wsearch.component.html',
  styleUrls: ['./wsearch.component.sass']
})
export class WsearchComponent {

  constructor(private wikipedia: WikipediaService) {}

  onTerm(term: string) {
    const results = this.wikipedia.search(term);
    console.log(results);
  }

}
