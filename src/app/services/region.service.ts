import { Regions } from "../models/model";

export default class RegionService {
  static regions: Regions = {
    Africa: 'Africa',
    Asia: 'Asia',
    Europe: 'Europe',
    America: 'America',
    Oceania: 'Oceania'
  }
  constructor() {}
}