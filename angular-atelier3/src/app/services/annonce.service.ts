import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Annonce} from '../model/annonce';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {
  url = '../../assets/annonces.json';
  constructor(private http: HttpClient) {
  }
  getList() {
    return this.http.get<Annonce[]>(this.url);
  }
}
