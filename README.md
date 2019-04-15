# ModelDrivenForms

## 1. Intro - Model Driven Forms or Reactive Forms
Reactive forms helps us manage the state of a form at a given point in time. It helps us to write some executable code when any value or state changes.
It helps us to write complex validation rules in code.
It has direct access to the data model of our form.
The logic which we implement in model driven forms can be tested. And thus unit test can be done.
Reactive forms are used to implement more advance forms. Template driven forms are mainly for simpler implementations.

## 2. Create a Form Component

create a component: ng g c feedback-form

## 3. ReactiveFormsModule && FormGroup
app.module.ts file import ReactiveFormsModule
import { ReactiveFormsModule } from '@angular/forms';

feedback-form.component.ts
import { FormGroup } from '@angular/forms'; Form group represents the entire form that we are going to build.

FormBuilder is used to build the form. import { FormGroup } from '@angular/forms';

## 4. HTML and CSS
styles.css, feedback-form.component and app.component

## 5. Creating FormControl
FormGroup represents the entire form. And the individual form elements will be represented by FormControl. Thus, FormControl is the building block of a FormGroup.
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

## 6. Creating nested form groups
Creating form groups inside form groups for holding similar form control elements e.g a group of checkboxes

## 7. Creating Form Controls inside nested form groups

## 8. Creating Form Controls for radio buttons
Radio buttons is just a single input. Thus we are not having a different form group for this. While checkbox has multiple inputs with multiple values, so having a form group to wrap them around.

## 9. Creating Form Array for dynamic elements
A Form Array is also like Form Group and can be used to create multiple form control elements. This is unique in the way that we can create/add/delete form control elements inside it.

## 10. Creating Add/Delete functions

## 11. Pre filling data in form
In HTML we use "value" attribute. Thus giving the same data from value of an input into form control will set it as default selection.

## 12. Pre filling data in form with setValue in ngOnInit

## 13. reset()
Any form group or form control or form array can be cleared with reset()

## 14. Showing form data on HTML
json pipe used to view HTML data for easier coding