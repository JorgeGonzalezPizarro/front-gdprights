import React from 'react'

export const Note = ({ Tag = 'div', ...props }) => (
  <Tag
    css={{
      color: 'hsl(0, 0%, 40%)',
      display: 'inline-block',
      fontSize: 9,
      fontStyle: 'italic',
      marginTop: '1em',
    }}
    {...props}
  />
);