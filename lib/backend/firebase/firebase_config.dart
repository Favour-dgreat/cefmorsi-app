import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/foundation.dart';

Future initFirebase() async {
  if (kIsWeb) {
    await Firebase.initializeApp(
        options: const FirebaseOptions(
            apiKey: "AIzaSyCRheJNvEHF3JNHfb6kcWYELvFNy8LMs1Y",
            authDomain: "cefmorsi-d8ffc.firebaseapp.com",
            projectId: "cefmorsi-d8ffc",
            storageBucket: "cefmorsi-d8ffc.appspot.com",
            messagingSenderId: "64058760025",
            appId: "1:64058760025:web:081c4f2ca6b4249bda4a48",
            measurementId: "G-VXNFBGEM76"));
  } else {
    await Firebase.initializeApp();
  }
}
