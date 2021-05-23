import React from 'react';
import Head from 'next/head';
import Header from "./Header"
import Footer from './Footer';

const Layout = props => {
    return ( 
    <>
        <Header />
        <Head>
            <html lang="es" />
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <title>Full Stack Developer and SRE | Samuel Guardado </title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700" rel="stylesheet" />
        </Head>
        <main>
            {props.children}
        </main>
        <Footer />
    </>
    );
}
 
export default Layout;