import React, { useEffect, useState } from 'react';
import EmployeeService from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await EmployeeService.getEmployee();
        setEmployees(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchEmployees();
  }, []);

  const handleDeleteEmployee = async (id) => {
    try {
      await EmployeeService.deleteEmployee(id);
      setEmployees(employees.filter((employee) => employee.employeeId !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleViewEmployee = (id) => {
    navigate(`/view-employee/${id}`);
  };

  const handleEditEmployee = (id) => {
    navigate(`/add-employee/${id}`);
  };

  const handleAddEmployee = () => {
    navigate('/add-employee/_add');
  };


  const renderPersonalInfo = ({ firstName, lastName, email, gender, dateOfBirth, phone }) => (
    <div className="col-md-6">
      <h5 className="card-title">Name:</h5>
      <h4>{`${firstName} ${lastName}`}</h4>
      <p>Email: {email}</p>
      <p>Gender: {gender}</p>
      <p>DOB: {dateOfBirth}</p>
      <p>Phone: {phone}</p>
    </div>
  );
  const renderPart2 = ({ hireDate, jobTitle, salary, managerId, departmentId }) => (
    <div className="col-md-6">
      <h5 className="card-title">Part 2</h5>
      <p>Joined: {hireDate}</p>
      <p>Title: {jobTitle}</p>
      <p>CTC: {salary}</p>
      <p>ManagerId: {managerId}</p>
      <p>DepartmentId: {departmentId}</p>
    </div>
  );
  const renderEmployee = ({ employeeId, ...personalInfo }) => (
    <li key={employeeId} className="list-group-item">
      <div className="row">
        <div className="col-md-10">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Personal Info</h5>
              <div className="col-md-8">
                <div className="row">
                  {renderPersonalInfo(personalInfo)}
                  {renderPart2(personalInfo)}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Actions</h5>
              <button onClick={() => handleEditEmployee(employeeId)} className="btn btn-info">Edit</button>
              <button onClick={() => handleDeleteEmployee(employeeId)} className="btn btn-danger">Delete</button>
              <button onClick={() => handleViewEmployee(employeeId)} className="btn btn-info">View</button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );

  return (
    <div>
      <h2 className="text-center">Employee List</h2>
      <div className="row">
        <button className="btn btn-primary" onClick={handleAddEmployee}>
          Add Employee
        </button>
      </div>
      <br />
      <div className="container">
        {employees.map(employee => renderEmployee(employee))}
      </div>
    </div>
  );
};

export default ListEmployeeComponent;
