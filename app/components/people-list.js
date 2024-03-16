import Component from '@glimmer/component';
import { action, set } from '@ember/object';
import { tracked } from '@glimmer/tracking';

const scientists = ['Marie Curie', 'Mae Jemison', 'Albert Hofmann'];

export default class PeopleListComponent extends Component {
  @tracked people = [];

  @action addPerson() {
    this.people.push(scientists.pop());
    set(this, 'people', this.people);
  }
}
