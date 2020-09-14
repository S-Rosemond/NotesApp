import React, { Fragment } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from '@material-ui/core';
import DefaultBtn from './../buttons/DefaultBtn';
import { makeStyles } from '@material-ui/core/styles';
import { useCardTheme } from '../../theme/useThemes/useThemes';

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

const DefaultCards = ({ cards, buttons }) => {
  const classes = useCardTheme();

  return (
    <Card className={classes.root}>
      {cards.map((card) => (
        <Fragment>
          <CardHeader title={card.title} className={classes.header} />
          <CardContent>
            <Typography noWrap>{card.body}</Typography>
          </CardContent>
          <Divider />
          <CardActions>
            {buttons.map((button) => {
              return (
                <DefaultBtn
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
        </Fragment>
      ))}
    </Card>
  );
};

export default DefaultCards;
