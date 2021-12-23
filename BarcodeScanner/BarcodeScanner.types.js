/*eslint-disable-next-line no-unused-vars */
import NavigationStackProp from 'react-navigation-stack';
/**
 *
 * @typedef {object} tallyDetailsData
 * @param {string} lotid
 * @param {string} fromPosition
 * @param {string} toPosition
 * @param {string} wiType
 * @param {damageObject} damage
 *
 */
/**
 *
 * @typedef {object} damageObject
 * @param {string} crgdmgSeverity
 * @param {number} crgdmgTypeGkey
 * @param {string} crgdmgtypId
 * @param {number} crgdmgGkey
 * @param {string} crgdmgposX
 * @param {string} crgdmgPosY
 * @param {string} crgdmgRepairRemarks
 * @param {string} crgdmgImg
 */
/**
 * @typedef {object} BarcodeScannerScreenProps
 * @property {function(string):void} getTallyDetails Action to fetch Tally details for VIN number
 * @property {NavigationStackProp} navigation The navigation prop
 * @property {()=> void} onBarCodeRead
 */
/**
 * @typedef {object} BarcodeViewProps
 * @property {function(string):void} getTallyDetails Action to fetch Tally details for VIN number
 * @property {NavigationStackProp} navigation The navigation prop
 * @property {string} barcodeValue Initial state of barcode value
 * @property {boolean} scanBarcode
 * @property {boolean} setScanBarcode
 * @property {string} setBarcodeValue
 * @property {()=> void} onWillFocus
 * @property {()=> void} onWillBlur
 * @property {string} operationType
 */
