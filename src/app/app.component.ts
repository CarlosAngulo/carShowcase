import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  private scrollFlag = true;
  private stick: boolean = false;
  
  doSomethingOnScroll($event){
    let scrollOffset = $event.srcElement.children[0].scrollTop;
    if(scrollOffset > 184 && this.scrollFlag) {
      this.stick = true;
      this.scrollFlag = false;
    }
    if(scrollOffset < 184 && !this.scrollFlag) {
      this.stick = false;
      this.scrollFlag = true;
    }
    
  }
}
