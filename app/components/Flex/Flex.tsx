import React from 'react';
import props from '../../../interfaces/props';

const FlexContainer: React.FC<props.FlexProps> = ({
  className = '',
  flex = 'flex',
  flexDirection = 'flex-row',
  flexWrap = 'flex-wrap',
  justifyContent = 'justify-start',
  alignItems = 'items-start',
  alignContent = 'content-start',
  children,
}) => {
  return (
    <div
      className={`${flex} ${flexDirection} ${flexWrap} ${justifyContent} ${alignItems} ${alignContent} ${className}`}
    >
      {children}
    </div>
  );
};

export default FlexContainer;
