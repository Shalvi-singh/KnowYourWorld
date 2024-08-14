import { Component, Output,EventEmitter} from '@angular/core';
import { ServiceService } from '../service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { error } from 'node:console';
 

@Component({
  selector: 'app-input',
  standalone: true,
  imports:[],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  country:string="";
  capital:any;
  population:any;
  position:any;
  flag:any;
  currency:any;
  latitude: any;
  longitude: any;

constructor(private  Serviceservice:ServiceService){}

//@Output() onButtonclicked: EventEmitter<string> = new EventEmitter<string>();
   
  onButtonclick(inputEL:HTMLInputElement){
    console.log(inputEL.value);
    this.country=inputEL.value;
   // this.onButtonclicked.emit(this.country);
   this.fetchCountryDetails(this.country);
  }
 
  fetchCountryDetails(country:string){
  
   this.Serviceservice.capital(country).subscribe((data: any)=>{
    //  console.log("data",data);
      this.capital=data.data.capital;
  },
   ((error:HttpErrorResponse)=>{
    if(error.status===404){
      alert("COUNTRY NOT FOUND.\nYou may try another name of the country");
    } else{
      console.error('An error occurred:',error.message);
    }
   }));

    this.Serviceservice.population(country).subscribe((data:any)=>{
    //  console.log("data1",data);
      this.population=data.data.populationCounts[0].value;
  });
  
    this.Serviceservice.position(country).subscribe((data: any)=>{
      // console.log("data2",data);
     this.longitude=data.data.long;
     this.latitude=data.data.lat;
  });
  
  this.Serviceservice.flag(country).subscribe((data: any)=>{
   // console.log("data3",data);
    this.flag=data.data.flag;
 });

  this.Serviceservice.currency(country).subscribe((data: any) => {
    //console.log("data4", data);
    this.currency = data.data.currency;
  });

    }
  }

