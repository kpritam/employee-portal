import React, { useEffect, useState } from 'react';
import { BACKEND_URL } from '../constants';

const fetchEmployeeDetails = () =>
  fetch(`${BACKEND_URL}/details`, { method: 'GET' }).then((data) =>
    data.json(),
  );

type EmployeeDetails = {
  firstName: string;
  lastName: string;
  email: string;
};

const tableStyle = 'p-3 border-separate border border-green-800';

const EmployeeDetails = (): JSX.Element => {
  const [details, setDetails] = useState<EmployeeDetails[]>();

  useEffect(() => {
    fetchEmployeeDetails().then((data) => setDetails(data));
  }, []);

  return (
    <div className="m-10">
      <table className={tableStyle}>
        <thead>
          <tr>
            <th className={tableStyle}>First Name</th>
            <th className={tableStyle}>Last Name</th>
            <th className={tableStyle}>Email</th>
          </tr>
        </thead>
        <tbody>
          {details?.map((employee, index) => (
            <tr key={index} className="border">
              <td className={tableStyle}>{employee.firstName}</td>
              <td className={tableStyle}>{employee.lastName}</td>
              <td className={tableStyle}>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeDetails;
