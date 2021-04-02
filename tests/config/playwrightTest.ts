/**
 * Copyright (c) Microsoft Corporation.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { newTestType } from '../folio/out';
import type { Browser, BrowserType, LaunchOptions, BrowserContext, Page } from '../../index';
import { CommonTestArgs } from './pageTest';
import type { ServerTestArgs } from './serverTest';
export { expect } from 'folio';

export type PlaywrightTestArgs = CommonTestArgs & {
  browserName: 'chromium' | 'firefox' | 'webkit';
  browserType: BrowserType<Browser>;
  browserChannel: string | undefined;
  browserOptions: LaunchOptions;
  headful: boolean;
  createUserDataDir: () => Promise<string>;
  launchPersistent: (options?: Parameters<BrowserType<Browser>['launchPersistentContext']>[1]) => Promise<{ context: BrowserContext, page: Page }>;
};

export const test = newTestType<PlaywrightTestArgs & ServerTestArgs>();