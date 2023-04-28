import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
import { Field, Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const validationSchema = Yup.object({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
});

const FormField = ({ label, name, type, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <Field
        type={type}
        name={name}
        id={name}
        className="form-control"
        {...rest}
      />
      <ErrorMessage name={name} />
    </div>
  );
};

const CreateEmployeeComponent = () => {
  const { id } = useParams();
  const navigate = useNavigate();



  const [initialValues, setInitialValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  useEffect(() => {
    if (id !== '_add') {
      EmployeeService.getEmployeeById(id).then((res) => {
        const employee = res.data;
        setInitialValues({
          firstName: employee.firstName,
          lastName: employee.lastName,
          email: employee.email,
        });
      });
    }
  }, [id]);



  const saveOrUpdateEmployee = ({ firstName, lastName, email }) => {
    const employee = { firstName, lastName, email };
    console.log('employee => ' + JSON.stringify(employee));

    const request = id === '_add'
      ? EmployeeService.createEmployee(employee)
      : EmployeeService.updateEmployee(employee, id);

    request.then(() => {
      navigate('/employee');
    });
  };


  
  const getTitle = () => (
    <h3 className="text-center">{id === '_add' ? 'Add Employee' : 
    'Update Employee'}</h3>
  );
  

  return (
    <div>
      <br />
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {getTitle()}
            <div className="card-body">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={saveOrUpdateEmployee}
              >

                <Form>
                  <FormField label="First Name" name="firstName" />
                  <FormField label="Last Name" name="lastName" />
                  <FormField label="Email" name="email" type="email" />
                  <button type='submit' className="btn btn-success" >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => navigate('/employee')}
                    style={{ marginLeft: '10px' }}
                  >
                    Cancel
                  </button>
                </Form>

              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEmployeeComponent;
