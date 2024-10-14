export interface Player {
    college: string;
    country: string;
    draft_number: number;
    draft_round: number;
    draft_year: number;
    first_name: string;
    height: string;
    id: number;
    jersey_number: string;
    last_name: string;
    position: string;
    team: Team;
    weight: string;
}

export interface Team {
    abbreviation: string;
    city: string;
    conference: string;
    division: string;
    full_name: string;
    id: number;
    name: string;
}

export interface AllPlayersTypes {
    data: Player[],
    meta: {
        next_cursor: number;
        per_page: number;
    }
}

export type Fav = { name: string, id: number }