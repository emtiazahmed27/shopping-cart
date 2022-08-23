import { Provider } from 'react-redux'
import './App.css'
import CartDetails from './components/CartDetails'
import Hader from './components/Hader'
import ProoductDisplay from './components/ProoductDisplay'
import store from './Reducers/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App bg-gray-50 h-full md:h-screen">
        <Hader />
        <div className="grid grid-cols-12 gap-6">
          <ProoductDisplay />
          <CartDetails />
        </div>

      </div>
    </Provider>
  )
}

export default App
