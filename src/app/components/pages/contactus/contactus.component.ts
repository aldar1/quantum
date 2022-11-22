import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import {ContactService } from '../../../services/contact.service'
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  contactanosForm:FormGroup;

  constructor(public formBuilder: FormBuilder, private contact: ContactService) {
    this.contactanosForm = formBuilder.group({
      nombre: [ "",
        Validators.compose([
        Validators.minLength(1),
        Validators.maxLength(30),
        Validators.pattern("[0-9a-z-A-Z-_]*"),
        Validators.required
      ])],
      email: ["",
        Validators.compose([
          Validators.required,
          Validators.email
        ])],
        telefono: ["",
        Validators.compose([
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(20),
        ])],
        mensaje:["",
          Validators.compose([
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(500)
          ])]
    });
   }

  ngOnInit(): void {
  }

  submitForm(form){
    console.log(form)
    this.contact.PostMessage(form)
      .subscribe(response => {
        location.href = 'https://mailthis.to/confirm'
        console.log(response)
      }, error => {
        console.warn(error.responseText)
        console.log({ error })
      })
  }

  

}
