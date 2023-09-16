import * as React from 'react';
import { createRef } from 'react';
import {NavigationActions, StackActions} from 'react-navigation';


function setTopLevelNavigator(navigatorRef) {
  _navigator.current = navigatorRef;
}

export const _navigator=createRef()
export const isReadyRef=createRef()

function navigate(routeName, params) {
  _navigator.current?.navigate(routeName,params);
}

function goBack() {
   _navigator?.current?.dispatch(NavigationActions.back());
}

function resetNavigation(routeName = 'Login') {
  const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({routeName})],
  });
  _navigator?.current?.dispatch(resetAction);
}

export default {
  navigate,
  setTopLevelNavigator,
  resetNavigation,
  goBack,
};