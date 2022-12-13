import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-panel',
  templateUrl: './message-panel.component.html',
  styleUrls: ['./message-panel.component.scss']
})
export class MessagePanelComponent implements OnInit {

  constructor() { }
 user: any
 input:any
  ngOnInit(): void {
  }

  onSubmit() {
    // this.$emit("input", this.input);
    // this.input = "";
  }
  displaySender(message :any , index: any) {
    return (
      index === 0 || 1
      // this.user.messages[index - 1].fromSelf !==
      //   this.user.messages[index].fromSelf
    );
  }

  isValid() {
    // return this.input.length > 0;
  }

}
