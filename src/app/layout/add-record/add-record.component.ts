import {Component, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})
export class AddRecordComponent implements OnInit {


  recordForm = new FormGroup({
    date: new FormControl(''),
    distance: new FormControl(''),
    time: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  dataToRecord(): void {
    console.log(this.recordForm.value);
  }
}
