import { BrowserRouter, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import Home from './routes/Home';
// import App from './App'

const Page = () => {
    return <BrowserRouter>
        <Route exact path='/' component={Home}/>
    </BrowserRouter>

}

export default Page