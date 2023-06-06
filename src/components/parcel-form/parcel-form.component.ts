import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ParcelService } from 'src/services/parcel.service';
import { Parcel } from 'src/types/parcel';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-parcel-form',
  templateUrl: './parcel-form.component.html',
  styleUrls: ['./parcel-form.component.css'],
})
export class ParcelFormComponent {
  parcelForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private parcelService: ParcelService,
    private snackbar: MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.parcelForm = this.formBuilder.group({
      sku: ['', Validators.required],
      description: ['', Validators.required],
      streetAddress: ['', Validators.required],
      town: ['', Validators.required],
      country: ['', Validators.required],
      deliveryDate: ['', Validators.required],
    });
  }

  async onSubmit(): Promise<Parcel | void> {
    try {
      if (this.parcelForm.invalid) {
        return;
      }
      const payload = this.parcelForm.value;
      await this.parcelService.createParcel(payload);
      this.snackbar.open('Parcel created successfully.', 'Success', {
        panelClass: ['success-snackbar'],
      });
      this.parcelForm.reset();
    } catch (error: any) {
      this.snackbar.open(
        `Failed to create a parcel: ${error?.response?.data?.message}`,
        'Failure',
        { panelClass: ['failure-snackbar'] },
      );
    }
  }
}
