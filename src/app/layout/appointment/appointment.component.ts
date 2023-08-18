import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IAppointment } from 'src/app/core/Models/IAppointment';
import { ICategory } from 'src/app/core/Models/icategory';
import { AppointmentsService } from 'src/app/core/Services/appointments.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss'],
})
export class AppointmentComponent implements OnInit {
  categories$ = this._appointmentService.categories$;

  availableProducts$ = this._appointmentService.appointments$;

  selectedProducts: IAppointment[] | undefined;

  draggedProduct: IAppointment | undefined | null;

  FirstRandomColor: string;
  SecondRandomColor: string;
  //

  product: any[] = [];

  availableProducts: any[] | undefined;
  constructor(private _appointmentService: AppointmentsService) {
    this.FirstRandomColor = this.getRandomColor();
    this.SecondRandomColor = this.getRandomColor();
  }

  //

  getAppointmentsByCategory(categoryCode: string): any[] {
    return this.product.filter(
      (appointment) => appointment.Category_Code === categoryCode
    );
  }

  ngOnInit(): void {
    this.selectedProducts = [];
    this,
      this._appointmentService.appointments$.subscribe(
        (data) => (this.product = data)
      );
  }

  dragStart(product: IAppointment) {
    this.draggedProduct = product;
  }

  dragEnd() {
    this.draggedProduct = null;
  }


  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  //

  drop() {
    if (this.draggedProduct) {
      let draggedProductIndex = this.findIndex(this.draggedProduct);
      this.selectedProducts = [
        ...(this.selectedProducts as any[]),
        this.draggedProduct,
      ];
      this.availableProducts = this.availableProducts?.filter(
        (val, i) => i != draggedProductIndex
      );
      this.draggedProduct = null;
    }
  }

  findIndex(product: any) {
    let index = -1;
    for (let i = 0; i < (this.availableProducts as any[]).length; i++) {
      if (product.id === (this.availableProducts as any[])[i].id) {
        index = i;
        break;
      }
    }
    return index;
  }
}
