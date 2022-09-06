import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ContactItem from './components/ContactDetails/ContactItem';
import ContactList from './components/ContactList/ContactList'
import store from './redux/store';

const  App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/item/:id' element={<ContactItem/> } />
        <Route path='/' element={<ContactList />} />
      </Routes>
    </Provider>
  );
}

export default App;
