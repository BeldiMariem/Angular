import {Component, OnInit} from '@angular/core';
import {AnnonceService} from '../services/annonce.service';
import {Annonce} from '../model/annonce';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.css']
})
export class AnnoncesComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }

}
