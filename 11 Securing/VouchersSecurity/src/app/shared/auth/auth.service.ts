import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { AngularFireAuth } from "angularfire2/auth";
import { RequestOptions } from "@angular/http";

@Injectable()
export class AuthService {
  constructor(private fireAuth: AngularFireAuth) {
    this.fireAuth.auth.onAuthStateChanged(user => {
      if (user) {
        this.fbUser = user;
        console.log("Current User: ", this.fbUser);
        this.User.next(this.fbUser);
        this.fbUser.getIdToken().then(token => {
          this.token = token;
          console.log("Token: ", this.token);
        });
      }
    });
  }

  private fbUser: firebase.User = null;
  public token: string;

  public User: BehaviorSubject<firebase.User> = new BehaviorSubject(
    this.fbUser
  );

  isAuthenticated(): boolean {
    return this.fbUser == null;
  }

  createUser(email: string, password: string): Promise<any> {
    return this.fireAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  logOn(user, password, onSuccess?) {
    return this.fireAuth.auth
      .signInWithEmailAndPassword(user, password)
      .then(onSuccess)
      .catch(err => {
        console.log("Error logging in", err);
        return err;
      });
  }

  logOff() {
    this.fireAuth.auth
      .signOut()
      .then(loggedOut => {
        this.fbUser = null;
        this.User.next(null);
        console.log("Logged out", "Come back and visit soon");
      })
      .catch(err => console.log("Error logging out", err));
  }

  getTokenString() {
    return this.fbUser.getIdToken().then(token => {
      let tokenHeader = new Headers({
        Authorization: token
      });
      console.log(tokenHeader);
    });
  }
}
