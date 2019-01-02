import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './screens/Home';
import QRCodeScannerScreen from './screens/QRCodeScanner';

const RootStack = createStackNavigator({
  Home: {screen: HomeScreen },
  QRCodeScanner: {screen: QRCodeScannerScreen},
}, {
    headerMode: 'none',
})

export default createAppContainer(RootStack)