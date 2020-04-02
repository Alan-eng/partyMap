import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import { flexbox } from '@material-ui/system';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'baseline',
      width: 300,
      justifyContent: 'space-between',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
      background: '#6E648A',
      color: '#FFF'
    },
  }),
);

export default function SimpleSelect() {
  const classes = useStyles();
  const [price, setPrice] = React.useState('free');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setPrice(event.target.value as string);
  };

  return (
    <div className={classes.root}>
      <span>Стоимость: </span>
      <FormControl variant="filled" className={classes.formControl}>
        <NativeSelect
          value={price}
          onChange={handleChange}
          name="price"
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'price' }}
        >
          <option value={'any'}>Не важно</option>
          <option value={'free'}>Бесплатно</option>
          <option value={'donation'}>Донейшен</option>
          <option value={'entranceFee'}>Есть плата за вход</option>
        </NativeSelect>
      </FormControl>
    </div>
  );
}