import React from 'react';
import IssueTable from './pages/Issue-table'
import IssueCard from './pages/Issue-card';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
     <Routes>
       <Route path="/" element={<IssueTable/>}></Route>
       <Route path="issue-card" element={<IssueCard />} />
     </Routes>
   </BrowserRouter>
  );
}

export default App;
