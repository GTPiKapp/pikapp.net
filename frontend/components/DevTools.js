import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

const DEV_TOOLS_VISIBLE_DEFAULT = false;

export default createDevTools(
    <DockMonitor toggleVisibilityKey="ctrl-h"
        changePositionKey="ctrl-w"
        defaultPosition="bottom"
        defaultIsVisible={DEV_TOOLS_VISIBLE_DEFAULT}>
        <LogMonitor />
    </DockMonitor>
);
