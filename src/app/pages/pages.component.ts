import {Component, OnInit, Input} from '@angular/core';
import {Annonce} from '../model/annonce';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  @Input() listChild: Annonce[];
  @Input() nbrAnnonceChild: number;

  constructor() {
  }

  ngOnInit(): void {
  }

}
