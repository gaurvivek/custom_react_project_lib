import { useCallback } from 'react';
import './costom_lib_package.css';
import { CustomDataTable, CustomSearchBar, CustomBreadCrumbs, CustomTitleBar } from './lib';
function App() {
  const tableSchema = [
    {
      header: {
        renderHeader: () => 'First Name',
      },
      body: {
        render: (result) => (result.firstName ? result.firstName : ''),
      },
    },
    {
      header: {
        renderHeader: () => 'Last Name',
      },
      body: {
        render: (result) => (result.lastName ? result.lastName : ''),
      },
    },
    {
      header: {
        renderHeader: () => 'Email Address',
      },
      body: {
        render: (result) => (result.email ? result.email : ''),
      },
    },
    {
      header: {
        renderHeader: () => 'Organization Name',
      },
      body: {
        render: (result) => (result.Organization ? result.Organization.name : ''),
      },
    },
    {
      header: {
        renderHeader: () => (
          <>
            <span>Status</span>
          </>
        ),
      },
      body: {
        render: (result) => result.invitationStatus,
      },
    },
    {
      header: {
        renderHeader: () => 'Edit',
      },
      body: {
        render: (result) => {
          return null;
        },
      },
    },

  ];
  const ownersList = [
    {
      "id": "7",
      "roleId": "36918c89-22b1-5adc-8d5e-b9bc7c6b40b4",
      "orgId": 2,
      "cognitoUsername": "217caea8-55b3-46c6-b0e7-fbd8b06d5bff",
      "email": "gaurav.rana+1@sourcefuse.com",
      "firstName": null,
      "lastName": null,
      "invitationStatus": 2,
      "phoneNumber": null,
      "onboardingFlag": 0,
      "tempPasswordTs": null,
      "joinedDate": null,
      "isActive": true,
      "isDeleted": false,
      "address": null,
      "createdAt": "2021-10-27T09:18:43.869Z",
      "updatedAt": "2021-10-27T09:18:43.869Z",
      "created_at": "2021-10-27T09:18:43.869Z",
      "updated_at": "2021-10-27T09:18:43.869Z",
      "org_id": 2,
      "Organization": {
        "name": "McDonalds"
      }
    },
    {
      "id": "10",
      "roleId": "36918c89-22b1-5adc-8d5e-b9bc7c6b40b4",
      "orgId": 4,
      "cognitoUsername": "35f521f7-b993-4ccc-9885-caf3a6b8b450",
      "email": "gaurav.rana+5@sourcefuse.com",
      "firstName": null,
      "lastName": null,
      "invitationStatus": 2,
      "phoneNumber": null,
      "onboardingFlag": 0,
      "tempPasswordTs": null,
      "joinedDate": null,
      "isActive": true,
      "isDeleted": false,
      "address": null,
      "createdAt": "2021-11-09T06:10:00.763Z",
      "updatedAt": "2021-11-09T06:10:00.763Z",
      "created_at": "2021-11-09T06:10:00.763Z",
      "updated_at": "2021-11-09T06:10:00.763Z",
      "org_id": 4,
      "Organization": {
        "name": "Mc Donalds"
      }
    },
    {
      "id": "us-east-1_wMeXJGQGT#cb016570-a2d9-49fc-8d2c-2f50ecef856f",
      "roleId": "36918c89-22b1-5adc-8d5e-b9bc7c6b40b4",
      "orgId": 3,
      "cognitoUsername": "cb016570-a2d9-49fc-8d2c-2f50ecef856f",
      "email": "trossalba@domain.com",
      "firstName": "tros",
      "lastName": "albra",
      "invitationStatus": 2,
      "phoneNumber": null,
      "onboardingFlag": 0,
      "tempPasswordTs": "1639041346487",
      "joinedDate": null,
      "isActive": true,
      "isDeleted": false,
      "address": null,
      "createdAt": "2021-12-08T09:15:46.487Z",
      "updatedAt": "2021-12-08T11:50:43.043Z",
      "created_at": "2021-12-08T09:15:46.487Z",
      "updated_at": "2021-12-08T11:50:43.043Z",
      "org_id": 3,
      "Organization": {
        "name": "test organization by gaurav"
      }
    },
    {
      "id": "us-east-1_wMeXJGQGT#52596e0f-bfae-4600-bbea-9a3430605f45",
      "roleId": "36918c89-22b1-5adc-8d5e-b9bc7c6b40b4",
      "orgId": 4,
      "cognitoUsername": "52596e0f-bfae-4600-bbea-9a3430605f45",
      "email": "sumit.tiwari@pentair.com",
      "firstName": "Sumit",
      "lastName": "Tiwari",
      "invitationStatus": 2,
      "phoneNumber": "+916351702627",
      "onboardingFlag": 0,
      "tempPasswordTs": "1638335052913",
      "joinedDate": null,
      "isActive": true,
      "isDeleted": false,
      "address": null,
      "createdAt": "2021-11-24T13:50:27.106Z",
      "updatedAt": "2021-12-25T11:42:02.474Z",
      "created_at": "2021-11-24T13:50:27.106Z",
      "updated_at": "2021-12-25T11:42:02.474Z",
      "org_id": 4,
      "Organization": {
        "name": "Mc Donalds"
      }
    },
    {
      "id": "us-east-1_wMeXJGQGT#758ee8b4-9ba7-4441-95ca-4f393c06546e",
      "roleId": "36918c89-22b1-5adc-8d5e-b9bc7c6b40b4",
      "orgId": 3,
      "cognitoUsername": "758ee8b4-9ba7-4441-95ca-4f393c06546e",
      "email": "gaurav.rana+6@sourcefuse.com",
      "firstName": "Gaurav",
      "lastName": "Rana",
      "invitationStatus": 2,
      "phoneNumber": null,
      "onboardingFlag": 0,
      "tempPasswordTs": "1638955474357",
      "joinedDate": null,
      "isActive": true,
      "isDeleted": false,
      "address": "karnal",
      "createdAt": "2021-12-07T09:24:34.359Z",
      "updatedAt": "2021-12-07T09:41:26.032Z",
      "created_at": "2021-12-07T09:24:34.359Z",
      "updated_at": "2021-12-07T09:41:26.032Z",
      "org_id": 3,
      "Organization": {
        "name": "test organization by gaurav"
      }
    },
    {
      "id": "us-east-1_wMeXJGQGT#2923fa58-947a-43d1-80d3-dabdec3af867",
      "roleId": "36918c89-22b1-5adc-8d5e-b9bc7c6b40b4",
      "orgId": 4,
      "cognitoUsername": "2923fa58-947a-43d1-80d3-dabdec3af867",
      "email": "testmail@domain.com",
      "firstName": "all_test",
      "lastName": "ownera",
      "invitationStatus": 2,
      "phoneNumber": null,
      "onboardingFlag": 0,
      "tempPasswordTs": "1639041293073",
      "joinedDate": null,
      "isActive": true,
      "isDeleted": false,
      "address": null,
      "createdAt": "2021-12-08T09:14:53.074Z",
      "updatedAt": "2021-12-13T10:33:14.417Z",
      "created_at": "2021-12-08T09:14:53.074Z",
      "updated_at": "2021-12-13T10:33:14.417Z",
      "org_id": 4,
      "Organization": {
        "name": "Mc Donalds"
      }
    },
    {
      "id": "us-east-1_wMeXJGQGT#ad420071-7bd1-43d6-a162-96e5e6fc4b87",
      "roleId": "36918c89-22b1-5adc-8d5e-b9bc7c6b40b4",
      "orgId": 2,
      "cognitoUsername": "ad420071-7bd1-43d6-a162-96e5e6fc4b87",
      "email": "test@domain.com",
      "firstName": "testname",
      "lastName": "lastname",
      "invitationStatus": 2,
      "phoneNumber": null,
      "onboardingFlag": 0,
      "tempPasswordTs": "1638966464311",
      "joinedDate": null,
      "isActive": true,
      "isDeleted": false,
      "address": null,
      "createdAt": "2021-12-07T12:27:44.312Z",
      "updatedAt": "2021-12-07T12:27:44.312Z",
      "created_at": "2021-12-07T12:27:44.312Z",
      "updated_at": "2021-12-07T12:27:44.312Z",
      "org_id": 2,
      "Organization": {
        "name": "McDonalds"
      }
    },
    {
      "id": "us-east-1_wMeXJGQGT#1a4f8248-61ff-401e-a4f2-2b1af57da41c",
      "roleId": "36918c89-22b1-5adc-8d5e-b9bc7c6b40b4",
      "orgId": 2,
      "cognitoUsername": "1a4f8248-61ff-401e-a4f2-2b1af57da41c",
      "email": "gaurav.rana+44@sourcefuse.com",
      "firstName": "Gaurav",
      "lastName": "Rana",
      "invitationStatus": 2,
      "phoneNumber": "+916351702627",
      "onboardingFlag": 0,
      "tempPasswordTs": "1639033567501",
      "joinedDate": null,
      "isActive": true,
      "isDeleted": false,
      "address": "karnal",
      "createdAt": "2021-12-08T07:06:07.502Z",
      "updatedAt": "2021-12-08T07:06:07.502Z",
      "created_at": "2021-12-08T07:06:07.502Z",
      "updated_at": "2021-12-08T07:06:07.502Z",
      "org_id": 2,
      "Organization": {
        "name": "McDonalds"
      }
    },
    {
      "id": "us-east-1_wMeXJGQGT#8545d3be-66ea-48c3-90bf-86f867b60926",
      "roleId": "36918c89-22b1-5adc-8d5e-b9bc7c6b40b4",
      "orgId": 2,
      "cognitoUsername": "8545d3be-66ea-48c3-90bf-86f867b60926",
      "email": "jiten.jani@mailinator.com",
      "firstName": "Jiten",
      "lastName": "Jani",
      "invitationStatus": 2,
      "phoneNumber": "+916351702627",
      "onboardingFlag": 0,
      "tempPasswordTs": "1639044787037",
      "joinedDate": null,
      "isActive": true,
      "isDeleted": false,
      "address": "karnal",
      "createdAt": "2021-12-08T10:13:07.039Z",
      "updatedAt": "2021-12-16T09:26:10.726Z",
      "created_at": "2021-12-08T10:13:07.039Z",
      "updated_at": "2021-12-16T09:26:10.726Z",
      "org_id": 2,
      "Organization": {
        "name": "McDonalds"
      }
    },
    {
      "id": "us-east-1_wMeXJGQGT#868249f8-7472-43a9-804d-014f2d0b6ad5",
      "roleId": "36918c89-22b1-5adc-8d5e-b9bc7c6b40b4",
      "orgId": 3,
      "cognitoUsername": "868249f8-7472-43a9-804d-014f2d0b6ad5",
      "email": "jiten.jani@domain.com",
      "firstName": "jiten",
      "lastName": "jani",
      "invitationStatus": 2,
      "phoneNumber": null,
      "onboardingFlag": 0,
      "tempPasswordTs": "1638953511561",
      "joinedDate": null,
      "isActive": true,
      "isDeleted": false,
      "address": null,
      "createdAt": "2021-12-07T08:51:51.562Z",
      "updatedAt": "2021-12-08T09:12:29.272Z",
      "created_at": "2021-12-07T08:51:51.562Z",
      "updated_at": "2021-12-08T09:12:29.272Z",
      "org_id": 3,
      "Organization": {
        "name": "test organization by gaurav"
      }
    }
  ]
  const handleLoadMore = useCallback(() => {
    console.log("Table load more")
  });
  const breadCrumsData = [
    {
      label: 'Owner List',
      link: true,
      path: '',
    },
    {
      label: "Custom label",
      link: false,
      path: '',
    },
  ];
  const serachBarProps = {
    filterProps: {
      inputProps: {
        name: 'attribute',
        placeholder: 'All',
        options: [
          { key: 'firstName', value: 'First Name' },
          { key: 'lastName', value: 'Last Name' },
          { key: 'email', value: 'Email Address' },
          { key: 'organization', value: 'Organization' },
          { key: 'status', value: 'Status' },
        ],
        onChange: console.log("SearchBtn onchange"),
        value: "email",
      },
    },
    serachInputProps: {
      name: 'search',
      type: 'text',
      placeholder: 'Search',
      onChange: console.log("SearchBtn onchange"),
      value: "Search me",
      // isInvalid: isFormInvalid(formik.touched.search, formik.errors.search),
    },
    handleSubmit: console.log("SearchBtn Submit"),
  };
  return (
    <div className="App">
      <header className="App-header">

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* <CustomTitleBar
        title={"Custom Title Bar"}
        actionBtn={'Edit'}
        action={() => {
          console.log("TitleBar")
        }}
        searchBar
        serachBarProps={serachBarProps}
      /> */}
      <CustomSearchBar />
      <CustomDataTable
        isHover={ownersList && ownersList.length > 0}
        tableSchema={tableSchema}
        tableBody={ownersList}
        rowInfo={{
          className: (result) => (!result.isActive ? 'text-muted' : ''),
          onClick: (e, result) => { },
        }}
        // isLoading={loading || formik.isSubmitting}
        isLoadMore={true}
        handleLoadMore={() => handleLoadMore()}
      />
    </div>
  );
}

export default App;
