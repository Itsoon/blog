import React from 'react';

const details = ({ children }) => {
  return <details>{children}</details>;
};

const detailsTitle = ({ children }) => {
  return <summary>{children}</summary>;
};

const detailsContent = ({ children }) => {
  return <p>{children}</p>;
};

details.Title = detailsTitle;
details.Content = detailsContent;

export default details;
