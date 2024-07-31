import React, { useState } from 'react';
import { Navbar, Container, Nav,Button } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

const Welcome = () => {
    const [file, setFile] = useState(null);

    const handleFileUpload = (event) => {
        const uploadedFile = event.target.files[0];
        setFile(uploadedFile);
        console.log('File uploaded:', uploadedFile);
    };
    
    
    const triggerFileUpload = () => {
        document.getElementById('file-upload').click();
    };

    const columns = [
        {
            dataField: 'id',
            text: 'ID',
            sort: true,
            headerStyle: { width: '30px' },
            style: { width: '50px' }
        },
        {
            dataField: 'name',
            text: 'Name',
            sort: true,
            headerStyle: { width: '100px' },
            style: { width: '50px' }
        },
        {
            dataField: 'status',
            text: 'Status',
            sort: true,
            headerStyle: { width: '50px' },
            style: { width: '50px' }
        },
        {
            dataField: 'upload_date',
            text: 'Upload Date',
            sort: true,
            headerStyle: { width: '50px' },
            style: { width: '50px' }
        },
        {
            dataField: 'modified_date',
            text: 'Modified Date',
            sort: true,
            headerStyle: { width: '50px' },
            style: { width: '50px' }
        },
        {
            dataField: 'view',
            text: 'View',
            sort: true,
            headerStyle: { width: '30px' },
            style: { width: '50px' }
        },
    ];

    const data = [
        { id: 1, firstName: 'Mark', lastName: 'Otto', username: '@mdo' },
        { id: 2, firstName: 'Jacob', lastName: 'Thornton', username: '@fat' },
        { id: 3, firstName: 'Larry', lastName: 'Bird', username: '@twitter' },
    ];

    return (
        <div>
            <Navbar bg="purple" variant="dark" expand="lg" style={{ backgroundColor: '#6f42c1' }}>
                <Container>
                    <Navbar.Brand href="#home">MyApp</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Nav.Link href="#home">Home</Nav.Link> */}
                            {/* <Nav.Link href="#link">Link</Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container className="mt-4">
                {/* <h1 className="mb-4">Welcome!</h1> */}
                <div className="mb-4 text-left">
                    <input
                        type="file"
                        id="file-upload"
                        className="d-none"
                        onChange={handleFileUpload}
                    />
                    <Button onClick={triggerFileUpload} variant="primary">
                        <FontAwesomeIcon icon={faUpload} className="me-2" /> Upload File
                    </Button>
                </div>
                <BootstrapTable 
                    keyField="id"
                    data={data}
                    columns={columns}
                    pagination={paginationFactory()}
                />
            </Container>
        </div>
    );
};

export default Welcome;
