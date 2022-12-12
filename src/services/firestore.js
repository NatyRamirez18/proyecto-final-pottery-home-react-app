
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc, orderBy, limit } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyAvZ2LXlbZA9AnE3Rp_J8wTTBFp1AT6SLU",
  authDomain: "proyect-pottery.firebaseapp.com",
  projectId: "proyect-pottery",
  storageBucket: "proyect-pottery.appspot.com",
  messagingSenderId: "326745425095",
  appId: "1:326745425095:web:684558ac0c13ce1ffc2ae2"
};


const app = initializeApp(firebaseConfig);

const DB = getFirestore(app)

//1
export default async function getItems(){
const collectionProductsRef= collection(DB, "products");
const documentSnapshot= await getDocs (collectionProductsRef);

const documentsData= documentSnapshot.docs.map(( doc) => {
 return {
  ...doc.data(),
  id: doc.id
 };
});
return documentsData;
}

//2
export async function getOneItem(idParams){
  const docRef= doc(DB, "products",idParams);

  const docSnap= await getDoc (docRef);

  


return{
  ...docSnap.data(),
  id: docSnap.id

}
}

//3
export async function getItemsByCategory(categoryParams){
  const collectionRef= collection(DB,"products");

  const queryCategory= query(collectionRef, where("category","==", categoryParams));

  const documentSnapshot= await getDocs (queryCategory);

  const documentsData= documentSnapshot.docs.map(( doc) => {
    return {
    ...doc.data(),
    id: doc.id
 };
});
return documentsData;
};




export async function orderedGetItems(){

const collectionProductsRef= collection(DB, "products");
const q = query(collectionProductsRef, orderBy ("index"), limit(20) );

const documentSnapshot= await getDocs(q);

const documentsData= documentSnapshot.docs.map(( doc) => {
 return {
  ...doc.data(),
  id: doc.id
 };
});
return documentsData;
}


//4 export data to firebase

export async function createOrder(order){
  const collectionRef= collection(DB, "orders");
  const docOrder = await addDoc(collectionRef, order);

  return (docOrder.id);

}





