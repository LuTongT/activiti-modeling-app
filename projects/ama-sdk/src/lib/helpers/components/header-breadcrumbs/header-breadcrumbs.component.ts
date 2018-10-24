 /*!
 * @license
 * Copyright 2018 Alfresco, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { BreadcrumbItem } from '../../common';
import { AmaState } from '../../../store/app.state';
import { selectAppDirtyState } from '../../../store/app.selectors';

@Component({
    selector: 'amasdk-header-breadcrumbs',
    templateUrl: './header-breadcrumbs.component.html'
})

export class HeaderBreadcrumbsComponent implements OnInit {
    @Input() breadcrumbs$: Observable<BreadcrumbItem[]>;

    dirtyState$: Observable<boolean>;

    constructor(private store: Store<AmaState>) {}

    ngOnInit() {
        this.dirtyState$ = this.store.select(selectAppDirtyState);
    }
}
