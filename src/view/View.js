import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Style } from './ViewStyle';

export default class _View extends Component {
    constructor(props) {
        super(props);
        this.state = { pressed1: false, pressed2: false, pressed3: false, counter : 0 };
    }

    onPress1(target, counter) {
        if (this.state.pressed1) return;
        else if (this.state.counter == 0) {
            this.setState({ pressed1: true, pressed2: false, pressed3: false, counter: counter });
            this.props.onPress(target);
        }
        else {
            this.setState({ pressed1: true, pressed2: false, pressed3: false });
            this.props.onPress(target, this.state.counter);
        }
    }

    onPress2(target, counter) {
        if (this.state.pressed2) return;
        else if (this.state.counter == 0) {
            this.setState({ pressed1: false, pressed2: true, pressed3: false, counter: counter });
            this.props.onPress(target);
        }
        else {
            this.setState({ pressed1: false, pressed2: true, pressed3: false });
            this.props.onPress(target, this.state.counter);
        }
    }

    onPress3(target, counter) {
        if (this.state.pressed3) return;
        else if (this.state.counter == 0) {
            this.setState({ pressed1: false, pressed2: false, pressed3: true, counter: counter });
            this.props.onPress(target);
        }
        else {
            this.setState({ pressed1: false, pressed2: false, pressed3: true });
            this.props.onPress(target, this.state.counter);
        }
    }

    render() {
        return (
            <View style={Style.viewContainer}>
                <Text style={Style.textBig}>{this.props.item.text}</Text>
                <View style={Style.viewRow}>
                    <TouchableOpacity
                        style={[Style.touchable1, this.state.pressed1 && Style.borderColor]}
                        onPress={this.onPress1.bind(this, this.props.item.button1.target, this.props.counter)}>
                        <Text style={[Style.textSmall, this.state.pressed1 && Style.color]}>
                            {this.props.item.button1.text}
                        </Text>
                    </TouchableOpacity>
                    {this.props.item.button2 && <TouchableOpacity
                        style={[Style.touchable2, this.state.pressed2 && Style.borderColor]}
                        onPress={this.onPress2.bind(this, this.props.item.button2.target, this.props.counter)}>
                        <Text style={[Style.textSmall, this.state.pressed2 && Style.color]}>
                            {this.props.item.button2.text
                            }</Text>
                    </TouchableOpacity>}
                    {this.props.item.button3 && <TouchableOpacity
                        style={[Style.touchable2, this.state.pressed3 && Style.borderColor]}
                        onPress={this.onPress3.bind(this, this.props.item.button3.target, this.props.counter)}>
                        <Text style={[Style.textSmall, this.state.pressed3 && Style.color]}>
                            {this.props.item.button3.text}
                        </Text>
                    </TouchableOpacity>}
                </View>
            </View>
        );
    }
}
