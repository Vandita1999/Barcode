import React from 'react';
import { connect } from 'react-redux';
import BarcodeScannerView from './BarcodeScanner.view';
import { getTallyDetails } from './BarcodeScanner.action';
//eslint-disable-next-line no-unused-vars
import { BarcodeScannerScreenProps } from './BarcodeScanner.types';

/**
 * Component for barcode scanning screen
 * @typedef {React.FC<BarcodeScannerScreenProps>}
 */

export const BarcodeScannerScreen = props => {
  const { getTallyDetails: getTallyDetailsAction, navigation } = props;
  const [barcodeValue, setBarcodeValue] = React.useState('');
  const [scanBarcode, setScanBarcode] = React.useState(true);
  const operationType = navigation.getParam('tallyType');

  const onWillFocus = () => {
    setScanBarcode(true);
  };

  const onWillBlur = () => {
    setBarcodeValue('');
    setScanBarcode(false);
  };

  const onBarCodeRead = barcodeData => {
    if (barcodeValue === '') {
      setScanBarcode(false);
      setBarcodeValue(barcodeData.data);
      getTallyDetailsAction(barcodeData.data, operationType);
    }
  };
  return (
    //@ts-ignore
    <BarcodeScannerView
      navigation={navigation}
      onBarCodeRead={onBarCodeRead}
      barcodeValue={barcodeValue}
      scanBarcode={scanBarcode}
      onWillFocus={onWillFocus}
      onWillBlur={onWillBlur}
      operationType={operationType}
    />
  );
};
export default connect(null, {
  getTallyDetails
})(BarcodeScannerScreen);
