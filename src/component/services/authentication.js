import { app } from "../../../config/firebase-config";
import { 
    getAuth, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    signOut, 
    updateProfile 
} from "firebase/auth";

const auth = getAuth(app);

// ✅ Register a user
export const registerUser = async ({ firstName, lastName, email, password }) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Update user profile with full name
        await updateProfile(user, {
            displayName:` ${firstName} ${lastName}`,
        });

        console.log("User created:", user);
        alert("User created successfully");

        return user;
    } catch (err) {
        console.error("Registration error:", err.code, err.message);
        throw err;
    }
};

// ✅ Login a user
export const loginUser = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        return user.email; // return email of logged-in user
    } catch (err) {
        console.error("Login error:", err.code, err.message);
        throw err;
    }
};

// ✅ Logout a user
export const logoutUser = async () => {
    try {
        await signOut(auth);
        console.log("Signed out successfully...");
    } catch (err) {
        console.error("Logout error:", err);
        throw err;
    }
};