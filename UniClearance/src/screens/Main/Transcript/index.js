import * as React from 'react';
import theme from '../../../Theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {HeaderComponent, ModalContent} from '../../../components';
import TranscriptSVG from '../../../assets/svg/reportCard.svg';
import {PrimaryButton} from '../../../components/button';
import {Portal, Modal, Provider as PaperProvider} from 'react-native-paper';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const width = 200;
const height = 130;
const activeOpacity = 0.8;

const TranscriptScreen = ({navigation}) => {
  const [showModal, setShowModal] = React.useState(false);
  const TranscriptRequested = () => {
    setShowModal(true);
    navigation.navigate('TranscriptRequested');
  };
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <HeaderComponent
          title="Transcript"
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
        <View style={styles.imageContainer}>
          <TranscriptSVG width={width} height={height} />
          <Text style={styles.textStyle}>No Records</Text>
        </View>
        <View style={{marginVertical: theme.spacing.xl}}>
          <PrimaryButton
            text="Request Transcript"
            onPress={() => setShowModal(true)}
          />
        </View>
        <View>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <Portal style={styles.PortalView}>
              <Modal
                visible={showModal ? true : false}
                onDismiss={() => setShowModal(false)}
                contentContainerStyle={styles.containerStyle}>
                <View style={{marginTop: theme.spacing.m}}>
                  <ModalContent title="Enter Year and amount of Copies " />
                </View>
                <View style={styles.modalButtonContainer}>
                  <TouchableOpacity
                    activeOpacity={activeOpacity}
                    onPress={TranscriptRequested}
                    style={styles.modalButtonStyle}>
                    <Text style={styles.modalButtonText}>Request</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
            </Portal>
          </KeyboardAvoidingView>
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: theme.spacing.xl,
  },
  textStyle: {
    marginTop: theme.spacing.s,
    fontFamily: 'roboto-regular',
    color: theme.colors.grey,
  },
  containerStyle: {
    backgroundColor: 'white',
    marginTop: theme.spacing.xl * 10,
    flex: 1,
    justifyContent: 'flex-start',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  PortalView: {
    // flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  modalButtonContainer: {
    flex: 1,
    alignSelf: 'center',
    marginTop: theme.spacing.m,
    bottom: theme.spacing.m,
  },
  borderBottomStyle: {
    borderBottomWidth: 1,
    marginBottom: 5,
    borderBottomColor: theme.colors.lightGrey,
  },
  modalButtonStyle: {
    backgroundColor: theme.colors.primary,
    width: wp('30'),
    height: 34,
    marginTop: theme.spacing.l,
    padding: theme.spacing.s,
    borderRadius: theme.borderRadii.m,
    shadowColor: theme.colors.text,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,

    elevation: 3,
  },
  modalButtonText: {
    fontFamily: 'roboto-regular',
    textAlign: 'center',
    fontSize: 14,
    color: theme.colors.white,
  },
});

export default TranscriptScreen;
