import React from 'react';

export default function Layout(props) {
  const { title, children } = props;
  return (
    <html>
      <head>
        <title>{title}</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}



