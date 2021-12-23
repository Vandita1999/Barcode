import { apiClient, endpoints } from '../common/roroTally.service';
/*eslint-disable-next-line no-unused-vars */
import { ResponseMessage } from '@navis-npm/nmobile-core';
/*eslint-disable-next-line no-unused-vars */
import { tallyDetailsData } from './BarcodeScanner.types';
/**
 * @typedef {object} StatusResponse
 * @property {tallyDetailsData} content
 * @property {ResponseMessage[]} messages
 */

/**
 * @param {string} vinNumber
 * @param {string} operationType
 * @returns {AxiosPromise<StatusResponse>}
 */
class BarcodeScanningService {
  getTallyDetails(vinNumber, operationType = 'DSCH') {
    return apiClient.instance.get(endpoints.tallyDetails, { params: { cargolotId: vinNumber, wiType: operationType } });
  }
}
export default BarcodeScanningService;
