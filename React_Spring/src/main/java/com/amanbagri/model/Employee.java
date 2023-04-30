package com.amanbagri.model;

import java.math.BigDecimal;
import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Employee")
public class Employee {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long EmployeeId;
	@Column(name="first_name")
	private String firstName;
	@Column(name="last_name")
	private String lastName;
	@Column(name="email_id")
	private String email;
	@Column(name="date_of_birth")
	private Date date_of_Birth;
	
	@Column(name="gender")
	private String gender;
	
	@Column(name="phone")
	private String phone;
	
	@Column(name="hire_date")
	private Date hire_Date ;
	
	@Column(name="job_title")
	private String job_Title ;
	
	@Column(name="salary")
	private BigDecimal salary ;
	
	@Column(name="manager_id")
	private Long managerId  ;
	
	
	@Column(name="department_id")
	private Long departmentId  ;
	
	
	@Column(name="password")
	private String password  ;
	
	
	public Employee() {
		
	}
	
	
	


	public Employee(String firstName, String lastName, String email, Date date_of_Birth, String gender, String phone,
			Date hire_Date, String job_Title, BigDecimal salary, Long managerId, Long departmentId, String password) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.date_of_Birth = date_of_Birth;
		this.gender = gender;
		this.phone = phone;
		this.hire_Date = hire_Date;
		this.job_Title = job_Title;
		this.salary = salary;
		this.managerId = managerId;
		this.departmentId = departmentId;
		this.password = password;
	}






	public long getEmployeeId() {
		return EmployeeId;
	}


	public void setEmployeeId(long employeeId) {
		EmployeeId = employeeId;
	}


	public String getFirstName() {
		return firstName;
	}


	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}


	public String getLastName() {
		return lastName;
	}


	public void setLastName(String lastName) {
		this.lastName = lastName;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public Date getDate_of_Birth() {
		return date_of_Birth;
	}


	public void setDate_of_Birth(Date date_of_Birth) {
		this.date_of_Birth = date_of_Birth;
	}


	public String getGender() {
		return gender;
	}


	public void setGender(String gender) {
		this.gender = gender;
	}


	public String getPhone() {
		return phone;
	}


	public void setPhone(String phone) {
		this.phone = phone;
	}


	public Date getHire_Date() {
		return hire_Date;
	}


	public void setHire_Date(Date hire_Date) {
		this.hire_Date = hire_Date;
	}


	public String getJob_Title() {
		return job_Title;
	}


	public void setJob_Title(String job_Title) {
		this.job_Title = job_Title;
	}


	public BigDecimal getSalary() {
		return salary;
	}


	public void setSalary(BigDecimal salary) {
		this.salary = salary;
	}


	public Long getManagerId() {
		return managerId;
	}


	public void setManagerId(Long managerId) {
		this.managerId = managerId;
	}


	public Long getDepartmentId() {
		return departmentId;
	}


	public void setDepartmentId(Long departmentId) {
		this.departmentId = departmentId;
	}





	public String getPassword() {
		return password;
	}





	public void setPassword(String password) {
		this.password = password;
	}
	
	
	
	


}
