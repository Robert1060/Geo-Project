import { Regions } from '../models/model';

export abstract class RegionService {
  static regions: Regions = {
    Africa: 'africa',
    Asia: 'asia',
    Europe: 'europe',
    America: 'america',
    Oceania: 'oceania',
  };
  constructor() {}
}
