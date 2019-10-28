import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IPenality } from '../../types/penality';
import { ISubmit } from '../../types/form';

@Component({
  selector: 'admin-edition-form',
  templateUrl: './edition-form.component.html',
  styleUrls: ['./edition-form.component.scss']
})
export class EditionFormComponent implements OnInit {
  @Input() data: IPenality;
  @Output() formSubmit = new EventEmitter<ISubmit<IPenality>>();

  form: FormGroup;
  fields = ['name', 'count', 'expiration', 'description'];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    const fieldsGroup = this.fields.reduce((fields: any, fieldname: string) => {
      return {
        ...fields,
        [fieldname]: ['', Validators.required]
      };
    }, {});

    this.form = this.formBuilder.group(fieldsGroup);
  }

  get controls() {
    return this.form.controls;
  }

  onSubmitHandle(event) {
    this.formSubmit.emit({
      valid: this.form.valid,
      data: { ...this.data, ...this.form.value }
    });
  }
}
