import React from "react";
import Link from "next/link";
import Logop from "../../../public/icons/LogoPlataforma1.png";
import styled from "@emotion/styled";
import Image from "next/image";

const Container = styled.div`
  display: flex;
  width: 150vh;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  margin-left: 0 0 80px 80px;
`;

const GetHired = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

const AboutUs = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

const Blog = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

const Terms = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

const Contact = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

const Footer = () => {
  return (<Container>
      <GetHired> ©2021 Get Hired </GetHired>
      <AboutUs> About Us </AboutUs>
      <Blog> Blog </Blog>
      <Terms> Terms </Terms>
      <Contact> Contact </Contact>
    </Container>
  );
};

export default Footer;
