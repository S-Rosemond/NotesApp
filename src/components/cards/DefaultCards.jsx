import React, { Fragment } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from '@material-ui/core';
import HTMLReactParser from 'html-react-parser';
import DefaultBtn from './../buttons/DefaultBtn';
import { useCardTheme } from '../../theme/useThemes/useThemes';

const DefaultCards = ({ cards, buttons }) => {
  const classes = useCardTheme();

  return (
    <Fragment>
      {cards.map((card, idx) => (
        <Card key={idx} className={classes.root}>
          <CardHeader title={card.title} className={classes.header} />
          <CardContent>
            <Typography noWrap>{HTMLReactParser(card.body)}</Typography>
          </CardContent>
          <Divider />
          <CardActions>
            {buttons.map((button) => {
              return (
                <DefaultBtn
                  key={card.id + button.id}
                  variant={button.variant || 'text'}
                  color={button.color}
                  text={button.text}
                  size={button.size}
                  fullWidth={button.fullWidth}
                  handleClick={button.handleClick.bind(null, card.id)}
                  disable={button.disable}
                  type={button.type}
                />
              );
            })}
          </CardActions>
        </Card>
      ))}
    </Fragment>
  );
};

export default DefaultCards;
