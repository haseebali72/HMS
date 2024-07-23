import { doc, getDoc } from "firebase/firestore"
import { auth, db } from "./firebase"
import { signInWithEmailAndPassword } from "firebase/auth"

export const signin = async data => {
    try {   
        const docRef = doc(db, 'users', `${data.name}`)
        const docSnap = await getDoc(docRef)
        console.log(docSnap.exists())
        if(docSnap.exists()){
            const user = docSnap.data()
            if(user.category != data.category){
                return {categoryMismatched : "Access UnAuthorized"}
            }
            await signInWithEmailAndPassword(auth, user.email, data.pwd)
            return {signinSuccess : "Logging In"}
        }else{
            return {noUserName : "User name do not exists"}
        }
        
    } catch (error) {
        if (error.code == "auth/invalid-credential") {
            return { invalidCredentialsMessage: "Invalid Credentials" }
        } else {
            console.log("Error in catch", error.code, error.message)
            return { ErrorinCatch: "Unknown Error" }
        }
    }
}