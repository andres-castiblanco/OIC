import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogns',
  templateUrl: './dialogns.component.html',
  styleUrls: ['./dialogns.component.css'],
})
export class DialognsComponent implements OnInit {
  constructor(
    public dialogRef2: MatDialogRef<DialognsComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string
  ) {}

  ngOnInit() {}
}
