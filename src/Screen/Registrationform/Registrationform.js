import React, { Component } from 'react';
import {
    Pressable,
    ScrollView,
    Text, View,
    TouchableOpacity
} from 'react-native';
import { TextInput, Menu, Button, Title, FAB, Checkbox } from 'react-native-paper';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { format } from 'date-fns';
import { nameregex, mobileregex, notempty } from '../../component/constants';
import styles from './style';
import { connect } from 'react-redux'
class RegistrationScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisible: false,
            dateofinvoice: '',
            menubrandccolor: false,
            modalcolor: '',
            name: '',
            mobileno: '',
            modalpurchase: '',
            pincode: '',
            state: '',
            dateofinvoice: '',
            batteryno: '',
            chassisno: '',
            finance: '',
            // variable for error test
            nameerror: false,
            mobilenoerror: false,
            modalpurchaseerror: false,
            pincoderror: false,
            staterror: false,
            dateofinvoiceerror: false,
            batterynoerror: false,
            chassisnoerror: false,
            modalcolorerror: false,
            checkedyes: false,
            checkedNO: false,
        }

    }
    showDatePickerdate = () => {
        this.setState({
            isVisible: true,
        });
    };
    hideDatePickerDate = () => {
        this.setState({
            isVisible: false,
        });
    };
    handleConfirmDate = (dob) => {
        var formattedDate = format(dob, 'dd-MM-yyyy ');
        this.setState({
            dateofinvoice: formattedDate,
        });
        this.hideDatePickerDate();
    };
    validatename = () => {
        let { name } = this.state;
        if (nameregex.test(name)) {
            this.setState({
                nameerror: false
            })
        }
        else {
            this.setState({
                nameerror: true
            })
        }
    }
    validatemobile = () => {
        let { mobileno } = this.state;
        if (mobileregex.test(mobileno)) {
            this.setState({
                mobilenoerror: false
            })
        }
        else {
            this.setState({
                mobilenoerror: true
            })
        }
    }
    validateModal = () => {
        let { modalpurchase } = this.state;
        if (!notempty.test(modalpurchase)) {
            this.setState({
                modalpurchaseerror: false
            })
        }
        else {
            this.setState({
                modalpurchaseerror: true
            })
        }
    }

    validatePin = () => {
        let { pincode } = this.state;
        if (!notempty.test(pincode)) {
            this.setState({
                pincoderror: false
            })
        }
        else {
            this.setState({
                pincoderror: true
            })
        }
    }

    validateState = () => {
        let { state } = this.state;
        if (nameregex.test(state)) {
            this.setState({
                staterror: false
            })
        }
        else {
            this.setState({
                staterror: true
            })
        }
    }
    validatebattery = () => {
        let { batteryno } = this.state;
        if (!notempty.test(batteryno)) {
            this.setState({
                batterynoerror: false
            })
        }
        else {
            this.setState({
                batterynoerror: true
            })
        }
    }
    validateChasisno = () => {
        let { chassisno } = this.state;
        if (!notempty.test(chassisno)) {
            this.setState({
                chassisnoerror: false
            })
        }
        else {
            this.setState({
                chassisnoerror: true
            })
        }
    }
    onButtonSubmit = () => {
        console.log(this.state)
    }
    render() {
        let { isVisible, menubrandccolor,
            modalcolor, name, mobileno,
            modalpurchase, pincode, state,
            dateofinvoice,
            batteryno,
            chassisno,
            nameerror,
            mobilenoerror,
            modalpurchaseerror,
            pincoderror,
            staterror,
            dateofinvoiceerror,
            batterynoerror,
            chassisnoerror,
            checkedNO,
            checkedyes
        } = this.state;
        const theme = {
            roundness: 5,
            colors: {
                text: 'black',
                placeholder: 'grey',
                primary: 'green',
                background: 'white',
            },
        };
        const themeError = {
            roundness: 5,
            colors: {
                text: 'black',
                placeholder: 'red',
                primary: 'green',
                background: 'white',
            },
        };
        let allsource = ['red', 'blue', 'yellow', 'green']
        const eye = (
            <TextInput.Icon name="arrow-down-thick" size={25} color={'#C22D0D'}
            />
        )
        const alert = (
            <TextInput.Icon name="alert" size={25} color={'#C22D0D'}

            />
        )
        return (
            <View>
                <ScrollView style={{ marginBottom: hp('4%') }}>
                    <Text style={{ fontSize: 20, alignSelf: 'center', padding: 20 }}>Warranty Registration</Text>
                    <TextInput
                        label="Customer Name *"
                        theme={nameerror ? themeError : theme}
                        mode='outlined'
                        style={styles.textinput}
                        value={name}
                        right={nameerror ? alert : null}
                        onChangeText={(text) => { this.setState({ name: text }) }}
                        onEndEditing={() => { this.validatename() }}
                    />
                    <TextInput
                        label="Customer Mobile Number *"
                        theme={mobilenoerror ? themeError : theme}
                        mode='outlined'
                        style={styles.textinput}
                        keyboardType='numeric'
                        onChangeText={(text) => { this.setState({ mobileno: text }) }}
                        right={mobilenoerror ? alert : null}
                        maxLength={10}
                        onEndEditing={() => { this.validatemobile() }}
                    />
                    <TextInput
                        label="Modal Purchased *"
                        theme={modalpurchaseerror ? themeError : theme}
                        onChangeText={(text) => { this.setState({ modalpurchase: text }) }}
                        mode='outlined'
                        style={styles.textinput}
                        value={modalpurchase}
                        right={modalpurchaseerror ? alert : null}
                        onEndEditing={() => { this.validateModal() }}
                    />
                    <TextInput
                        label="Pincode *"
                        value={pincode}
                        mode='outlined'
                        keyboardType='numeric'
                        style={styles.textinput}
                        onChangeText={(text) => { this.setState({ pincode: text }) }}
                        right={pincoderror ? alert : null}
                        maxLength={6}
                        theme={pincoderror ? themeError : theme}
                        onEndEditing={() => { this.validatePin() }}
                    />
                    <TextInput
                        label="State *"
                        mode='outlined'
                        value={state}
                        right={staterror ? alert : null}
                        theme={staterror ? themeError : theme}
                        onChangeText={(text) => { this.setState({ state: text }) }}
                        onEndEditing={() => { this.validateState() }}
                        style={styles.textinput}
                    />
                    <Pressable
                        onPress={() => { this.showDatePickerdate() }}
                    >
                        <TextInput
                            label="Date of Invoice *"
                            disabled={true}
                            mode='outlined'
                            value={dateofinvoice}
                            style={styles.textinput}
                        />
                    </Pressable>
                    <DateTimePickerModal
                        isVisible={isVisible}
                        mode="date"
                        onConfirm={this.handleConfirmDate}
                        onCancel={this.hideDatePickerDate}
                    />
                    <TextInput
                        label="Battery No *"
                        mode='outlined'
                        style={styles.textinput}
                        onEndEditing={() => { this.validatebattery() }}
                        value={batteryno}
                        onChangeText={(text) => { this.setState({ batteryno: text }) }}
                        theme={batterynoerror ? themeError : theme}
                        right={batterynoerror ? alert : null}

                    />
                    <TextInput
                        label="Chassis No *"
                        theme={theme}
                        mode='outlined'
                        style={styles.textinput}
                        onEndEditing={() => { this.validateChasisno() }}
                        value={chassisno}
                        onChangeText={(text) => { this.setState({ chassisno: text }) }}
                        theme={chassisnoerror ? themeError : theme}
                        right={chassisnoerror ? alert : null}
                    />
                    <Pressable
                        onPress={() => this.setState({ menubrandccolor: true })}
                    >
                        <TextInput
                            label="Modal Color *"
                            theme={theme}
                            disabled={true}
                            mode='outlined'
                            value={modalcolor}
                            right={eye}
                            style={styles.textinput}
                        />
                        <Menu
                            visible={menubrandccolor}
                            onDismiss={() => {
                                this.setState({ menubrandccolor: false });
                            }}
                            style={{
                                height: hp('30%'),
                                width: wp('80%'),
                                marginLeft: wp('5%'),
                            }}
                            anchor={
                                <Button
                                    onPress={() => {
                                        this.setState({ menubrandccolor: true });
                                    }}></Button>
                            }>
                            <ScrollView>
                                {allsource &&
                                    allsource.map((a, i) => {
                                        return (
                                            <TouchableOpacity
                                                onPress={() => {
                                                    this.setState({
                                                        modalcolor: a,
                                                        menubrandccolor: false,
                                                    });
                                                }}
                                                key={i}>
                                                <Title style={{ margin: wp('3%') }}>{a}</Title>
                                            </TouchableOpacity>
                                        );
                                    })}
                            </ScrollView>
                        </Menu>
                    </Pressable>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: wp('12%') }}>
                        <Text style={{ fontSize: 18, alignSelf: 'center' }}>Finance Through Bajaj</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Checkbox
                                status={checkedyes ? 'checked' : 'unchecked'}

                                onPress={() => {
                                    this.setState({ checkedyes: !checkedyes, finance: 'yes' })
                                }}
                                color='red'
                            />
                            <Text style={{ fontSize: 18, alignSelf: 'center' }}>Yes</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Checkbox
                                status={checkedNO ? 'checked' : 'unchecked'}
                                color='red'
                                onPress={() => {
                                    this.setState({ checkedNO: !checkedNO, finance: 'no' })
                                }}
                            />
                            <Text style={{ fontSize: 18, alignSelf: 'center' }}>No</Text>
                        </View>
                    </View>
                    <FAB
                        theme={{ colors: { accent: '#ff5b69' } }}
                        label="Submit"
                        style={{ width: wp('80%'), alignSelf: 'center', marginTop: hp('3%') }}
                        //  loading={true}
                        color="white"
                        animated={true}
                        onPress={() => this.onButtonSubmit()}
                    />
                </ScrollView>
            </View>

        )
    }
}
function mapStateToProps(state) {
    // take the state data 
    return {

    };
}
function mapDispatchToProps(dispatch) {
    // dispacth action to the reducer
    return {

    };
}
export default connect(mapStateToProps, mapDispatchToProps)(RegistrationScreen);