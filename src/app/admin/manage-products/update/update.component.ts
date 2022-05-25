import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ProductService} from "../../../services/admin/product.service";
import Swal from "sweetalert2";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  productForm = this.fb.group({
    'name': ['', Validators.required],
    'description': ['', Validators.required],
    'color': [''],
    'price': ['', [Validators.required, Validators.pattern('(^\\-?\\d*\\d+.?(\\d{1,2})?$)')]]
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, private ps: ProductService, private dialogRef: MatDialogRef<any>) { }

  ngOnInit(): void {
    console.log(this.data)
    this.productForm.patchValue({
      name: this.data.name,
      description: this.data.description,
      color: this.data.color,
      price: this.data.price
    })
  }

  updateProduct() {
    this.ps.updateProduct(this.productForm.value);
    Swal.fire('Success', 'Product updated successfully!', 'success');
  }

  close() {
    this.dialogRef.close(this.productForm.value);
  }

}
