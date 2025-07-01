import { collection, getDocs, getFirestore, query, where, doc, getDoc } from "firebase/firestore";
import { app } from "./firebase";

const db = getFirestore(app);

// Obtener todos los productos o por categoría
export async function getProducts(categoryId) {
  let itemsCol = collection(db, "products");
  let q = categoryId
    ? query(itemsCol, where("category", "==", categoryId))
    : itemsCol;
  const itemsSnapshot = await getDocs(q);
  return itemsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

// Obtener producto por ID
export async function getProductById(id) {
  const docRef = doc(db, "products", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    return null;
  }
}