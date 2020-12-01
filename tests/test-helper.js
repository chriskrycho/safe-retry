import Application from 'multi-loads-yo/app';
import config from 'multi-loads-yo/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
