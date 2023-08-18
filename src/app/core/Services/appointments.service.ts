import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { ICategory } from '../Models/icategory';
import { HttpClient } from '@angular/common/http';
import { IAppointment } from '../Models/IAppointment';
@Injectable({
  providedIn: 'root',
})
export class AppointmentsService {
  categories$: Observable<ICategory[]> = of([
    { Code: '1', Name: 'حجز المواعيد', No_Of_Appointment: '100' },
    { Code: '2', Name: 'تأكيد حجز المواعيد', No_Of_Appointment: '40' },
    { Code: '3', Name: 'مواعيد مكتملة', No_Of_Appointment: '10' },
    { Code: '4', Name: 'مواعيد ملغية', No_Of_Appointment: '5' },
  ]);

  appointments$: Observable<IAppointment[]> = of([
    {
      Category_Code: '1',
      Name: 'إعادة إصلاحات دهان الشقة',
      Price: '100',
      Date: '',
      From: '10:00',
      To: '11:00',
      Contact: 'محسن السيد العربي',
      Resource: 'هيثم محمد',
    },
    {
      Category_Code: '2',
      Name: 'إعادة إصلاحات دهان الشقة',
      Price: '100',
      Date: '',
      From: '10:00',
      To: '11:00',
      Contact: 'محسن السيد العربي',
      Resource: 'هيثم محمد',
    },
    {
      Category_Code: '3',
      Name: 'إعادة إصلاحات دهان الشقة',
      Price: '100',
      Date: '',
      From: '10:00',
      To: '11:00',
      Contact: 'محسن السيد العربي',
      Resource: 'هيثم محمد',
    },
    {
      Category_Code: '4',
      Name: 'إعادة إصلاحات دهان الشقة',
      Price: '100',
      Date: '',
      From: '10:00',
      To: '11:00',
      Contact: 'محسن السيد العربي',
      Resource: 'هيثم محمد',
    },
  ]);

  constructor() {}

 
}
