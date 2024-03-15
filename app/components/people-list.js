import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from 'tracked-built-ins';

const scientists = ['Marie Curie', 'Mae Jemison', 'Albert Hofmann'];

export default class PeopleListComponent extends Component {
  people = tracked([]);

  @action addPerson() {
    this.people.push(scientists.pop());
  }
}
