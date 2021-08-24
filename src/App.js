import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import MainSection from './components/Sections/MainSection';
import SignInForm from './components/SignIn/SignInForm';

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route path='/home'>
                        <MainSection />
                    </Route>
                    <Route path='/signin'>
                        <SignInForm />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
