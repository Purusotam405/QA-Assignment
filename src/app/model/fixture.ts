export interface Fixture {
  officials: {
    referee: string;
    linesman1: string;
    linesman2: string;
  };
  home: string;
  away: string;
  stadium: string;
  time: string;
  date: string;
  price: number;
  homeManager: string;
  awayManager: string;
  homePlayers: [
    {
      name: string;
      number: number;
    }
  ];
  awayPlayers: [
    {
      name: string;
      number: number;
    }
  ];
  id: number;
}
