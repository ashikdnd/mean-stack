import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import {ProductService} from "../../services/admin/product.service";
import Swal from 'sweetalert2';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

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

  productImg: any;
  productImgB64: any = '';

  constructor(private sanitizer: DomSanitizer, private fb: FormBuilder, private ps: ProductService) { }

  ngOnInit(): void {
  }

  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }

  trackFile(file: any) {
    const f = file.target.files;
    if (f.length) {
      this.productImg = URL.createObjectURL(f[0]);
      const reader = new FileReader();
      reader.readAsDataURL(f[0]);
      reader.onload = () => {
        this.productImgB64 = reader.result;
      };
    }
  }

  saveProduct() {
    const payload = this.productForm.value;
    payload.photo = this.productImgB64;
    this.ps.saveProduct(payload);
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
