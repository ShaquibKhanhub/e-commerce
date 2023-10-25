import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastname, setSetLastname] = useState("");
  const [username, setUsername] = useState("");
  console.log({ email, password });
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleUserName = (e) => {
    setUsername(e.target.value);
  };
  const handleLastName = (e) => {
    setSetLastname(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleApi = () => {
    console.log({ email, password, name, lastname, username });
    axios
      .post("http://localhost:5000/api/auth/register", {
        email: email,
        password: password,
        name: name,
        lastname: lastname,
        username: username,
      })
      .then((result) => {
        console.log(result.data);
        alert("sign up success");
      })
      .catch((error) => {
        alert("service error");
        console.log(error);
      });
  };
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input
            placeholder="name"
            value={name}
            onChange={handleName}
            required
          />
          <Input
            placeholder="last name"
            value={lastname}
            onChange={handleLastName}
            required
          />
          <Input
            placeholder="username"
            value={username}
            onChange={handleUserName}
            required
          />
          <Input placeholder="email" value={email} onChange={handleEmail} />
          <Input
            placeholder="password"
            value={password}
            onChange={handlePassword}
            required
          />

          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleApi}>Register</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
