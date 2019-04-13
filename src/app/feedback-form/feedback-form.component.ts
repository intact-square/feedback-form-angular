import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

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
    this.feedbackForm = this.formBuilder.group({}); // Form Builder uses a group of form controls to create a Form Group
  }

}
