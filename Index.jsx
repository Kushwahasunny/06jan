import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Pass from "./Pass";

const Index = () => {
  const [userData, setUserData] = useState([
    {
      id: 1,
      passengerType: "Adult",
      passengerKey: "adult1",
      firstName: "",
      lastName: "",
      gender: "Male",
      dateOfBirth: "",
      nationality: "",
      dateOfIssue: "",
      issueCountry: "",
      expiryDate: "",
    },
    {
      id: 2,
      passengerType: "Adult",
      passengerKey: "adult2",
      firstName: "",
      lastName: "",
      gender: "Male",
      dateOfBirth: "",
      nationality: "",
      dateOfIssue: "",
      issueCountry: "",
      expiryDate: "",
    },
  ]);

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    let firstNames = userData.map((user) => user.firstName.trim().toLowerCase());

    userData.forEach((user, index) => {
      if (!user.firstName) newErrors[`firstName${index}`] = "First name is required";
      if (!user.lastName) newErrors[`lastName${index}`] = "Last name is required";
      if (!user.dateOfBirth) newErrors[`dateOfBirth${index}`] = "Date of birth is required";
      if (!user.nationality) newErrors[`nationality${index}`] = "Nationality is required";
      if (!user.dateOfIssue) newErrors[`dateOfIssue${index}`] = "Date of issue is required";
      if (!user.issueCountry) newErrors[`issueCountry${index}`] = "Issue country is required";
      if (!user.expiryDate) newErrors[`expiryDate${index}`] = "Expiry date is required";

      // Check for duplicate first names
      if (
        firstNames.filter((name) => name === user.firstName.trim().toLowerCase()).length > 1
      ) {
        newErrors[`firstName${index}`] = "First name must be unique";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted successfully!", userData);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Pass userData={userData} setUserData={setUserData} errors={errors} />
      <Button type="submit" className="mt-3">
        Submit
      </Button>
    </Form>
  );
};

export default Index;
