import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 constructor(private http:HttpClient){}
name:string="";
email:string;
found:boolean;

onNameKeyUp(event:any)
{
this.name=event.target.value;
this.found=false;
  }
getProfile(){

  this.http.get(`https://jsonplaceholder.typicode.com/users/?name=${this.name}`)
  .subscribe(
    (data:any[])=>{
//console.log(data)
if (data.length){

this.email=data[0].email;
this.found=true;


}
    }
  )
}


postProfile(){

  this.http.post(`https://jsonplaceholder.typicode.com/users/`,
  
  {name:"parul",
  email:"nohara@hotmail.com"
}
  )
  .subscribe(
    (data:any[])=>{
console.log(data)

    }
  )
}







}
