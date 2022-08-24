import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ValidationService } from 'src/app/validation.service';


@Component({
  selector: 'app-aadhaar-validation',
  templateUrl: './aadhaar-validation.component.html',
  styleUrls: ['./aadhaar-validation.component.scss']
})
export class AadhaarValidationComponent implements OnInit {
  public aadhaar : number;
  public otp: number;
  public agree = false;
  public aadhaarVerified = false;
  constructor(public bsModalRef: BsModalRef, public validationService: ValidationService) { }
  ngOnInit(): void {
    console.log(this.aadhaar);
    this.aadhaarVerified=false;
  }
  setAadhaarVerified() {
    this.aadhaarVerified = true;
  }
  submit() {
    const OTP = 123456;
    if(this.otp == OTP) {
      this.validationService.updateValidation(false);
      this.bsModalRef.hide();
      alert('Aadhaar Verified Successfully');
    } else {
      alert('OTP is incorrect try again');
    }
  }
  close() {
    console.log(this.bsModalRef);
    this.bsModalRef.hide();
  }
}
