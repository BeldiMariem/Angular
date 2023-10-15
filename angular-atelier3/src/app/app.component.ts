import {Component, OnInit} from '@angular/core';
import {AnnonceService} from './services/annonce.service';
import {Annonce} from './model/annonce';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ExamenTwin';
  list: Annonce[];
  inputNbrAnnonce: number;
  constructor(private annonce: AnnonceService) {
  }
  ngOnInit() {
    this.annonce.getList().subscribe((data: Annonce[]) => this.list = data);
  }
}
