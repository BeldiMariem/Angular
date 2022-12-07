import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form-component',
  templateUrl: './template-driven-form-component.component.html',
  styleUrls: ['./template-driven-form-component.component.css']
})
export class TemplateDrivenFormComponentComponent implements OnInit {
  titre="Formulaire"
  user={nom:"", email:"", typeCarte:"", numeroCarte:"", dateExpiration:"", code:""}
  constructor() { }

  ngOnInit(): void {
  }

}
