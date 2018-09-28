import CreateActionCreator from '../utils/CreateActionCreator';
import { receiveRateListType, receiveRateType } from '../config/types';

export const actionCreators = _ => CreateActionCreator.read({
    path: 'Rates',
    type: receiveRateListType
});

export const actionRate = _ => CreateActionCreator.read({
    path: 'Rates/getrate',
    type: receiveRateType
});
