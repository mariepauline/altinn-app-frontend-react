import React from 'react';

import { Grid } from '@material-ui/core';

import { HelpTextContainer } from 'src/features/form/components/HelpTextContainer';
import type { PropsFromGenericComponent } from 'src/layout';

export type IHeaderProps = PropsFromGenericComponent<'Header'>;

const marginStyling = {
  marginTop: '0',
  marginBottom: '0',
};

interface IHeaderSizeProps {
  id: string;
  text: React.ReactNode;
  size?: string;
}

export const HeaderSize = ({ id, size, text }: IHeaderSizeProps) => {
  switch (size) {
    case 'L':
    case 'h2': {
      return (
        <h2
          id={id}
          style={marginStyling}
        >
          {text}
        </h2>
      );
    }

    case 'M':
    case 'h3': {
      return (
        <h3
          id={id}
          style={marginStyling}
        >
          {text}
        </h3>
      );
    }

    case 'S':
    case 'h4':
    default: {
      return (
        <h4
          id={id}
          style={marginStyling}
        >
          {text}
        </h4>
      );
    }
  }
};

export const HeaderComponent = ({ id, size, text, textResourceBindings, language, getTextResource }: IHeaderProps) => {
  return (
    <Grid
      container={true}
      direction='row'
      alignItems='center'
    >
      <Grid item={true}>
        <HeaderSize
          id={id}
          size={size}
          text={text}
        />
      </Grid>
      {textResourceBindings?.help && (
        <Grid
          item={true}
          style={marginStyling}
        >
          <HelpTextContainer
            language={language}
            helpText={getTextResource(textResourceBindings.help)}
          />
        </Grid>
      )}
    </Grid>
  );
};
