import { Component, OnInit } from '@angular/core';
//import {socket} from '../../app/socket';
@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  // onMessage(content) {
  //   if (this.selectedUser) {
      // socket.emit("private message", {
      //   content,
      //   to: this.selectedUser.userID,
      // });
  //     this.selectedUser.messages.push({
  //       content,
  //       fromSelf: true,
  //     });
  //   }
  // }
  // onSelectUser(user) {
  //   this.selectedUser = user;
  //   user.hasNewMessages = false;
  // }


  // created() {
    // socket.on("connect", () => {
    //   this.users.forEach((user) => {
    //     if (user.self) {
    //       user.connected = true;
    //     }
    //   });
    // });

    // socket.on("disconnect", () => {
    //   this.users.forEach((user) => {
    //     if (user.self) {
    //       user.connected = false;
    //     }
    //   });
    // });

    // const initReactiveProperties = (user) => {
    //   user.connected = true;
    //   user.messages = [];
    //   user.hasNewMessages = false;
    // };

    // socket.on("users", (users) => {
    //   users.forEach((user) => {
    //     user.self = user.userID === socket.id;
    //     initReactiveProperties(user);
    //   });
      // put the current user first, and sort by username
    //   this.users = users.sort((a, b) => {
    //     if (a.self) return -1;
    //     if (b.self) return 1;
    //     if (a.username < b.username) return -1;
    //     return a.username > b.username ? 1 : 0;
    //   });
    // });

    // socket.on("user connected", (user) => {
    //   initReactiveProperties(user);
    //   this.users.push(user);
    // });

    // socket.on("user disconnected", (id) => {
    //   for (let i = 0; i < this.users.length; i++) {
    //     const user = this.users[i];
    //     if (user.userID === id) {
    //       user.connected = false;
    //       break;
    //     }
    //   }
    // })

    //socket.on("private message", ({ content: love, from: a }) => {
      // for (let i = 0; i < this.users.length; i++) {
      //   const user = this.users[i];
        // if (user.userID === from) {
        //   user.messages.push({
        //     content,
        //     fromSelf: false,
        //   });
          // if (user !== this.selectedUser) {
          //   user.hasNewMessages = true;
          // }
    //       break;
    //     }
    //   }
    // });
  
  // destroyed() {
  //   // socket.off("connect");
  //   // socket.off("disconnect");
  //   // socket.off("users");
  //   // socket.off("user connected");
  //   // socket.off("user disconnected");
  //   // socket.off("private message");
  // }
}

