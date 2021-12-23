import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { RNCamera } from 'react-native-camera';
import barcodeStyles from './BarcodeScanner.styles';
import { strings } from '../../assets/strings/strings';
import { Icon } from '@navis-npm/native-ui-components';
import BottomBar from '../common/BottomBar/BottomBar.view';
/*eslint-disable-next-line no-unused-vars */
import { BarcodeViewProps } from './BarcodeScanner.types';

/**
 *
 * @typedef {React.FC<BarcodeViewProps>}
 */
const BarcodeScannerView = ({ navigation, onBarCodeRead, barcodeValue, scanBarcode, onWillFocus, onWillBlur, operationType }) => {
  const refRNCamera = React.useRef(null);
  return (
    <View style={barcodeStyles.container}>
      <NavigationEvents onWillFocus={onWillFocus} onWillBlur={onWillBlur} />
      {scanBarcode && (
        <View style={barcodeStyles.preview}>
          <RNCamera ref={refRNCamera} type={RNCamera.Constants.Type.back} captureAudio={false} style={barcodeStyles.previewCamera} onBarCodeRead={onBarCodeRead} />
        </View>
      )}
      <View style={barcodeStyles.bottomOverlay}>
        <View style={barcodeStyles.inputHeaderView}>
          <Text style={barcodeStyles.inputHeader}>{strings.en.labels.vin}</Text>
        </View>
        <View style={barcodeStyles.inputFieldArea}>
          <View style={barcodeStyles.inputField}>
            <TextInput style={barcodeStyles.input} value={barcodeValue} />
          </View>
          <View style={barcodeStyles.cameraIcon}>
            <Icon name={strings.en.icons.camera} width={20} height={18} />
          </View>
        </View>
      </View>
      <View style={barcodeStyles.bottomBar}>
        <BottomBar
          screenTitle={operationType === strings.en.labels.load ? strings.en.placeholders.tallyLoad : strings.en.placeholders.tallyDischarge}
          navigation={navigation}
          hasBackIcon={true}
        />
      </View>
    </View>
  );
};

export default BarcodeScannerView;
