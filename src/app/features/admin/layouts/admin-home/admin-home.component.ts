import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
//
import { IPenality, Penality } from '../../types/penality';
import { getAllPenalities } from '../../store/penality.selectors';
import { LoadPenality } from '../../store/penality.actions';
import { PenalityService } from '../../core/penality.service';
import { ModalEditionFormComponent } from '../../components/modal-edition-form/modal-edition-form.component';
import { ModalRemoveItemComponent } from '../../components/modal-remove-item/modal-remove-item.component';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss'],
  providers: [PenalityService]
})
export class AdminHomeComponent implements OnInit {
  source: Observable<IPenality[]>;
  columns: string[] = ['name', 'description', 'count', 'expiration', 'action'];

  constructor(
    private store: Store<{ penalities: IPenality[] }>,
    private penalityServices: PenalityService,
    public dialog: MatDialog
  ) {
    this.source = this.store.select(getAllPenalities);
  }

  ngOnInit() {
    this.penalityServices.getPenalities();
  }

  onRemovePenalityHandle(data: IPenality) {
    const dialogRef = this.dialog.open(ModalRemoveItemComponent, {
      width: '600px',
      data: new Penality(data)
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.valid) {
        this.penalityServices.removePenality(result.data.id);
      }
    });
  }

  onCreatePenalityHandle(data = {}) {
    const dialogRef = this.dialog.open(ModalEditionFormComponent, {
      width: '600px',
      data: new Penality(data)
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.penalityServices[result.id ? 'updatePenality' : 'createPenality'](
          result
        );
      }
    });
  }
}
