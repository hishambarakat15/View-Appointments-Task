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

  availableProducts!: IAppointment[];

  selectedProducts!: IAppointment[]

  draggedProduct: IAppointment | undefined | null;

  categories$ = this._appointmentService.categories$;
  sourceCategoryCode: string | null = null;


  FirstRandomColor: string;
  SecondRandomColor: string;
 
  product: IAppointment[] = [];


  constructor(private _appointmentService: AppointmentsService) {
    this.FirstRandomColor = this.getRandomColor();
    this.SecondRandomColor = this.getRandomColor();
  }
  ngOnInit() {
    this.selectedProducts = [];
  

    this._appointmentService.appointments$.subscribe(
      (data) => (this.availableProducts = data)
    );
}


getAppointmentsByCategory(categoryCode: string): IAppointment[] {
  return this.availableProducts.filter(
    (appointment) => appointment.Category_Code === categoryCode
  );
}
getSelectedProductByCategory(categoryCode: string): IAppointment[] {
  return this.selectedProducts.filter(
    (appointment) => appointment.Category_Code === categoryCode
  );
}

dragStart(product: any, sourceCategoryCode: string) {
  this.draggedProduct = { ...product };
  this.sourceCategoryCode = sourceCategoryCode;
}


  drop(targetCategoryCode: string) {
    if (this.draggedProduct) {
        let draggedProductIndex = this.findIndex(this.draggedProduct);
        this.draggedProduct.Category_Code = targetCategoryCode; 
        this.selectedProducts = [...(this.selectedProducts as any[]), this.draggedProduct];
        this.availableProducts = this.availableProducts?.filter((val, i) => i !== draggedProductIndex);
        this.draggedProduct = null;
    }
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

  
  findIndex(product: any) {
    let index = -1;
    for (let i = 0; i < (this.availableProducts as any[]).length; i++) {
        if (product.Cod === (this.availableProducts as any[])[i].id) {
            index = i;
            break;
        }
    }
    return index;
}


 
}
