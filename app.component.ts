import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app2';
  name= 'Guest';
  street='';
  city='';
  zip='';
  today= new Date();
     count:number=0;
     status:any="show";
     showMyContainer:boolean=false;
     increment()
     {
       this.count++;
     }
     decrement()
     {
       this.count--;
     }
    toggle(){
      this.showMyContainer=!this.showMyContainer;
       if(this.showMyContainer){
         this.status="hide";
       }else{
               this.status="show";
   
       }
    }
}