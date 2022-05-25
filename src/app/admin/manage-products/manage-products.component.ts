import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/admin/product.service";
import {MatTableDataSource} from "@angular/material/table";
import Swal from 'sweetalert2';
import {MatDialog} from '@angular/material/dialog';
import {UpdateComponent} from "./update/update.component";

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})

export class ManageProductsComponent implements OnInit {

  // data: any = this.ps.getProducts();
  products: any = [];

  columns = [
    {name: 'Product', property: 'name', visible: true, isModelProperty: true},
    {name: 'Description', property: 'description', visible: true, isModelProperty: true},
    {name: 'Color', property: 'color', visible: true, isModelProperty: true},
    {name: 'Price', property: 'price', visible: true, isModelProperty: true},
    {name: 'Actions', property: 'actions', visible: true, isModelProperty: false}
  ]

  displayedColumns: string[] = ['name', 'description', 'color', 'price', 'actions'];
  data = new MatTableDataSource();

  constructor(private ps: ProductService, public dialog: MatDialog) {
    this.products = this.ps.getProducts();
    this.data = this.products;
  }

  ngOnInit(): void {
  }

  editProduct(product: any) {
    const dialogRef = this.dialog.open(UpdateComponent, {
      height: '400px',
      width: '600px',
      data: product
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Update the product after closing the dialog
      }
    });
  }

  deleteProduct(product: any) {
    Swal.fire({
      title: '<strong>Are you sure?</strong>',
      icon: 'info',
      html: 'You cannot undo this process!',
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        const filter = this.products.filter((f: any) => {
          return f.name != product.name;
        });
        this.products = filter;
        localStorage.setItem('products', JSON.stringify(this.products)); // API
        this.data = this.products;
        Swal.fire('Deleted', `${product.name} has been deleted`, 'error');
      }
    })
  }

}
