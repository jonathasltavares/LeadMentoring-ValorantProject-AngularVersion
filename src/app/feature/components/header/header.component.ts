import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  html = document.getElementsByTagName('html')[0]
  normalSize = 16
  currentSize = 16
  constructor() { }

  ngOnInit(): void {
  }

  scrollTo(element: any): void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

   logout(){
      window.location.href = '/login'
  }

   incremetFontSize(){
      if(this.currentSize<22){
          this.currentSize+=2
          this.setCurrentSize(this.currentSize)

      }
  }

 
   decremetFontSize(){
      if(this.currentSize>10){
          this.currentSize-=2
          this.setCurrentSize(this.currentSize)
      }
  }

   resetFontSize(){
      this.currentSize = this.normalSize
      this.setCurrentSize(this.currentSize)
  }

   setCurrentSize(currentSize: any){
      this.html.style.fontSize = `${currentSize}px`
      console.log(this.currentSize)
  }

}
