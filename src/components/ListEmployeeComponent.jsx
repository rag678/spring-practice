import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ListEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            employees : []  
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.viewEmployee = this.viewEmployee.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res)=> {
            this.setState({employees: res.data});
        });
    }

    addEmployee(){
        this.props.history.push('/add-employee/_add');
    }
    editEmployee(id){
        this.props.history.push(`/add-employee/${id}`);
    }
    viewEmployee(id){
        this.props.history.push(`/view-employee/${id}`);
    }
    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then(res => {
            this.setState({employees:this.state.employees.filter(employee => employee.id !== id)})
        });
    }
    render() {
        return (
            <div className='container mt-4'>
                <h2 className="text-center">Employees List</h2>
                <div>
                    <button className="btn btn-primary btn-sm" onClick={this.addEmployee.bind(this)}>Add Employee</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Email Id </th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.employees.map(
                                    employee => 
                                    <tr key={employee.Id}>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.emailId}</td>
                                        <td>
                                            <button onClick={()=>this.editEmployee(employee.id)} className="btn btn-info m-auto">update </button>
                                            <button style={{marginLeft:"10px"}} onClick={()=>this.deleteEmployee(employee.id)} className="btn btn-danger .me-2">Delete </button>
                                            <button style={{marginLeft:"10px"}} onClick={()=>this.viewEmployee(employee.id)} className="btn btn-info .me-2">View </button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListEmployeeComponent;