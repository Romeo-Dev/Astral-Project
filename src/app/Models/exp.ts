import { Profile } from './profile';
import { Mansion } from './mansion';

export class Exp {
    id: number;
    ruolo: string;
    azienda: string;
    descrizione: string;
    start: Date;
    end: Date;
    profile: Profile;
    mansioni: Mansion[];
}
