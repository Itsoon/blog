import React from 'react';

const Details = ({ children }) => {
  return <details>{children}</details>;
};

const DetailsTitle = ({ children }) => {
  return <summary>{children}</summary>;
};

const DetailsContent = ({ children }) => {
  return <p>{children}</p>;
};

Details.Title = DetailsTitle;
Details.Content = DetailsContent;

export { Details };
