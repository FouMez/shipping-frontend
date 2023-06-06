import { Injectable } from '@angular/core';
import axios from 'axios';
import { PARCEL_SERVICE_URL } from 'src/config/consts';
import { Parcel } from 'src/types/parcel';

export type GetParcelQuery = {
  description?: string;
  country?: string;
};

@Injectable({
  providedIn: 'root',
})
export class ParcelService {
  private baseUrl = PARCEL_SERVICE_URL;

  async getParcels(query?: GetParcelQuery): Promise<Parcel[]> {
    const res = await axios.get<Parcel[]>(
      this.baseUrl,
      query && { params: query },
    );
    return res.data;
  }

  async createParcel(parcel: Parcel): Promise<Parcel> {
    const res = await axios.post<Parcel>(this.baseUrl, parcel);
    return res.data;
  }
}
