import { Screen } from './screen';
import { Tec } from './tec';

export class Project {

    id: number;
    nome: string;
    descrizione: string;
    tecnology: Tec;
    screens?: Screen[];
}
