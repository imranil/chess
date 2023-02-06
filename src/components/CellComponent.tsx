import React, {FC} from 'react';
import { Cell } from '../models/Cell';
import { Colors } from '../models/Colors';


interface CellProps {
    cell: Cell;
    click: (cell: Cell) => void;
    selected: boolean;
}


const CellComponent: FC<CellProps> = ({cell, click, selected}) => {
    return (
        <div 
            className={['cell', cell.color, selected ? 'selected' : '', cell.avialable && cell.figure ? 'green' : ''].join(' ')}
            onClick={() => click(cell)}
        >
            {cell.avialable && !cell.figure &&
                <div className="avialable" />
            }
            {cell.figure?.logo && 
                <cell.figure.logo className={cell.figure.color === Colors.BLACK ? 'black-logo' : 'white-logo'} />
            }
        </div>
    );
};


export default CellComponent;