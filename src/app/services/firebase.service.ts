import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({ providedIn: 'root' })
export class FirebaseService {
  constructor(private firestore: AngularFirestore) {}
  getCategories() {
    return this.firestore.collection('categories').valueChanges();
  }
  addSelection(selection: any) {
    return this.firestore.collection('selections').add(selection);
  }
}