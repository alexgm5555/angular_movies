import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Movie } from 'src/app/models';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnChanges{
  @Input('movies') options: Movie[] = [];

  myControl = new FormControl('');
  filteredOptions!: Observable<Movie[]>;

  ngOnChanges(changes: SimpleChanges): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): Movie[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(
      option => option.title.toLowerCase().includes(filterValue)
    );
  }
}
