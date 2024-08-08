import {
  AfterContentInit,
  AfterViewInit,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

import {
  UpperCasePipe,
  LowerCasePipe,
  PercentPipe,
  DatePipe,
  CurrencyPipe
} from '@angular/common';
import { DetailsMoviesComponent } from '../details-movies/details-movies.component';
import { DetailsReviewsComponent } from '../details-reviews/details-reviews.component';
import { SharedModule } from '../../shared/shared.module';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    DetailsMoviesComponent,
    DetailsReviewsComponent,
    UpperCasePipe,
    LowerCasePipe,
    PercentPipe,
    DatePipe,
    SharedModule,
    CurrencyPipe
    ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent
  implements OnInit, OnChanges, AfterContentInit, AfterViewInit
{
  constructor() {}

  Title = 'Titolo test';
  Date = new Date();
  Description = 'Descrizione test';
  Price = 10;
  SellingPrice = 15.50;
  Width = 500;
  Image = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.timeout.com%2Fimages%2F102796952%2Fimage.jpg&f=1&nofb=1&ipt=d757d4888e41793ec8306aecf7bd1a6dc66117d6f8e5ecc901847941ea8f5916&ipo=images';
  attributeValue= 'movies-app-test-value'
  IsH1Heading = true;
  fullName = "Andre Rizzato"
  time = new Date()
  setTimeToNow()
  {
      this.time = new Date()
  }
  
  pColor = "";
  setColor(_color: string)
  {
    this.pColor = _color
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges not implemented.');
  }
  ngOnInit(): void {
    console.log('ngOnInit not implemented.');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit not implemented.');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit not implemented.');
  }
}
