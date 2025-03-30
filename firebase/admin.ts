// import { credentials } from './../node_modules/@grpc/grpc-js/src/index';
// import {cert, getApps} from 'firebase-admin/app'
// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';
// const initFirebaseAdmin = () => {
//     const apps = getApps();
//     if(!apps.length){
//         initializeApp({
//             credentials: cert({
//                 projectId: process.env.FIREBASE_PROJECT_ID,
//                 clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
//                 privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n")
//             })
//         })
//     }
//     return {
//         auth: getAuth(),
//         db: getFirestore()

//     }
// }
// export const {auth,db} = initFirebaseAdmin();

import admin from 'firebase-admin';
import { getApps } from 'firebase-admin/app';

// Initialize Firebase Admin SDK
const initFirebaseAdmin = () => {
    const apps = getApps();
    if (!apps.length) {
        admin.initializeApp({
            credential: admin.credential.cert({
                projectId: process.env.FIREBASE_PROJECT_ID,
                clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
                privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
            }),
        });
    }
    return {
        auth: admin.auth(),
        db: admin.firestore(),
    };
};

export const { auth, db } = initFirebaseAdmin();
