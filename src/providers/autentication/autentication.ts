import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

/*
  Generated class for the AutenticationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AutenticationProvider {

  constructor(private angularFireAuth: AngularFireAuth) {

  }

  loginWithEmail(email: string, password: string) {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
  }
  registrarWithEmailPassword(email: string, password: string) {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password);
  }
  getStatus() {
    return this.angularFireAuth.authState;
  }
  logOut() {
    return this.angularFireAuth.auth.signOut();
  }

  onAuthStateChanged(user,name) {
    if (user) {
      user.updateProfile({
        displayName: name
      })}
  }

  getDisplayName() {
    return this.angularFireAuth.authState.subscribe(datos => datos.displayName);
  }
}
