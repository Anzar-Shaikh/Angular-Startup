import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello From BridgeLabz';
  imgUrl = "../assets/bridge-labz-logo.png"
  url = "https://www.bridgelabz.com/"

  userName : string = "";
  userNameError : string = "";

  imageClicked() {
    console.log("image clicked");
    window.open(this.url)
  }


  onInput() {
    console.log("change event occurred");
    const nameRegex = RegExp("^[A-Z]{1}[a-zA-Z\\s]{2,}$");
    if (nameRegex.test(this.userName)){
         this.userNameError ="";
         return;
    }
    this.userNameError = "Name is incorrect !"


  }
}
