import Component from '@glimmer/component';
import { tracked } from 'tracked-built-ins';

export default class PeopleListComponent extends Component {
  @tracked time = 0;

  constructor() {
    super(...arguments);
    window.setInterval(() => {
      this.time++;
    });
  }
}
