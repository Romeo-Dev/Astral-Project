import { Profile } from './profile';
import { Argo } from './argo';

export class Edu {
    id: number;
	qualifica: string;
	descrizione: string;
	luogo: string;
	graduation: Date;
	args: Argo[];
	profile?: Profile;
}
