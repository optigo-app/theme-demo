import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useState } from "react";
import { faker } from '@faker-js/faker';

const SecondPage = () => {

  const columns = [
    { field: 'col1', headerName: 'Column 1', width: 150 },
    { field: 'col2', headerName: 'Column 2', width: 150 },
  ];

  const rows = [
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },

  ];

  const [currentCal, setCuurentcCal] = useState(columns);

  const handleCallOrdr = (newColum) => {
    setCuurentcCal(newColum);
  }

  const generateFakeUsers = (count) => {
    const users = [];
    for (let i = 0; i < count; i++) {
      const user = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        phoneNumber: faker.phone,
        joinDate: faker.date.past().toISOString(),
        role: faker.name.jobTitle(),
        project: faker.random.word(),
        company: faker.company.name(),
        address: {
          street: faker.address.streetAddress(),
          city: faker.address.city(),
          state: faker.address.state(),
          country: faker.address.country(),
          zipCode: faker.address.zipCode(),
        },
        department: faker.commerce.department(),
        age: faker.datatype.number({ min: 18, max: 80 }),
      };
      users.push(user);
    }
    return users;
  };
  
  const numberOfUsers = 200; // Change this number to generate more users
  const fakeUsers = generateFakeUsers(numberOfUsers);

  console.log("faker",fakeUsers);

  return (
    <div>
      <div style={{ boxShadow: '0 4px 24px 0 rgba(34, 41, 47, 0.1)' }}>
        <DataGrid
          checkboxSelection={true}
          pageSizeOptions={[5, 10, 15]}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          rows={rows}
          columns={currentCal}
          onColumnOrderChange={handleCallOrdr}
          components={{
            Toolbar: GridToolbar
          }}
        />
      </div>
      {/* <CardHeader>
        <CardTitle>Create Data Grid 🙌</CardTitle>
      </CardHeader>
      <CardBody>
        <CardText>This is your second page.</CardText>
        <CardText>
          Chocolate sesame snaps pie carrot cake pastry pie lollipop muffin.
          Carrot cake dragée chupa chups jujubes. Macaroon liquorice cookie
          wafer tart marzipan bonbon. Gingerbread jelly-o dragée chocolate.
        </CardText>
      </CardBody> */}
    </div>
  );
};

export default SecondPage;
