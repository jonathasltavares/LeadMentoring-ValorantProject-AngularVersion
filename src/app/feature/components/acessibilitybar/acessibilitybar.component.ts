import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acessibilitybar',
  templateUrl: './acessibilitybar.component.html',
  styleUrls: ['./acessibilitybar.component.css']
})
export class AcessibilitybarComponent implements OnInit {
  font_size =16
  constructor() { 
  }

  ngOnInit(): void {
  }

  setFontSize(id:string){
    if(id==='a-' && this.font_size>10){
      this.font_size -= 2
    }else if(id==='a+' && this.font_size<22){
      this.font_size += 2
    }else if(id==='a'){
      this.font_size = 16
    }

    let htmlRoot:HTMLElement = <HTMLElement> document.getElementsByTagName("html")[0]
    if(htmlRoot != null){
      htmlRoot.style.fontSize = `${this.font_size}px`
    }
  }
}
