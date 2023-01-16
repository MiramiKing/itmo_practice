import React from 'react';
import './App.scss';

import {Routes, Route, Navigate} from 'react-router-dom';
import Layout from './layout/Layout';
import NotFoundPage from './pages/NotFoundPage';
import GlossaryPage from './pages/GlossaryPage';
import MindMapGraph from './pages/MindMapPage';


function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Navigate to='/glossary' />} />
                    <Route path='/glossary' element={<GlossaryPage />} />
                    <Route path='/mindmap' element={<MindMapGraph />} />
                    <Route path='/*' element={<GlossaryPage />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
