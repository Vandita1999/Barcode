/*eslint-disable-next-line no-unused-vars */
import { tallyDetailsData } from './BarcodeScanner.types';
/**
 *
 * @param {tallyDetailsData} rawTallyDetails
 * @returns
 */
export const transformN4TallyDetails = rawTallyDetails => {
  let tallyDetails = {};
  tallyDetails.vin = rawTallyDetails.lotId;
  tallyDetails.origin = rawTallyDetails.fromPosition;
  tallyDetails.destination = rawTallyDetails.toPosition;
  tallyDetails.operation = rawTallyDetails.wiType;

  let damages = rawTallyDetails.damage.map(damage => {
    let transformedDamage = {};
    transformedDamage.positionX = damage.crgdmgposX;
    transformedDamage.positionY = damage.crgdmgPosY;
    transformedDamage.type = damage.crgdmgtypId;
    transformedDamage.typeGkey = damage.crgdmgTypeGkey;
    transformedDamage.severity = damage.crgdmgSeverity.slice(-7).slice(1, 6);
    transformedDamage.notes = damage.crgdmgRepairRemarks;
    transformedDamage.imageData = damage.crgdmgImg;

    return transformedDamage;
  });
  tallyDetails.damages = damages;
  return tallyDetails;
};
