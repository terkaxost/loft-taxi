import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

export default function Hook() {
    const classes = useStyles();
    return <Button className={classes.button}>Hook</Button>;
}

// class Hook extends React.Component {
//     classes = () => useStyles

//     render() {
//         return (
//             <Button className={ this.classes.button }>Hook</Button>
//         )
//     }
// }

// export default Hook