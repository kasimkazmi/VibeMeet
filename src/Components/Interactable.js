import * as React from 'react';
import {View, ViewStyle} from 'react-native';

import {runSpring, binaryInterpolation, snapPoint} from 'react-native-redash';



const Interactable = () => {
  return (
    <PanGestureHandler
      onHandlerStateChange={onGestureEvent}
      {...{onGestureEvent}}>
      <Animated.View {...{style}}>
        <Animated.Code>
          {() =>
            block([
              cond(eq(state, State.END), [
                set(snapPointX, snapPoint(translationX, velocityX, points)),
                set(spring, runSpring(clock, 0, 1)),
                cond(
                  eq(clockRunning(clock), 0),
                  call([snapPointX], ([x]) => onSnap({nativeEvent: {x}})),
                ),
              ]),
              set(
                x,
                cond(
                  eq(state, State.ACTIVE),
                  translationX,
                  binaryInterpolation(spring, translationX, snapPointX),
                ),
              ),
              set(
                y,
                cond(
                  eq(state, State.ACTIVE),
                  translationY,
                  binaryInterpolation(spring, translationY, 0),
                ),
              ),
            ])
          }
        </Animated.Code>
      </Animated.View>
    </PanGestureHandler>
  );
};

export default Interactable;
