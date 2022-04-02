import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import './Spinner.css'

const SpinnerDetails = () => {
    return (
        <>
           <div className='spin'>
           <Button variant="primary" disabled>
                <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
                <span className="visually-hidden">Loading...</span>
            </Button>{' '}
            <Button variant="primary" disabled>
                <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
                Loading...
            </Button>
           </div>
        </>
    );
};

export default SpinnerDetails;