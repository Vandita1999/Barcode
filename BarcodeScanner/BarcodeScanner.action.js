import { NavigationService } from '@navis-npm/native-helpers';
import BarcodeScanningService from './BarcodeScanner.service';
import { transformN4TallyDetails } from './BarcodeScanner.utils';
/*eslint-disable-next-line no-unused-vars */
import { ThunkAction } from 'redux-thunk';
/*eslint-disable-next-line no-unused-vars */
import { AppState } from '../common/typedef';
/*eslint-disable-next-line no-unused-vars */
import { Action } from 'redux';
/*eslint-disable-next-line no-unused-vars */
import { tallyDetailsData } from './BarcodeScanner.types';

/**
 *
 * @typedef {tallyDetailsData} tallyDetails
 */
/**
 *
 * @param {string} vinNumber
 * @param {string} operationType
 * @returns {ThunkAction<void,AppState,null,Action<string>>}
 */
const getTallyDetails = (vinNumber, operationType) => (dispatch, getState) => {
  const barcodeScanningService = new BarcodeScanningService();
  return barcodeScanningService
    .getTallyDetails(vinNumber, operationType)
    .then(response => {
      const rawTallyDetails = response.data.content;
      const tallyDetails = transformN4TallyDetails(rawTallyDetails);
      NavigationService.navigate('TallyDetailsScreen', { tallyDetails });
    })
    .catch(error => {
      NavigationService.navigate('RecentTallyScreen');
    });
};
export { getTallyDetails };
