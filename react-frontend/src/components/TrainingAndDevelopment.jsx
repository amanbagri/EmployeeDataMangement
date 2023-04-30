import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const TrainingAndDevelopment = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const [training, setTraining] = useState({
    courseName: '',
    startDate: '',
    endDate: '',
    description: '',
  });

  useEffect(() => {
    EmployeeService.getEmployeeById(id).then((res) => {
      setEmployee(res.data);
    });
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTraining((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    EmployeeService.addTraining(employee.id, training).then((res) => {
      // handle successful submission
    });
  };

  return (
    <div>
      <h3>Training and Development</h3>
      <hr />
      <div className="row">
        <div className="col-md-6">
          <h4>Employee Details</h4>
          {employee && (
            <div>
              <p>
                <strong>Name: </strong>
                {employee.firstName} {employee.lastName}
              </p>
              <p>
                <strong>Email: </strong>
                {employee.email}
              </p>
              <p>
                <strong>Phone: </strong>
                {employee.phone}
              </p>
            </div>
          )}
        </div>
        <div className="col-md-6">
          <h4>Add Training</h4>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="courseName">Course Name</label>
              <input
                type="text"
                className="form-control"
                id="courseName"
                name="courseName"
                value={training.courseName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="startDate">Start Date</label>
              <input
                type="date"
                className="form-control"
                id="startDate"
                name="startDate"
                value={training.startDate}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="endDate">End Date</label>
              <input
                type="date"
                className="form-control"
                id="endDate"
                name="endDate"
                value={training.endDate}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                value={training.description}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Add Training
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TrainingAndDevelopment;
