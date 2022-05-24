import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import {ProductService} from "../../services/admin/product.service";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productForm = this.fb.group({
    'name': ['', Validators.required],
    'description': ['', Validators.required],
    'color': [''],
    'price': ['', [Validators.required, Validators.pattern('(^\\-?\\d*\\d+.?(\\d{1,2})?$)')]]
  });

  constructor(private fb: FormBuilder, private ps: ProductService) { }

  ngOnInit(): void {
  }

  saveProduct() {
    this.ps.saveProduct(this.productForm.value);
    Swal.fire('Success', 'Product saved successfully!', 'success');
    this.clearForm();
    // this.ps.saveProduct(this.productForm.value).subscribe((res: any) => {
    //   console.log(res)
    //   if (res.success) {
    //     Swal.fire('Success', 'Product saved successfully!', 'success');
    //     this.clearForm();
    //   } else {
    //     alert(res.error);
    //   }
    // }, e => {
    //   console.log(e)
    // });
  }

  clearForm() {
    this.productForm.reset();
    Object.keys(this.productForm.controls).forEach(key => {
      this.productForm.controls[key].setErrors(null) ;
    });
  }

}
