import { StyleSheet } from 'react-native';
import { moderateScale } from '@navis-npm/native-ui-components';
import * as Colors from '../../assets/colors';
export default StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: Colors.Overlays.background,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  preview: {
    marginTop: moderateScale(7),
    flex: 7,
    alignSelf: 'center',
    width: '95%',
    height: '100%',
    borderWidth: moderateScale(2),
    borderColor: Colors.White,
    borderRadius: moderateScale(8)
  },
  previewCamera: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    overflow: 'hidden',
    borderWidth: moderateScale(2),
    borderRadius: moderateScale(8)
  },
  bottomOverlay: {
    flex: 3,
    marginTop: moderateScale(10),
    height: moderateScale(70),
    width: '100%',
    flexDirection: 'column'
  },
  inputHeader: {
    flex: 4,
    color: Colors.White
  },
  inputHeaderView: {
    height: moderateScale(20),
    marginLeft: '5%'
  },
  inputFieldArea: {
    width: '95%',
    alignSelf: 'center',
    flexDirection: 'row',
    borderWidth: moderateScale(1),
    borderColor: Colors.Black,
    borderRadius: moderateScale(5),
    backgroundColor: Colors.White
  },
  input: {
    textAlign: 'center'
  },
  inputField: {
    flex: 6
  },
  cameraIcon: {
    flex: 1,
    alignSelf: 'center'
  },
  bottomBar: {
    flex: 0,
    marginBottom: 0
  }
});
