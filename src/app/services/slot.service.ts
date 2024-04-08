import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { GetSlotCategoriesModel, GetSlotProvidersModel, GetSlotsByProviderModel } from '../models/slot.model';


@Injectable({
  providedIn: 'root'
})
export class SlotService {

  constructor(private http: HttpClient) { }
  
  getSlotCategories(): Observable<GetSlotCategoriesModel> {
    return this.http.get<GetSlotCategoriesModel>(`${environment.CMS_URL}/v2/slot/categories?include=games`);
  }

  getProviders(): Observable<GetSlotProvidersModel> {
    return this.http.get<GetSlotProvidersModel>(`${environment.CMS_URL}?type=slot&platform=desktop`);
  }

  getSlotsByProviders(provider: string): Observable<GetSlotsByProviderModel> {
    return this.http.get<GetSlotsByProviderModel>(`${environment.CMS_URL}/v2/slot/providers/${provider}`);
  }
}
