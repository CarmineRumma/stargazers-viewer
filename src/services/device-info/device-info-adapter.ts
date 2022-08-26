import DeviceInfo from 'react-native-device-info';

const APP_VERSION = DeviceInfo.getVersion();
const OS_VERSION = 1; //DeviceInfo.getSystemVersion();

export {APP_VERSION, OS_VERSION};
