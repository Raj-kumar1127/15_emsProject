import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CRUD_OP from '../services/Employee.services'
import './ShowEmp.css'

export default function ShowEmp() {
  const navigate = useNavigate()
  const [empList, setEmpList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await CRUD_OP.getEmployees() // <-- typo fixed here
        // Debug: log the fetched data
        console.log('Fetched employees:', data)
        setEmpList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])

  const handleDelete = async (empId) => {
    try {
      await CRUD_OP.deleteEmployee(empId)
      alert("User deleted successfully...")
      setEmpList((prev) => prev.filter((emp) => emp.id !== empId))
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="container py-4">
      <h2 className="mb-4 text-center fw-bold">Employee Management System</h2>
      <div className="table-responsive shadow rounded bg-white p-3">
        <table className="table table-striped table-hover align-middle">
          <thead className="table-dark">
            <tr>
              <th>Sr No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Age</th>
              <th>Address</th>
              <th>Type</th>
              <th>Dept</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {empList.length > 0 ? (
              empList.map((emp, idx) => (
                <tr key={emp.id}>
                  <td>{idx + 1}</td>
                  <td>{emp.name}</td>
                  <td>{emp.email}</td>
                  <td>{emp.phone}</td>
                  <td>{emp.age}</td>
                  <td>{emp.address}</td>
                  <td>{emp.empType}</td>
                  <td>{emp.dept}</td>
                  <td>{emp.salary}</td>
                  <td>
                    <div className="btn-group" role="group">
                      <button
                        className="btn btn-sm btn-primary me-2"
                        onClick={() => navigate(`/updateEmp/${emp.id}`)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(emp.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10" className="text-center text-muted">
                  No employees found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}