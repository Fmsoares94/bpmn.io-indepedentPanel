import { PropertiesBase } from '../propertiesBase';

export class SliderProperties extends PropertiesBase<string> {
  controlType = 'slider';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}