import React from 'react';

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Layout from "./layout/Layout";
import { QueryClient, QueryClientProvider } from "react-query";
import ContactsCreateEdit from "./pages/ContactsCreateEdit";

// Create a client
const queryClient: QueryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/contacts/:path" element={<ContactsCreateEdit />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
