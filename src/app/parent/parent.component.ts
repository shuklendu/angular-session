// parent.component.ts

import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-parent',
  templateUrl: `./parent.component.html`,
})
export class ParentComponent {
  messageToChild = 'Hello from Parent!';
  messageFromChild = '';

  receiveMessage(message: string) {
    this.messageFromChild = message;
  }
}
