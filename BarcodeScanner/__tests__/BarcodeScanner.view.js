import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import BarcodeScannerView from '../BarcodeScanner.view';

const setUpBarcodeScannerView = newProps => {
  const props = {
    navigation: jest.fn(),
    onBarCodeRead: jest.fn(),
    barcodeValue: '9783161484100',
    scanBarcode: 'true',
    onWillFocus: 'true',
    onWillBlur: 'true',
    operationType: 'LOAD',
    ...newProps
  };
  const component = shallow(<BarcodeScannerView {...props} />);
  return { props, component };
};

describe('Barcode view.', () => {
  it('Should match snaphot', () => {
    const { component } = setUpBarcodeScannerView();
    expect(toJson(component)).toMatchSnapshot();
  });
  it('should navigate on Press BottomBar', () => {
    const { component } = setUpBarcodeScannerView({ operationType: 'DSCH' });
    expect(toJson(component)).toMatchSnapshot();
  });
});
