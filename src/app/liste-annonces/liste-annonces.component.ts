import {Component, OnInit} from '@angular/core';
import {Annonce} from '../model/annonce';
import {AnnonceService} from '../services/annonce.service';

@Component({
  selector: 'app-liste-annonces',
  templateUrl: './liste-annonces.component.html',
  styleUrls: ['./liste-annonces.component.css']
})
export class ListeAnnoncesComponent implements OnInit {
  list: Annonce[];

  constructor(private  annonce: AnnonceService) {
  }

  ngOnInit(): void {
    this.annonce.getList().subscribe((data: Annonce[]) => this.list = data);
  }


}
