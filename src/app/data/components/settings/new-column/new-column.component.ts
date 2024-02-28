import { v4 as uuidv4 } from 'uuid';

import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

import { NzMessageService } from 'ng-zorro-antd/message';

import { ColumnService } from '../../columns/column.service';

import { convertToProp } from '../../table/table';
import { Column, ColumnForm, ColumnType } from '../../columns/column.type';

@Component({
  selector: 'mf-new-column',
  exportAs: 'mfNewColumn',
  templateUrl: './new-column.component.html',
  styleUrl: './new-column.component.less',
})
export class NewColumnComponent implements OnInit, OnDestroy {
  hasPendingChanges: boolean = false;
  columns: Column[] = [];

  columnForm: FormGroup<ColumnForm> = this.fb.group({
    title: ['', [Validators.required]],
    type: ['Text' as ColumnType, [Validators.required]],
    isMandatory: [false, [Validators.required]],
    values: new FormControl<null | string[]>(null, { nonNullable: false }),
  });

  get type(): ColumnType {
    return this.columnForm.controls.type.getRawValue();
  }

  get values(): null | string[] {
    return this.columnForm.controls.values.getRawValue();
  }

  private readonly destroy$: Subject<void> = new Subject<void>();

  constructor(
    private fb: NonNullableFormBuilder,
    private nzMessage: NzMessageService,
    private columnsService: ColumnService
  ) {}

  ngOnInit(): void {
    this.columnForm.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.hasPendingChanges = true;
      });

    this.columnForm.controls.type.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((value) => {
        const valuesControl = this.columnForm.controls.values;

        if (value === 'Category' && !valuesControl.getRawValue())
          valuesControl.setValue([]);
      });
  }

  addValue(value: string): void {
    if (!value) return;

    const valuesControl = this.columnForm.controls.values;
    const values = valuesControl.getRawValue();

    if (values?.includes(value)) {
      this.nzMessage.error('Value already exists');
      return;
    }

    values?.push(value);
  }

  /**
   * This function is triggered by the parent component
   */
  save(): void {
    if (!this.hasPendingChanges) return;

    this.columnForm.updateValueAndValidity();

    if (this.columnForm.invalid) return;

    const partialColumn = this.columnForm.getRawValue();
    const column: Column = {
      ...partialColumn,
      GUID: uuidv4(),
      prop: convertToProp(partialColumn.title),
      isCustom: true,
    };

    this.hasPendingChanges = false;
    this.columnForm.reset();

    this.nzMessage.success('Column created');
    this.columnsService.addCustomColumn(column);
  }

  /**
   * This function is triggered by the parent component
   */
  clear(): void {
    this.hasPendingChanges = false;
    this.columnForm.reset();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
