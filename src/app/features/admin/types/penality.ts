export interface IPenality {
  id?: number;
  name: string;
  description: string;
  count: number;
  expiration: number;
  index?: number;
}

export class Penality implements IPenality {
  id: number = 0;
  index: number = 0;
  name: string = 'New Penality';
  description: string = '';
  count: number = 0;
  expiration: number = 1;
  constructor(data) {
    Object.assign(this, data);
  }
}
