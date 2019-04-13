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