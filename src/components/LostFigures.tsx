import React, {FC} from 'react';
import { Figure } from '../models/figures/Figure';


interface LostFiguresProps {
    title: string;
    figures: Figure[];
}


const LostFiguresComponent: FC<LostFiguresProps> = ({title, figures}) => {
    return (
        <div className='lost'>

        </div>
    );
};


export default LostFiguresComponent;