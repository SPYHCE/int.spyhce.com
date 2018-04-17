import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {

  constructor(public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  applyLinkedin() {
    window.open('http://spyhce.com/apply-linkedin/', '_blank');
  }

  copyEmailToClipboard(event) {
    const txtArea = document.createElement('textarea');
    txtArea.value = 'hello@spyhce.com';
    document.body.appendChild(txtArea);
    txtArea.select();
    document.execCommand('copy');
    this.snackBar.open('Email copied to clipboard', null, {
      duration: 3000,
    });
    document.body.removeChild(txtArea);
    //
  }

}
