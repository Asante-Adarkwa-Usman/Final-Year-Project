import * as React from 'react';
import theme from '../../../Theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {HeaderComponent, RequestTranscript} from '../../../components';
import TranscriptSVG from '../../../assets/svg/reportCard.svg';
import {PrimaryButton} from '../../../components/button';
import {Portal, Modal, Provider as PaperProvider} from 'react-native-paper';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const width = 200;
const height = 130;
const activeOpacity = 0.8;

const TranscriptScreen = ({navigation}) => {
  const [showModal, setShowModal] = React.useState(false);
  const [requestTranscript, setRequestTranscript] = React.useState(false);
  const [year, setYear] = React.useState();
  const [copies, setCopies] = React.useState();
  const TranscriptRequested = () => {
    setShowModal(false);
    setRequestTranscript(true);
  };
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <HeaderComponent
          title="Transcript"
          onPress={() => {
            navigation.goBack();
          }}
        />
        {requestTranscript === false ? (
          <View style={styles.imageContainer}>
            <TranscriptSVG width={width} height={height} />
            <Text style={styles.textStyle}>No Records</Text>
          </View>
        ) : (
          <ScrollView showsVerticalScrollIndicator={false}>
            <RequestTranscript pending={true} copies={copies} year={year} />
            {/* <RequestTranscript pending={false} copies={copies} year={year} /> */}
          </ScrollView>
        )}
        <View style={{position: 'absolute', bottom: 10, alignSelf: 'center'}}>
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
                  <ScrollView>
                    <View>
                      <Text
                        style={[
                          styles.hostelStyle,
                          {marginBottom: theme.spacing.m},
                        ]}>
                        Enter year and amount of Copies
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                      }}>
                      <View
                        style={{
                          alignSelf: 'flex-start',
                          padding: theme.spacing.m,
                        }}>
                        <Text style={styles.ModaltextStyle}>Academic Year</Text>
                      </View>
                      <View>
                        <TextInput
                          style={styles.input}
                          onChangeText={year => setYear(year)}
                          value={year}
                          placeholder="eg. 1990"
                          keyboardType="numeric"
                        />
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                      }}>
                      <View
                        style={{
                          alignSelf: 'flex-start',
                          padding: theme.spacing.m,
                          marginRight: theme.spacing.xl + 10,
                        }}>
                        <Text style={styles.ModaltextStyle}>Copies</Text>
                      </View>
                      <View>
                        <TextInput
                          style={styles.input}
                          onChangeText={copies => setCopies(copies)}
                          value={copies}
                          placeholder="eg. 3"
                          keyboardType="numeric"
                        />
                      </View>
                    </View>
                  </ScrollView>
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
  Modalcontainer: {
    marginTop: theme.spacing.l,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hostelStyle: {
    fontFamily: 'roboto-regular',
    fontSize: theme.spacing.m + 3,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  ModaltextStyle: {
    fontFamily: 'roboto-regular',
    fontSize: theme.spacing.m,
    fontWeight: 'normal',
  },
  textBoldStyle: {
    fontFamily: 'roboto-regular',
    fontSize: theme.spacing.m,
    fontWeight: 'bold',
  },
  input: {
    fontSize: theme.spacing.m,
    fontFamily: 'roboto-regular',
    textAlign: 'center',
    height: 40,
    width: wp('30'),
    margin: 12,
    borderWidth: 1,
  },
});

export default TranscriptScreen;
