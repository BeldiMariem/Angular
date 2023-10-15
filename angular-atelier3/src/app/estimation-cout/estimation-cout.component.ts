import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-estimation-cout',
  templateUrl: './estimation-cout.component.html',
  styleUrls: ['./estimation-cout.component.css']
})
export class EstimationCoutComponent implements OnInit {
  inputPosition: string;
  inputNbrC: number;
  cout: number;

  constructor() {
  }

  ngOnInit(): void {
    this.cout = 0;
  }

  estimation() {
    this.cout = 10;
  }

}
