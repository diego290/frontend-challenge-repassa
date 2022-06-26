import { GetServerSideProps } from 'next';
import React from "react";
import Router from "next/router";

export default function Index() {
  React.useEffect(() => {
    Router.push("/admin/personagens");
  });

  return <div />;
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
