import Component from '@glimmer/component';
import { action, set } from '@ember/object';
import { tracked } from 'tracked-built-ins';

const scientists = ['Marie Curie', 'Mae Jemison', 'Albert Hofmann'];

export default class PeopleListComponent extends Component {
  @tracked people = new Map();

  @action addPerson() {
    const guid = Math.random().toString();

    this.people.set(guid, scientists.pop());

    set(this, 'people', this.people);
  }
}
