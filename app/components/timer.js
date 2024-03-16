import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class PeopleListComponent extends Component {
  @tracked time = 0;

  constructor() {
    super(...arguments);
    window.setInterval(() => {
      this.time++;
    });
  }
}
