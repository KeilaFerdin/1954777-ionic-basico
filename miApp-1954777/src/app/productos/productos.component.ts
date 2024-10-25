import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../consulta.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ProductosComponent implements OnInit {
  productos: any[] = [];

  constructor(private consulta: ConsultaService) {}

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(): void {
    this.consulta.getProductos().subscribe((resp: any) => {
      this.productos = resp; // Asumiendo que el resp es un array de productos
      console.log(this.productos); // Para depuración
    });
  }
}
