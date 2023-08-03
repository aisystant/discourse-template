import Component from "@glimmer/component";
import { action, set } from "@ember/object";
import { inject as service } from "@ember/service";
import { tracked } from "@glimmer/tracking";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default class NewsletterForm extends Component {
  @service currentUser;

  @tracked username = '';
  @tracked email = '';
  isSubmitted = false;
  isLoading = false;
  error = 'Произошла какая-то ошибка.';

  @action
  async onSubmit(e) {
    e.preventDefault();
    set(this, 'error', '');
    set(this, 'isLoading', true);

    const data = {
      username: this.username,
      email: this.email,
    };

    // TODO Send request
    console.log(data);
    await sleep(500);
    // TODO Set error if happen

    set(this, 'isLoading', false);
    set(this, 'isSubmitted', true);
  }
}
