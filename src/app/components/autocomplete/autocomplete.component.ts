import { 
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
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
  @Output('movieSelected') movieSelected = new EventEmitter<Movie>();

  myControl = new FormControl('');
  filteredOptions!: Observable<Movie[]>;

  ngOnChanges(changes: SimpleChanges): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  _filter(value: string): Movie[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(
      option => option.title.toLowerCase().includes(filterValue)
    );
  }

  public _movieSelected(value: string) {
    const resp = this.options.find(e => e.title === value);
    this.movieSelected.emit(resp)
  }
}
