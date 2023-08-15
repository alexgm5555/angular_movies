import { Component, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Detail } from 'src/app/interfaces';

@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.scss']
})
export class DetailItemComponent {
  @Input('detailItem') detail: Detail = {
    id: 0,
    overview: '',
    title: ''
  };
  @Output('formDetail') result: any = {
    annotation: '',
    valoration: 0
  };

  anotationFormControl = new FormControl('');
  valueFormControl = new FormControl(0);

  public sendForm() {
    this.result = {
      annotation: this.anotationFormControl,
      valoration: this.valueFormControl,
    }
  }
}
