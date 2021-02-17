import {Component, OnInit} from '@angular/core';
import {ConvertService} from '../../service/convert.service';
import {HebrewDate} from '../../model/HebrewDate';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent{
  gregDate: any;
  public result: HebrewDate = new HebrewDate();

  constructor(private service: ConvertService) { }

  public convertDate(): void {
    this.service.gregToHebrew(this.gregDate).subscribe(
      hebrew => {
        this.result = hebrew;
      }
    );
  }
}
