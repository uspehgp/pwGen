import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  onButtonClick() {
    let validChars = '';
    if (this.includeLetters)
      validChars += 'abcdefghigklmnopqrstuvwxyz';
    if (this.includeNumbers)
      validChars += '0123456789';
    if (this.includeSymbols)
      validChars += '!@#$%^&*()';
    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword+=validChars[index];
    }
    this.password = generatedPassword;
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
    console.log(this.includeLetters)
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
    console.log(this.includeNumbers)
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols
  }

  onChangeLength(value: string) {
    const parsedValue = parseInt(value)
    if (!isNaN(parsedValue))
      this.length = parsedValue;
  }
}
