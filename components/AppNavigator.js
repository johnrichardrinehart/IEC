import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './screens/Home'
import StopsList from './screens/StopsList'
import QRCodeScannerScreen from './screens/QRCodeScanner';

const RootStack = createStackNavigator({
  Home: {screen: HomeScreen },
  Stops: {screen: StopsList },
  QRCodeScanner: {screen: QRCodeScannerScreen},
}, {
    headerMode: 'none',
})

export default createAppContainer(RootStack)