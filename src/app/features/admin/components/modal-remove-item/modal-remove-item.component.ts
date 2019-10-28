import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
//
import { IPenality } from '../../types/penality';
import { ISubmit } from '../../types/form';

@Component({
  selector: 'app-modal-remove-item',
  templateUrl: './modal-remove-item.component.html',
  styleUrls: ['./modal-remove-item.component.scss']
})
export class ModalRemoveItemComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ModalRemoveItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IPenality
  ) {}

  ngOnInit() {}

  onConfirmHandle() {
    this.closeWindow({
      valid: true,
      data: this.data
    });
  }

  onCloseHandle() {
    this.closeWindow();
  }

  onNoClick(): void {
    this.closeWindow();
  }

  closeWindow(data: ISubmit<IPenality> = null) {
    this.dialogRef.close(data);
  }
}
