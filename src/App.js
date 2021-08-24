import './App.css';
import Navbar from './components/Navbar/Navbar';
import MainSection from './components/Sections/MainSection';
import SignInForm from './components/SignIn/SignInForm';

function App() {
    return (
        <div className='App'>
            <Navbar />
            <MainSection />
            <SignInForm />
        </div>
    );
}

export default App;
