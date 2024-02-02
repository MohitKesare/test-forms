import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import FormContainer from "./FormContainer";
const UserDataForm = () => {
  const [page, setPage] = useState(1);
  const [userData, setUserData] = useState({
    personalDetails: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
    },
    address: {
      addressLine1: "",
      addressLine2: "",
      city: "",
    },
    paymentDetails: {
      cardNumber: "",
      expiryDate: "",
    },
  });

  const handleChange = (section, field, value) => {
    if (field === "mobile" && value !== "" && !/^\d+$/.test(value)) {
      alert("Mobile number should be 10 digits");
      return;
    }
    setUserData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [field]: value,
      },
    }));
  };
  const isPageFilled = () => {
    switch (page) {
      case 1:
        return (
          userData.personalDetails.firstName &&
          userData.personalDetails.lastName &&
          userData.personalDetails.email &&
          userData.personalDetails.mobile
        );
      case 2:
        return (
          userData.address.addressLine1 &&
          userData.address.addressLine2 &&
          userData.address.city
        );
      case 3:
        return (
          userData.paymentDetails.cardNumber &&
          userData.paymentDetails.expiryDate
        );
      default:
        return false;
    }
  };

  const handleNext = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevious = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const Summary = () => {
    return (
      <div className="cardContainer">
        <h1 className="mt-5 text-center">Summary</h1>
        <p>First Name: {userData.personalDetails.firstName}</p>
        <p>Last Name: {userData.personalDetails.lastName}</p>
        <p>Email: {userData.personalDetails.email}</p>
        <p>Mobile: {userData.personalDetails.mobile}</p>
        <p>Address Line 1: {userData.address.addressLine1}</p>
        <p>Address Line 2: {userData.address.addressLine2}</p>
        <p>City: {userData.address.city}</p>
        <p>Card Number: {userData.paymentDetails.cardNumber}</p>
        <p>Expiry Date: {userData.paymentDetails.expiryDate}</p>
      </div>
    );
  };

  return (
    <FormContainer className="bg-black w-full h-full  border rounded-4">
      <Form onSubmit={handleSubmit}>
        {page === 1 && (
          <div className="cardContainer">
            <div className="d-flex flex-column align-items-center justify-content-center ">
              <h1 class="mt-5 text-center text-white mb-4">Personal Details</h1>
              <Row className="mt-3 mx-auto text-white">
                {/* <Col> */}
                <Form.Group as={Col} controlId="firstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter first name"
                    value={userData.personalDetails.firstName}
                    onChange={(e) =>
                      handleChange(
                        "personalDetails",
                        "firstName",
                        e.target.value
                      )
                    }
                  />
                </Form.Group>
                {/* </Col> */}
                {/* <Col> */}
                <Form.Group as={Col} controlId="lastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter last name"
                    value={userData.personalDetails.lastName}
                    onChange={(e) =>
                      handleChange(
                        "personalDetails",
                        "lastName",
                        e.target.value
                      )
                    }
                    className="mb-4"
                  />
                </Form.Group>
                {/* </Col> */}

                {/* <Col> */}
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter email"
                    value={userData.personalDetails.email}
                    onChange={(e) =>
                      handleChange("personalDetails", "email", e.target.value)
                    }
                    className="mb-4"
                  />
                </Form.Group>
                {/* </Col> */}
                {/* <Col> */}
                <Form.Group controlId="mobile">
                  <Form.Label>Mobile</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter mobile number"
                    value={userData.personalDetails.mobile}
                    onChange={(e) =>
                      handleChange("personalDetails", "mobile", e.target.value)
                    }
                  />
                </Form.Group>
                {/* </Col> */}
              </Row>
              {/* Other personal details fields */}
              <Button
                variant="primary"
                className="mt-3  align-self-end "
                onClick={handleNext}
              >
                Next
              </Button>
            </div>
          </div>
        )}

        {page === 2 && (
          <div className="cardContainer text-white">
            {/* <div className='d-flex flex-column align-items-center'> */}
            <h1 className="mb-4 text-white">Address Section</h1>
            <Form.Group controlId="addressLine1 ">
              <Form.Label>Address Line 1</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter address line 1"
                value={userData.address.addressLine1}
                onChange={(e) =>
                  handleChange("address", "addressLine1", e.target.value)
                }
                className="mb-4"
              />
            </Form.Group>
            <Form.Group controlId="addressLine2 my-2">
              <Form.Label>Address Line 2</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter address line 2"
                value={userData.address.addressLine2}
                onChange={(e) =>
                  handleChange("address", "addressLine2", e.target.value)
                }
                className="mb-4"
              />
            </Form.Group>

            <Form.Group controlId="City my-2">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter City"
                value={userData.address.city}
                onChange={(e) =>
                  handleChange("address", "city", e.target.value)
                }
                className="mb-4"
              />
            </Form.Group>
            <div>
              <Button
                variant="secondary"
                onClick={handlePrevious}
                className="mt-3 mx-3  align-self-start"
              >
                Previous
              </Button>
              <Button
                variant="primary"
                onClick={handleNext}
                className="mt-3 mx-3 align-self-end"
              >
                Next
              </Button>
            </div>
            {/* </div> */}
          </div>
        )}

        {page === 3 && (
          <div className="cardContainer text-white  ">
            {/* <div className='d-flex flex-column align-items-center'> */}
            <h1 className="mb-4 text-white">Payment Method</h1>
            <Form.Group controlId="cardNumber">
              <Form.Label>Card Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter card number"
                value={userData.paymentDetails.cardNumber}
                onChange={(e) =>
                  handleChange("paymentDetails", "cardNumber", e.target.value)
                }
                className="mb-4"
              />
            </Form.Group>

            <Form.Group controlId="cardNumber">
              <Form.Label>Card Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter expiry date"
                value={userData.paymentDetails.expiryDate}
                onChange={(e) =>
                  handleChange("paymentDetails", "expiryDate", e.target.value)
                }
              />
            </Form.Group>
            <div>
              <Button
                variant="secondary"
                onClick={handlePrevious}
                className="mt-3  mx-3  align-self-start"
              >
                Previous
              </Button>
              <Button
                variant="primary"
                type="submit"
                onClick={handleNext}
                className="mt-3  mx-3   align-self-end"
              >
                Submit
              </Button>
            </div>
            {/* </div> */}
          </div>
        )}

        {page === 4 && <Summary />}
      </Form>
    </FormContainer>
  );
};

export default UserDataForm;
