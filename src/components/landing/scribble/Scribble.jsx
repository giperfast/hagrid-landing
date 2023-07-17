import classNames from "classnames";
import classes from './Scribble.module.css';

import scribble1 from '../../../assets/images/scribbles/scribble-1.svg';
import scribble2 from '../../../assets/images/scribbles/scribble-2.svg';
import scribble3 from '../../../assets/images/scribbles/scribble-3.svg';
import scribble4 from '../../../assets/images/scribbles/scribble-4.svg';
import scribble5 from '../../../assets/images/scribbles/scribble-5.svg';
import scribble6 from '../../../assets/images/scribbles/scribble-6.svg';
import scribble7 from '../../../assets/images/scribbles/scribble-7.svg';
import scribble8 from '../../../assets/images/scribbles/scribble-8.svg';
import scribble9 from '../../../assets/images/scribbles/scribble-9.svg';
import scribble10 from '../../../assets/images/scribbles/scribble-10.svg';

const scribbles = [
    {'id': 1, 'image': scribble1},
    {'id': 2, 'image': scribble2},
    {'id': 3, 'image': scribble3},
    {'id': 4, 'image': scribble4},
    {'id': 5, 'image': scribble5},
    {'id': 6, 'image': scribble6},
    {'id': 7, 'image': scribble7},
    {'id': 8, 'image': scribble8},
    {'id': 9, 'image': scribble9},
    {'id': 10, 'image': scribble10},
];

function Scribble({scribble_id}) {
    let id = null
    let image = null

    scribbles.filter(scribble => scribble.id === Number(scribble_id)).map((scribble) => {
        id = scribble['id']
        image = scribble['image']
        return true
    })

    if (image == null) {
        return console.error('Scribble: ' + scribble_id + ' not found')
    }

    if (classes[ 'scribble' + id ] == null) {
        return console.error('Scribble: className scribble' + id + ' not found')
    }

    return <img src={image} className={classNames(classes.scribble, classes[ 'scribble' + id ])} alt="" loading="lazy"></img>
}

export default Scribble;