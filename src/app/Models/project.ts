import { Tec } from './tec';
import { Profile } from './profile';

export class Project {

    id: number;
    nome: string;
    descrizione: string;
    tec: Tec;
    developer: Profile;
    screen?: string[];
}
