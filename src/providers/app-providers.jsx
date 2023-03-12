import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from '../context/context';
import store from '../store';

export const AppProviders = ({ children }) => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Provider store={store}>{children}</Provider>;
      </AppProvider>
    </BrowserRouter>
  );
};
