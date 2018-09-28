import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RateSereviceGrid from './RateSereviceGrid';
import { Tabs, Tab, Well, Row, Col } from 'react-bootstrap';
import { actionCreators, actionRate } from '../actions/rates';

class RateService extends Component {

    constructor(props) {
        super(props);

        this.state = {
            gridData: [],
            activeTab: "USD"
        };
    }    

    _handleSelectTab = key => this.setState({ activeTab: key })

    componentWillMount() {       

        this.props.actions.getRates().then(response => {
            if (response) {
                this.setState({
                    gridData: response
                });
            }
        });

        setInterval(_ => {
            this.props.actions.getCurrentRate().then(response => {  
              
                this.setState((previousState) => {
                   
                    previousState.gridData.forEach((element, index) => {
                        if (element.coinSynbol === response.coinSynbol) {
                           
                            response.prvPrice = previousState.gridData[index].price;
                            previousState.gridData[index] = response;
                        }
                    });
                    return { gridData: [...previousState.gridData] };
                });

            });
        }, 4000);
    }

    _getGridData = (data) => {
        data.sort(function (obj1, obj2) {
            // Ascending: first age less than the previous
            return obj2.price - obj1.price;
        });

        return data;
    }

    render() {
        let tablist = [{ name: 'USD', symbol: '$', numericFormat: '0,0.00' }, { name: 'BTC', symbol: 'Ƀ', numericFormat: '0,0.000000' }, { name: 'ETH', symbol: 'Ξ', numericFormat: '0,0.000000' }];

        const tabs = tablist.map((item) => {
            let title = item.name.toUpperCase();
            return (
                <Tab key={item.name} eventKey={item.name} title={title}>
                    {item.name === this.state.activeTab && <RateSereviceGrid gridData={this._getGridData(this.state.gridData)} currencySettings={item} />}
                </Tab>
            );
        });
           
        return (
            <div>

                <Row>
                    <Col lg={10} sm={10} md={10} xs={10} lgOffset={1} smOffset={1} mdOffset={1} xsOffset={1} >
                        <Well>
                            <Tabs activeKey={this.state.activeTab} id="controlled-tab-example" onSelect={this._handleSelectTab}>
                                {tabs}
                            </Tabs>
                        </Well>
                    </Col>
                </Row>

            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            getRates: bindActionCreators(actionCreators, dispatch),
            getCurrentRate: bindActionCreators(actionRate, dispatch)
        }
    };
};

RateService.displayName = 'RateService';
const RateServiceContainer = connect(mapStateToProps, mapDispatchToProps)(RateService);
export default RateServiceContainer;




