import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Calendar } from "primereact/calendar";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";



const Pass = ({ userData, setUserData, errors, formatDate }) => {
  const handleInputChange = (index, field, value) => {
    const updatedData = [...userData];
    updatedData[index][field] = value;
    setUserData(updatedData);
  };

  return (
    <div>
    {userData.map((user, index) =>  {
// Utility functions for date handling
const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = [...userData];
    updatedData[index][name] = value;
    setUserData(updatedData);
  };

  const handleDateOfBirthChange = (value) => {console.log("value",value)


    const formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};
    const updatedData = [...userData];
    const values=formatDate(value)
    updatedData[index].dateOfBirth = values;

    // Reset dateOfIssue if it becomes invalid
    if (updatedData[index].dateOfIssue && new Date(value) >= new Date(updatedData[index].dateOfIssue)) {
      updatedData[index].dateOfIssue = "";
    }

    setUserData(updatedData);
  };

  const handleDateOfIssueChange = (value) => {
    const updatedData = [...userData];
    updatedData[index].dateOfIssue = value;

    // Reset expiryDate if it becomes invalid
    if (updatedData[index].expiryDate && new Date(value) >= new Date(updatedData[index].expiryDate)) {
      updatedData[index].expiryDate = "";
    }

    setUserData(updatedData);
  };

  const handleExpiryDateChange = (value) => {
    const updatedData = [...userData];
    updatedData[index].expiryDate = value;
    setUserData(updatedData);
  };

  const getMinDateOfBirth = () => {
    const today = new Date();
    if (user.passengerType === "Adult") {
      today.setFullYear(today.getFullYear() - 60);
    } else if (user.passengerType === "Child") {
      today.setFullYear(today.getFullYear() - 12);
    } else if (user.passengerType === "Infant") {
      today.setFullYear(today.getFullYear() - 3);
    }
    return today;
  };

  const getMaxDateOfBirth = () => new Date();

  const getMinDateOfIssue = () => (user.dateOfBirth ? new Date(user.dateOfBirth) : null);

  const getMaxDateOfIssue = () => new Date();

  const getMinExpiryDate = () => new Date();

  const getMaxExpiryDate = () => {
    const today = new Date();
    today.setFullYear(today.getFullYear() + 25);
    return today;
  };

     return(
     <>
     <Row key={user.id} className="mb-4">
        {/* First Name */}
        <Col md={6}>
          <Form.Group controlId={`firstName${index}`}>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              value={user.firstName}
              onChange={(e) => handleInputChange(index, "firstName", e.target.value)}
              isInvalid={!!errors[`firstName${index}`]}
            />
            <Form.Control.Feedback type="invalid">
              {errors[`firstName${index}`]}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>

        {/* Last Name */}
        <Col md={6}>
          <Form.Group controlId={`lastName${index}`}>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              value={user.lastName}
              onChange={(e) => handleInputChange(index, "lastName", e.target.value)}
              isInvalid={!!errors[`lastName${index}`]}
            />
            <Form.Control.Feedback type="invalid">
              {errors[`lastName${index}`]}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>

        {/* Date of Birth */}
        <Col md={6}>
          <Form.Group controlId={`dateOfBirth${index}`}>
            <Form.Label>Date of Birth</Form.Label>
            <Calendar
              value={user.dateOfBirth ? new Date(user.dateOfBirth) : null}
                onChange={(e) => handleDateOfBirthChange(e.value)}
                minDate={getMinDateOfBirth()}
                maxDate={getMaxDateOfBirth()}
                dateFormat="dd/mm/yy"
            />
            {errors[`dateOfBirth${index}`] && (
              <div className="text-danger">{errors[`dateOfBirth${index}`]}</div>
            )}
          </Form.Group>
        </Col>

        {/* Nationality */}
        <Col md={6}>
          <Form.Group controlId={`nationality${index}`}>
            <Form.Label>Nationality</Form.Label>
            <Form.Control
              type="text"
              value={user.nationality}
              onChange={(e) => handleInputChange(index, "nationality", e.target.value)}
              isInvalid={!!errors[`nationality${index}`]}
            />
            <Form.Control.Feedback type="invalid">
              {errors[`nationality${index}`]}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>

        {/* Date of Issue */}
        <Col md={6}>
          <Form.Group controlId={`dateOfIssue${index}`}>
            <Form.Label>Date of Issue</Form.Label>
            <Calendar
              value={user.dateOfIssue}
              onChange={(e) => handleInputChange(index, "dateOfIssue", e.value)}
              showIcon

              dateFormat="dd/mm/yy"
              minDate={getMinDateOfIssue(user.dateOfBirth)}
              maxDate={getMaxDateOfIssue()}
            />
            {errors[`dateOfIssue${index}`] && (
              <div className="text-danger">{errors[`dateOfIssue${index}`]}</div>
            )}
          </Form.Group>
        </Col>

        {/* Issue Country */}
        <Col md={6}>
          <Form.Group controlId={`issueCountry${index}`}>
            <Form.Label>Issue Country</Form.Label>
            <Form.Control
              type="text"
              value={user.issueCountry}
              onChange={(e) => handleInputChange(index, "issueCountry", e.target.value)}
              isInvalid={!!errors[`issueCountry${index}`]}
            />
            <Form.Control.Feedback type="invalid">
              {errors[`issueCountry${index}`]}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>

        {/* Expiry Date */}
        <Col md={6}>
          <Form.Group controlId={`expiryDate${index}`}>
            <Form.Label>Expiry Date</Form.Label>
            <Calendar
              value={user.expiryDate}
              onChange={(e) => handleInputChange(index, "expiryDate", e.value)}
              showIcon
              dateFormat="dd/mm/yy"
              minDate={getMinExpiryDate(user.dateOfIssue)}
              maxDate={getMaxExpiryDate()}
            />
            {errors[`expiryDate${index}`] && (
              <div className="text-danger">{errors[`expiryDate${index}`]}</div>
            )}
          </Form.Group>
        </Col>
      </Row>
      </>)}
    )}
  </div>
  );
};

export default Pass;
