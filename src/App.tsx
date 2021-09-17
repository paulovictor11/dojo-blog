import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { Navbar } from './Navbar';
import { Create } from './Create';
import { BlogDetail } from './BlogDetail';
import { NotFound } from './NotFound';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />

                <div className="content">
                    <Switch>
                        <Route path="/" exact component={ Home } />
                        <Route path="/create" component={ Create } />
                        <Route path="/blog/:id" component={ BlogDetail } />
                        <Route path="*" component={ NotFound } />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
