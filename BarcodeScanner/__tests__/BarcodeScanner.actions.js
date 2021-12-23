import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { getTallyDetails } from '../BarcodeScanner.action';
import { NavigationService } from '@navis-npm/native-helpers';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mockGetTallyDetails = jest.fn();
jest.mock('../BarcodeScanner.service', () =>
  jest.fn().mockImplementation(() => ({
    getTallyDetails: mockGetTallyDetails
  }))
);
jest.mock('@navis-npm/native-helpers', () => {
  return {
    NavigationService: {
      navigate: jest.fn(),
      goBack: jest.fn()
    }
  };
});
describe('gettallyDetails action test', () => {
  beforeEach(jest.clearAllMocks);

  it('fetchWorkQueues Success with no work queues', async () => {
    mockGetTallyDetails.mockResolvedValueOnce({
      status: 200,
      data: {
        content: {
          lotId: 'RORO14',
          fromPosition: '123456',
          toPosition: 'CFS',
          wiType: 'DSCH',
          damage: [
            {
              crgdmgSeverity: 'CargoDamageSeverityEnum[MAJOR]',
              crgdmgTypeGkey: 1,
              crgdmgtypId: 'DENT',
              crgdmgGkey: 26,
              crgdmgposX: 110.32,
              crgdmgPosY: 58.7,
              crgdmgRepairRemarks: 'three damages',
              crgdmgImg: ''
            }
          ]
        }
      }
    });
    const store = mockStore({});
    //@ts-ignore
    await store.dispatch(getTallyDetails('RORO14', 'DSCH'));
    expect(NavigationService.navigate).toHaveBeenCalledTimes(1);
    expect(NavigationService.navigate).toHaveBeenCalledWith('TallyDetailsScreen', {
      tallyDetails: {
        damages: [
          {
            imageData: '',
            notes: 'three damages',
            positionX: 110.32,
            positionY: 58.7,
            severity: 'MAJOR',
            type: 'DENT',
            typeGkey: 1
          }
        ],
        destination: 'CFS',
        operation: 'DSCH',
        origin: '123456',
        vin: 'RORO14'
      }
    });
  });
  it('fetchWorkQueues Fail with no work queues', async () => {
    mockGetTallyDetails.mockRejectedValue({ status: 400 });
    const store = mockStore({});
    //@ts-ignore
    await store.dispatch(getTallyDetails('RORO14', 'DSCH'));
    expect(NavigationService.navigate).toHaveBeenCalledTimes(1);
    expect(NavigationService.navigate).toHaveBeenCalledWith('RecentTallyScreen');
  });
});
