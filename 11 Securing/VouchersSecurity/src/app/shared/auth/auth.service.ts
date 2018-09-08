import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { AngularFireAuth } from "angularfire2/auth";

@Injectable()
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.auth.onAuthStateChanged(user => {
      if (user) {
        this.fbUser = user;
        this.User.next(this.fbUser);
      }
    });
  }

  private fbUser: firebase.User = null;
  public User: BehaviorSubject<firebase.User> = new BehaviorSubject(
    this.fbUser
  );

  isAuthenticated(): boolean {
    return this.fbUser == null;
  }

  createUser(email: string, password: string): Promise<any> {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  logOn(user, password, onSuccess?) {
    return this.afAuth.auth
      .signInWithEmailAndPassword(user, password)
      .then(onSuccess)
      .catch(err => {
        console.log("Error logging in", err);
        return err;
      });
  }

  logOff() {
    this.afAuth.auth
      .signOut()
      .then(loggedOut => {
        this.fbUser = null;
        this.User.next(null);
        console.log("Logged out", "Come back and visit soon");
      })
      .catch(err => console.log("Error logging out", err));
  }
}
