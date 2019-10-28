import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';

import { IPenality } from '../../types/penality';
import { ISubmit } from '../../types/form';

@Component({
  selector: 'modal-edition-form',
  templateUrl: './modal-edition-form.component.html',
  styleUrls: ['./modal-edition-form.component.scss']
})
export class ModalEditionFormComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ModalEditionFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IPenality
  ) {}

  ngOnInit() {}

  onCloseHandle() {
    this.dialogRef.close();
  }

  onSubmitHandle(formSubmit: ISubmit<IPenality>) {
    if (formSubmit.valid) {
      this.dialogRef.close(formSubmit.data);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
