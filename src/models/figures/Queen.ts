import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import { ReactComponent as Logo } from "../../assets/queen.svg";

export class Queen extends Figure {

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = Logo;
        this.name = FigureNames.QUENN;
    }

    canMove(target: Cell): boolean {
        if(!super.canMove(target)) {
            return false;
        }
        if(this.cell.isEmptyVertical(target)) {
            return true;
        }
        if(this.cell.isEmptyHorizontal(target)) {
            return true;
        }
        if(this.cell.isEmptyDiagonal(target)) {
            return true;
        }
        return false;
    }
}