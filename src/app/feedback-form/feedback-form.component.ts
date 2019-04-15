import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {

  feedbackForm: FormGroup; // Declaring a variable of type FormGroup

  constructor(private formBuilder: FormBuilder) { 
    this.buildFeedbackForm();
  }

  ngOnInit() {

  }

  buildFeedbackForm() {
    this.feedbackForm = this.formBuilder.group({
      // customerName: new FormControl() // arguments: val, validator
      customerName: this.formBuilder.control(null), // same as above but expects null by default
      productPurchased: this.formBuilder.control(null),
      suggestions: this.formBuilder.control(null),
      delivery: this.formBuilder.group({
        delOnTime: this.formBuilder.control(null),
        damagedProduct: this.formBuilder.control(null),
        extraCharge: this.formBuilder.control(null)
      }),
      installation: this.formBuilder.group({
        properInstallation: this.formBuilder.control(null),
        easyUserManual: this.formBuilder.control(null),
        properTraining: this.formBuilder.control(null)
      }),
      maintenance: this.formBuilder.group({
        periodicMaintenance: this.formBuilder.control(null),
        issuesFixed: this.formBuilder.control(null),
        frequentIssues: this.formBuilder.control(null)
      }) // Nested Form Group
    }); // Form Builder uses a group of form controls to create a Form Group
  }

}
