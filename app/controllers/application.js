import Controller from "@ember/controller";
import { load } from "../helpers/load";
import { cached } from "tracked-toolbox";
import { tracked } from "@glimmer/tracking";

const foo = (value, time, shouldResolve) =>
  new Promise((resolve, reject) => {
    setTimeout(() => (shouldResolve ? resolve(value) : reject(value)), time);
  });

const MAX = 1;

export default class ApplicationController extends Controller {
  count = 0;

  @tracked retryCount = 0;

  @cached
  get foo() {
    // THIS IS WEIRD.
    this.retryCount;
    return load(foo(this.count++, 1000));
  }

  get canRetry() {
    return this.retryCount < MAX;
  }

  retry = () => this.retryCount++;
}
