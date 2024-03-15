import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from 'tracked-built-ins';

const scientists = ['Marie Curie', 'Mae Jemison', 'Albert Hofmann'];

export default class PeopleListComponent extends Component {
  people = tracked(Map);

  @action addPerson() {
    const guid = Math.random().toString();

    this.people.set(guid, scientists.pop());
  }
}
