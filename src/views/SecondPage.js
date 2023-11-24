import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useState } from "react";
import { faker } from '@faker-js/faker';

const SecondPage = () => {

  const columns = [
    { field: 'id', headerName: 'id', width: 150 },
    { field: 'firstName', headerName:'firstName', width: 150 },
    { field: 'lastName', headerName: 'lastName', width: 150 },
    { field: 'email', headerName:'email', width: 150 },
    { field: 'age', headerName: 'age', width: 150 },
    { field: 'joinDate', headerName: 'joinDate', width: 150 },
    { field: 'city', headerName: 'city', width: 150 },
    { field: 'company', headerName:'company', width: 150 },
    { field: 'country', headerName:'country', width: 150 },
    { field: 'department', headerName:'department', width: 150 },
    { field: 'phoneIMEI', headerName: 'phoneIMEI', width: 150 },
    { field: 'project', headerName: 'project', width: 150 },
    { field: 'role', headerName: 'role', width: 150 },
    { field: 'state', headerName: 'state', width: 150 },
    { field: 'street', headerName: 'street', width: 150 },
    { field: 'zipCode', headerName: 'zipCode', width: 150 },
  ];


  const generateFakeUsers = (count) => {
    const users = [];
    for (let i = 0; i < count; i++) {
      const user = {
        id: Math.floor(1000 + Math.random() * 9000),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        phoneIMEI: faker.phone.imei(),
        joinDate: faker.date.past().toISOString(),
        role: faker.name.jobTitle(),
        project: faker.random.word(),
        company: faker.company.name(),
        street: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        country: faker.address.country(),
        zipCode: faker.address.zipCode(),
        department: faker.commerce.department(),
        age: faker.datatype.number({ min: 18, max: 80 }),
      };
      users.push(user);
    }
    return users;
  };
  
  const numberOfUsers = 200; // Change this number to generate more users
  const fakeUsers = generateFakeUsers(numberOfUsers);

  const handleCallOrdr = (newColum) => {
    setCuurentcCal(newColum);
  }


  return (
    <div>
      <div style={{ boxShadow: '0 4px 24px 0 rgba(34, 41, 47, 0.1)' }}>
        <DataGrid
          checkboxSelection={true}
          pageSizeOptions={[10,20,50,100]}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          rows={fakeUsers}
          columns={columns}
          onColumnOrderChange={handleCallOrdr}
          components={{
            Toolbar: GridToolbar
          }}
        />
      </div>
    </div>
  );
};

export default SecondPage;
