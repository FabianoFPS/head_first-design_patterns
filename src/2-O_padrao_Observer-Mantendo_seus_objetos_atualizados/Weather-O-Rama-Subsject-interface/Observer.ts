import { Measurements } from './Measurements';

export interface Observer {
  update(data: Measurements): void;
}
