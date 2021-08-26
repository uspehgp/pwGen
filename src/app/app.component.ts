import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  useLetters = false;
  useNumbers = false;
  useSymbols = false;

  onButtonClick() {
    this.password = 'My password'
  }

  onChangeUseLetters() {
    this.useLetters = !this.useLetters;
    console.log(this.useLetters)
  }

  onChangeUseNumbers() {
    this.useNumbers = !this.useNumbers;
    console.log(this.useNumbers)
  }

  onChangeUseSymbols() {
    this.useSymbols = !this.useSymbols
  }
}
