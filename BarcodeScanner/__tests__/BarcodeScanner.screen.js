import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { BarcodeScannerScreen } from '../BarcodeScanner.screen';

const setUpBarcodeScannerScreen = newProps => {
  let props = {
    getTallyDetails: jest.fn(),
    navigation: {
      getParam: jest.fn().mockReturnValue('DSCH')
    }
  };
  props = { ...props, ...newProps };
  // @ts-ignore
  const component = shallow(<BarcodeScannerScreen {...props} />);
  return { props, component };
};
describe('Barcode Scanner screen.', () => {
  beforeEach(jest.clearAllMocks);
  it('Should match snaphot', () => {
    const { component } = setUpBarcodeScannerScreen();
    expect(toJson(component)).toMatchSnapshot();
  });
  it('Should set scanBarcode as false on Wil Focus', () => {
    const { component } = setUpBarcodeScannerScreen();
    expect(component.props().scanBarcode).toBe(true);
    component.props().onWillFocus();
    expect(component.props().scanBarcode).toBe(true);
  });
  it('Should set scanBarcode as false on Will Blur', () => {
    const { component } = setUpBarcodeScannerScreen();
    expect(component.props().scanBarcode).toBe(true);
    component.props().onWillBlur();
    expect(component.props().scanBarcode).toBe(false);
  });
  it('Should set barcodeValue when `onBarCodeRead` is called', () => {
    const mockGetTallyDetails = jest.fn();
    const { component } = setUpBarcodeScannerScreen({ getTallyDetails: mockGetTallyDetails });
    expect(component.props().barcodeValue).toBe('');
    component.props().onBarCodeRead({ data: '123' });
    expect(component.props().barcodeValue).toBe('123');
    expect(mockGetTallyDetails).toBeCalledWith('123', 'DSCH');
    component.props().onBarCodeRead({ data: '345' }); //Should not change the barcode value now
    expect(component.props().barcodeValue).toBe('123');
  });
});
