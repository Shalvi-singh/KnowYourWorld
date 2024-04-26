import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputComponent} from './input/input.component';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,InputComponent],
  templateUrl:'./app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  title = 'KnowYourWorld';

  selectedCountry:string="";

  constructor(private Serviceservice:ServiceService){}

  onsearchCountry(value:string){
    this.selectedCountry=value;
    console.log(this.selectedCountry);
    
  
  }
}
