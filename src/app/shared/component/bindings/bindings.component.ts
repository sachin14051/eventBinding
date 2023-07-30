import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.scss']
})
export class BindingsComponent implements OnInit {
  public count: number = 0;
  public message :string = "lets check the offer and enjoy your shopping";
  constructor() { }
  onclick(){
    console.log("clicked")
    this.count++;
    if(this.count === 1){
      this.message = " item is add"
    }else{
      this.message = "the items are added in your cart"
    }
    if(this.count === 0){
      this.message ="lets check the offer and enjoy your shopping"
    }
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Your item has been saved',
      showConfirmButton: false,
      timer: 1500
    })
    

  }
  onDelete(){
    console.log("deleted");
    this.count--
    if(this.count < 0){
      this.count = 0
    }
    if(this.count < 1){
      this.message = "no item is added"
    }
    if(this.count === 1){
      this.message = " item is add"
    }else{
      this.message = "the items are added in your cart"
    }
    if(this.count === 0){
      this.message ="lets check the offer and enjoy your shopping"
    }
    Swal.fire({
      icon: 'error',
      title: 'removed...',
      text: 'your item is removed',
      footer: '<a href="">Why do I have this issue?</a>'
    })
  }
  ngOnInit(): void {
  }

}
