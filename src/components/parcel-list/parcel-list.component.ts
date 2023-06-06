import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GetParcelQuery, ParcelService } from 'src/services/parcel.service';
import { Parcel } from 'src/types/parcel';

@Component({
  selector: 'app-parcel-list',
  templateUrl: './parcel-list.component.html',
  styleUrls: ['./parcel-list.component.css'],
})
export class ParcelListComponent implements OnInit {
  parcels: Parcel[] = [];
  countryFilterControl = new FormControl();
  descriptionFilterControl = new FormControl();
  isLoading = true;

  constructor(private parcelService: ParcelService) {}

  async loadParcels(query?: GetParcelQuery) {
    this.isLoading = true;
    try {
      this.parcels = await this.parcelService.getParcels(query);
    } catch (error) {
      console.log(error, 'Error on fetching parcels');
    }
    this.isLoading = false;
  }

  async ngOnInit() {
    this.loadParcels();
  }

  async onSearch() {
    const query = {
      country: this.countryFilterControl.value,
      description: this.descriptionFilterControl.value,
    };
    this.loadParcels(query);
  }
}
