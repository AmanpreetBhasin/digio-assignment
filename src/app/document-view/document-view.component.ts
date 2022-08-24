import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AadhaarValidationComponent } from '../modal/aadhaar-validation/aadhaar-validation.component';
import { ValidationService } from '../validation.service';

@Component({
  selector: 'app-document-view',
  templateUrl: './document-view.component.html',
  styleUrls: ['./document-view.component.scss']
})
export class DocumentViewComponent implements OnInit {
  bsModalRef?: BsModalRef;
  isValidationAllowed = true;
  constructor(private modalService: BsModalService, private validationService: ValidationService) {}

  ngOnInit(): void {
    this.openModalWithComponent();
    this.validationService.validationPipeObs$.subscribe((value: boolean) => {
        this.isValidationAllowed = value;
    });
  }
  openModalWithComponent() {
    if(this.isValidationAllowed) {
      const initialState = { backdrop: true, ignoreBackdropClick: false};
      this.bsModalRef = this.modalService.show(AadhaarValidationComponent, initialState);
      this.bsModalRef.content.closeBtnName = 'Close';
    } else {
      alert('Document Already Validated');
    }
  }
}
