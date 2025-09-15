import { addDoc, collection, getDocs, doc, updateDoc, deleteDoc, getDoc } from "firebase/firestore";
import { db } from "../../../config/firebase-config"; 

const employeeCollectionRef = collection(db, "Employee");

// Get all employees
const getEmployees = async () => {
    return await getDocs(employeeCollectionRef);
}

// Get single employee
const getEmployee = async (id) => {
    const employeeDoc = doc(db, "Employee", id);
    return await getDoc(employeeDoc);
}

// Add employee
const addEmployee = (newEmp) => {
    return addDoc(employeeCollectionRef, newEmp);
}

// Update employee
const updateEmployee = async (id, employeeUpdates) => {
    try {
        const employeeDoc = doc(db, "Employee", id);
        await updateDoc(employeeDoc, employeeUpdates);
        console.log("Employee updated successfully");
    } catch (error) {
        console.log("Error updating employee: ", error);
    }
}

// Delete employee
const deleteEmployee = (id) => {
    const employeeDoc = doc(db, "Employee", id);
    return deleteDoc(employeeDoc);
}

const CRUD_OP = {
    getEmployees,
    getEmployee,
    addEmployee,
    updateEmployee,
    deleteEmployee
}

export default CRUD_OP;