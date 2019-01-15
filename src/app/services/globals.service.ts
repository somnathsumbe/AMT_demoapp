import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {
  users: any[] = [];
  user: any[] = [];
  pincode: number[] = [];
  confirmpincode: number[] = [];
  constructor() { }
}
