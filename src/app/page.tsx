"use client"
import Layout from '@/components/common/Layout'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'jquery';
import Popper from 'popper.js';
import MainApp from './../components/MainApp'
import '../app/globals.css'
import { ServicesProvider } from '@/contexts/servicesContext'
import { BrowserRouter } from 'react-router-dom';

export default function Home() {
  return (
    <Layout>
      <BrowserRouter>
        <ServicesProvider>
          <MainApp />
        </ServicesProvider>
      </BrowserRouter>
    </Layout>
  )
}
