import BarcodeScanningServices from '../BarcodeScanner.service';
import { endpoints } from '../../common/roroTally.service';
//eslint-disable-next-line no-unused-vars
import mockAxios, { AxiosStatic } from 'axios';

const mockedAxios = /** @type {jest.Mocked<AxiosStatic>} */ (mockAxios);
mockedAxios.get.mockImplementation(() => Promise.resolve({ status: 200, data: { content: [], messages: [] } }));

describe('Barcode Serive service.', () => {
  const barcodeScanningServices = new BarcodeScanningServices();
  beforeEach(jest.clearAllMocks);

  it('should perform fetch tallies successfully', async () => {
    const mockGetTallyDetails = jest.fn();
    jest.mock('../BarcodeScanner.service', () =>
      jest.fn().mockImplementation(() => ({
        getTallyDetails: mockGetTallyDetails
      }))
    );
    await barcodeScanningServices.getTallyDetails('9783161484100', 'DSCH');
    expect(mockedAxios.get).toHaveBeenCalledWith(endpoints.tallyDetails, { params: { cargolotId: '9783161484100', wiType: 'DSCH' } });
  });
  it('should perform fetch tallies successfully without hardcoded value', async () => {
    const mockGetTallyDetails = jest.fn();
    jest.mock('../BarcodeScanner.service', () =>
      jest.fn().mockImplementation(() => ({
        getTallyDetails: mockGetTallyDetails
      }))
    );
    await barcodeScanningServices.getTallyDetails('9783161484100');
    expect(mockedAxios.get).toHaveBeenCalledWith(endpoints.tallyDetails, { params: { cargolotId: '9783161484100', wiType: 'DSCH' } });
  });
});
