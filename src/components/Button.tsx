import React from 'react';

type Props = {
  text?: string;
};

export const ButtonComponent: React.FC<Props> = (props: Props) => (
  <button>{props.text ?? 'No text'}</button>
);

export default ButtonComponent;
