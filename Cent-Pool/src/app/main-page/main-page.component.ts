import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {

  bgSize ="small"
  // notData = prompt("enter number of notifications")
  //  proGress = this.notData;

 showSpinner = false;

 loadData(){
   this.showSpinner=true;
   setTimeout(()=>{
     this.showSpinner=false
   }, 5000)
 }
 

}
