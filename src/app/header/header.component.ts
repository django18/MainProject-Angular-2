import { Component, OnInit,EventEmitter,Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output()selectedNavEvntEmit=new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  onSelect(selectedNavItem:MouseEvent){
    console.log("selectedNavItem",selectedNavItem.srcElement.innerHTML);
    this.selectedNavEvntEmit.emit(selectedNavItem.srcElement.innerHTML);
  }

}
