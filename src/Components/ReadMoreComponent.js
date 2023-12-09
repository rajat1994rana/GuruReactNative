import React from 'react';
import { Text } from 'react-native';
import { ReadMore } from 'react-native-read-more-text';

const ReadMoreComponent = ({ text, numberOfLines = 3 }) => {
  const handleTextReady = () => {
    // Your logic when the "Read More" text is ready
  };

  const renderTruncatedFooter = (handlePress) => {
    return (
      <Text style={{ color: 'blue', marginTop: 5 }} onPress={handlePress}>
        Read more
      </Text>
    );
  };

  const renderRevealedFooter = (handlePress) => {
    return (
      <Text style={{ color: 'blue', marginTop: 5 }} onPress={handlePress}>
        Show less
      </Text>
    );
  };

  return (
    <ReadMore
      numberOfLines={numberOfLines}
    //   renderTruncatedFooter={renderTruncatedFooter}
    //   renderRevealedFooter={renderRevealedFooter}
    //   onReady={handleTextReady}
    >
      <Text>{'text'}</Text>
    </ReadMore>
  );
};

export default ReadMoreComponent;
