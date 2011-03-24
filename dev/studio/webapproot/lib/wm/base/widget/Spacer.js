/*
 *  Copyright (C) 2008-2011 WaveMaker Software, Inc.
 *
 *  This file is part of the WaveMaker Client Runtime.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
dojo.provide("wm.base.widget.Spacer");

dojo.declare("wm.Spacer", wm.Control, {
	classNames: "wmspacer",
        border: 0,
    getMinWidthProp: function() {return this.minWidth || 0;},
    getMinHeightProp: function() {return this.minHeight || 0;}
});

wm.Object.extendSchema(wm.Spacer, {
        disabled: { ignore: 1 },
	scrollX:  { ignore: 1 },
	scrollY:  { ignore: 1 },
	margin:   { ignore: 1 },
	padding:  { ignore: 1 },
	border:   { ignore: 1 },
	borderColor:  { ignore: 1 }
});

// design-time
dojo.extend(wm.Spacer, {
        themeable: false,
	scrim: true
});

wm.Spacer.description = "Resizable spacer for layouts.";
