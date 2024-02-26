// child.component.ts

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <h2>Child Component</h2>
    <p>Message from Parent: {{ messageFromParent }}</p>
    <button (click)="sendMessageToParent()">Send Message to Parent</button>
  `,
})
export class ChildComponent {
  @Input() messageFromParent: string = '';
  @Output() messageEvent = new EventEmitter<string>();

  sendMessageToParent() {
    const message = 'Hello from Child!';
    this.messageEvent.emit(message);
  }
}
