import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import { ReactComponent as Logo } from "../../assets/king.svg";

export class King extends Figure {

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = Logo;
        this.name = FigureNames.KING;
    }

    canMove(target: Cell): boolean {
        if(!super.canMove(target)) {
            return false;
        }

        const dx = Math.abs(this.cell.x - target.x);
        const dy = Math.abs(this.cell.y - target.y);

        return (dx === 1 && dy === 1) || (dx === 0 && dy === 1) || (dx === 1 && dy === 0);
    }
}